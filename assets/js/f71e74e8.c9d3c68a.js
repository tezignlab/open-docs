"use strict";(self.webpackChunktezign_open_docs=self.webpackChunktezign_open_docs||[]).push([[4670],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=p(n),d=a,g=y["".concat(s,".").concat(d)]||y[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[y]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(1163),a=(n(9496),n(9613));const i={sidebar_position:3},o="\u6388\u6743",c={unversionedId:"asset-selector/authorize",id:"asset-selector/authorize",title:"\u6388\u6743",description:"\u5411\u7279\u8d5e\u7533\u8bf7\uff1aauthUrl, aesKey, aesIv",source:"@site/docs/frontend/asset-selector/authorize.md",sourceDirName:"asset-selector",slug:"/asset-selector/authorize",permalink:"/docs/frontend/asset-selector/authorize",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/frontend/asset-selector/getting-started"},next:{title:"\u914d\u7f6e\u9879",permalink:"/docs/frontend/asset-selector/config"}},s={},p=[],l={toc:p},y="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6388\u6743"},"\u6388\u6743"),(0,a.kt)("p",null,"\u5411\u7279\u8d5e\u7533\u8bf7\uff1aauthUrl, aesKey, aesIv\nSSO \u8ba4\u8bc1\u94fe\u63a5\u683c\u5f0f\uff1a{authUrl}?aesUserInfo={\u7ecf\u8fc7 aesKey \u52a0\u5bc6\u7684\u7528\u6237\u4fe1\u606f}&targetUrl={encodeURIComponent(\u8ba4\u8bc1\u6210\u529f\u91cd\u5b9a\u5411\u5730\u5740)}\uff0c\u52a0\u5bc6\u4fe1\u606f\u751f\u6210\u89c4\u5219\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.alibaba.fastjson.JSONObject;\nimport org.apache.commons.codec.binary.Base64;\n\nimport javax.crypto.Cipher;\nimport javax.crypto.spec.IvParameterSpec;\nimport javax.crypto.spec.SecretKeySpec;\nimport java.net.URLDecoder;\nimport java.net.URLEncoder;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Date;\nimport java.util.logging.Level;\nimport java.util.logging.Logger;\n\n/**\n * AES\u52a0\u5bc6\u5de5\u5177\n */\npublic class AESUtilV2 {\n    private static final String KEY_ALGORITHM = "AES";\n    // CBC mode\n    private static final String ENCRYPT_MODE_CBC = "AES/CBC/PKCS5Padding";\n\n    /**\n     * AES \u52a0\u5bc6\u64cd\u4f5c\n     *\n     * @param plainText \u660e\u6587\n     * @param key       \u5bc6\u94a5\n     * @param iv        \u5411\u91cf\n     * @return \u8fd4\u56deBase64\u8f6c\u7801\u540e\u7684\u52a0\u5bc6\u6570\u636e\n     */\n    public static String encryptAndEncode(String plainText, String key, String iv) {\n        try {\n            byte[] bytePlainText = plainText.getBytes(StandardCharsets.UTF_8);\n            byte[] byteKey = key.getBytes(StandardCharsets.UTF_8);\n            byte[] byteIV = iv.getBytes(StandardCharsets.UTF_8);\n\n            Cipher cipher = Cipher.getInstance(ENCRYPT_MODE_CBC);// \u521b\u5efa\u5bc6\u7801\u5668\n            IvParameterSpec ivParam = new IvParameterSpec(byteIV);\n            SecretKeySpec secretKey = new SecretKeySpec(byteKey, KEY_ALGORITHM);\n            cipher.init(Cipher.ENCRYPT_MODE, secretKey, ivParam);// \u521d\u59cb\u5316\u4e3a\u52a0\u5bc6\u6a21\u5f0f\u7684\u5bc6\u7801\u5668\n            byte[] result = cipher.doFinal(bytePlainText);// \u52a0\u5bc6\n            String encryptString = Base64.encodeBase64String(result);\n            return URLEncoder.encode(encryptString, "utf-8");\n        } catch (Exception ex) {\n            Logger.getLogger(AESUtilV2.class.getName()).log(Level.SEVERE, null, ex);\n        }\n\n        return null;\n    }\n\n    /**\n     * AES \u89e3\u5bc6\u64cd\u4f5c\n     *\n     * @param ciphertext \u5bc6\u6587\n     * @param key        \u5bc6\u94a5\n     * @param iv         \u5411\u91cf\n     * @return \u660e\u6587\n     */\n    public static String decryptAndDecode(String ciphertext, String key, String iv) {\n        try {\n            ciphertext = URLDecoder.decode(ciphertext, StandardCharsets.UTF_8.name());\n            byte[] byteKey = key.getBytes(StandardCharsets.UTF_8);\n            byte[] byteIV = iv.getBytes(StandardCharsets.UTF_8);\n            Cipher cipher = Cipher.getInstance(ENCRYPT_MODE_CBC);\n            IvParameterSpec ivParam = new IvParameterSpec(byteIV);\n            SecretKeySpec secretKey = new SecretKeySpec(byteKey, KEY_ALGORITHM);\n            //\u4f7f\u7528\u5bc6\u94a5\u3001\u5411\u91cf\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u8bbe\u7f6e\u4e3a\u89e3\u5bc6\u6a21\u5f0f\n            cipher.init(Cipher.DECRYPT_MODE, secretKey, ivParam);\n            //\u6267\u884c\u64cd\u4f5c\n            byte[] result = cipher.doFinal(Base64.decodeBase64(ciphertext));\n            return new String(result, StandardCharsets.UTF_8);\n        } catch (Exception ex) {\n            Logger.getLogger(AESUtilV2.class.getName()).log(Level.SEVERE, null, ex);\n        }\n\n        return null;\n    }\n\n    public static void main(String[] args) {\n        JSONObject jo = new JSONObject();\n        // \u7528\u6237\u90ae\u7bb1\u548c\u624b\u673a\u53f7\uff0c\u4e8c\u8005\u5fc5\u9009\u5176\u4e00\n        jo.putIfAbsent("loginEmail", "wangfeng@tezign.com");\n        jo.putIfAbsent("loginPhone", "15705273217");\n        // \u79df\u6237\u57df\u540d\n        jo.putIfAbsent("domain", "vms-t13.tezign.com");\n        // \u52a0\u5bc6\u65f6\u95f4\uff0c\u8ba4\u8bc1\u670d\u52a1\u7aef\u4f1a\u6839\u636e\u8be5\u65f6\u95f4\u6233\u8fdb\u884c\u5931\u6548\u6821\u9a8c\n        jo.putIfAbsent("encryptTime", new Date());\n        // \u7528\u6237\u540d\uff0c\u53ef\u9009\n        jo.putIfAbsent("username", "levi.wang");\n\n        // \u52a0\u5bc6\u79d8\u94a5\u548c\u504f\u79fb\u5411\u91cf\uff0c\u7531\u7279\u8d5e\u5bf9\u63a5\u4eba\u5458\u63d0\u4f9b\n        String aesKey = "1234567890abcdef";\n        String aesIv = "1234567890abcdef";\n\n        String ss = jo.toString();\n        String aa = encryptAndEncode(ss, aesKey, aesIv);\n        System.out.println("\u52a0\u5bc6======  " + aa);\n\n        String bb = decryptAndDecode(aa, aesKey, aesIv);\n        System.out.println("\u89e3\u5bc6======  " + bb);\n    }\n}\n')))}u.isMDXComponent=!0}}]);