---
sidebar_position: 3
---

# 授权

向特赞申请：authUrl, aesKey, aesIv
SSO 认证链接格式：{authUrl}?aesUserInfo={经过 aesKey 加密的用户信息}&targetUrl={encodeURIComponent(认证成功重定向地址)}，加密信息生成规则如下：

```java
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.codec.binary.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * AES加密工具
 */
public class AESUtilV2 {
    private static final String KEY_ALGORITHM = "AES";
    // CBC mode
    private static final String ENCRYPT_MODE_CBC = "AES/CBC/PKCS5Padding";

    /**
     * AES 加密操作
     *
     * @param plainText 明文
     * @param key       密钥
     * @param iv        向量
     * @return 返回Base64转码后的加密数据
     */
    public static String encryptAndEncode(String plainText, String key, String iv) {
        try {
            byte[] bytePlainText = plainText.getBytes(StandardCharsets.UTF_8);
            byte[] byteKey = key.getBytes(StandardCharsets.UTF_8);
            byte[] byteIV = iv.getBytes(StandardCharsets.UTF_8);

            Cipher cipher = Cipher.getInstance(ENCRYPT_MODE_CBC);// 创建密码器
            IvParameterSpec ivParam = new IvParameterSpec(byteIV);
            SecretKeySpec secretKey = new SecretKeySpec(byteKey, KEY_ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, secretKey, ivParam);// 初始化为加密模式的密码器
            byte[] result = cipher.doFinal(bytePlainText);// 加密
            String encryptString = Base64.encodeBase64String(result);
            return URLEncoder.encode(encryptString, "utf-8");
        } catch (Exception ex) {
            Logger.getLogger(AESUtilV2.class.getName()).log(Level.SEVERE, null, ex);
        }

        return null;
    }

    /**
     * AES 解密操作
     *
     * @param ciphertext 密文
     * @param key        密钥
     * @param iv         向量
     * @return 明文
     */
    public static String decryptAndDecode(String ciphertext, String key, String iv) {
        try {
            ciphertext = URLDecoder.decode(ciphertext, StandardCharsets.UTF_8.name());
            byte[] byteKey = key.getBytes(StandardCharsets.UTF_8);
            byte[] byteIV = iv.getBytes(StandardCharsets.UTF_8);
            Cipher cipher = Cipher.getInstance(ENCRYPT_MODE_CBC);
            IvParameterSpec ivParam = new IvParameterSpec(byteIV);
            SecretKeySpec secretKey = new SecretKeySpec(byteKey, KEY_ALGORITHM);
            //使用密钥、向量进行初始化，设置为解密模式
            cipher.init(Cipher.DECRYPT_MODE, secretKey, ivParam);
            //执行操作
            byte[] result = cipher.doFinal(Base64.decodeBase64(ciphertext));
            return new String(result, StandardCharsets.UTF_8);
        } catch (Exception ex) {
            Logger.getLogger(AESUtilV2.class.getName()).log(Level.SEVERE, null, ex);
        }

        return null;
    }

    public static void main(String[] args) {
        JSONObject jo = new JSONObject();
        // 用户邮箱和手机号，二者必选其一
        jo.putIfAbsent("loginEmail", "wangfeng@tezign.com");
        jo.putIfAbsent("loginPhone", "15705273217");
        // 租户域名
        jo.putIfAbsent("domain", "vms-t13.tezign.com");
        // 加密时间，认证服务端会根据该时间戳进行失效校验
        jo.putIfAbsent("encryptTime", new Date());
        // 用户名，可选
        jo.putIfAbsent("username", "levi.wang");

        // 加密秘钥和偏移向量，由特赞对接人员提供
        String aesKey = "1234567890abcdef";
        String aesIv = "1234567890abcdef";

        String ss = jo.toString();
        String aa = encryptAndEncode(ss, aesKey, aesIv);
        System.out.println("加密======  " + aa);

        String bb = decryptAndDecode(aa, aesKey, aesIv);
        System.out.println("解密======  " + bb);
    }
}
```
