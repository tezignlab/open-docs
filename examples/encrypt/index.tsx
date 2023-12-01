import React, { useState } from 'react';
// import crypto from 'crypto-browserify';
const CryptoJS = require('crypto-js');

function encrypt(data, key, iv) {
  // Convert the key and IV from UTF-8 strings to WordArrays
  const keyBytes = CryptoJS.enc.Utf8.parse(key);
  const ivBytes = CryptoJS.enc.Utf8.parse(iv);

  // Encrypt the data using AES-CBC with PKCS5Padding
  const encrypted = CryptoJS.AES.encrypt(data, keyBytes, {
    iv: ivBytes,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });

  // Return the encrypted data as a Base64-encoded string
  return encrypted.toString();
}

function decrypt(data, key, iv) {
  // Convert the key and IV from UTF-8 strings to WordArrays
  const keyBytes = CryptoJS.enc.Utf8.parse(key);
  const ivBytes = CryptoJS.enc.Utf8.parse(iv);

  // Decrypt the data using AES-CBC with PKCS5Padding
  const decrypted = CryptoJS.AES.decrypt(data, keyBytes, {
    iv: ivBytes,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });

  // Convert the decrypted data from a WordArray to a UTF-8 string
  const decryptedData = decrypted.toString(CryptoJS.enc.Utf8);

  // Return the decrypted data
  return decryptedData;
}

export default function EncryptComponent() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [key, setKey] = useState('');
  const [iv, setIV] = useState('');

  const en = (input, key, iv) => {
    if (!key || !iv || !input) {
      return;
    }
    const encrypted = encrypt(input, key, iv);
    console.log(encrypted);
    setOutput(encrypted);
  };
  const de = (output, key, iv) => {
    if (!key || !iv || !output) {
      return;
    }
    const decrypted = decrypt(output, key, iv);
    console.log(decrypted);
    setInput(decrypted);
  };

  return (
    <div>
      <p>AES</p>

      <p>
        Input Encryption <br />
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            en(e.target.value, key, iv);
          }}
          className="w-full h-36 border-gray-300 p-4 rounded-md"
        ></textarea>
      </p>
      <p>
        aesKey:{' '}
        <input
          value={key}
          onChange={(e) => {
            setKey(e.target.value);
            en(input, e.target.value, iv);
          }}
          className="w-200 p-2 rounded-md border-gray-300 border-solid"
        />
      </p>
      <p>
        aesIv:{' '}
        <input
          value={iv}
          onChange={(e) => {
            setIV(e.target.value);
            en(input, key, e.target.value);
          }}
          className="w-200 p-2 rounded-md border-gray-300 border-solid"
        />
      </p>
      <p>
        Output Encryption <br />
        <textarea
          value={output}
          onChange={(e) => {
            setOutput(e.target.value);
            de(e.target.value, key, iv);
          }}
          className="w-full h-36 border-gray-300 p-4 rounded-md"
        ></textarea>
      </p>
    </div>
  );
}
