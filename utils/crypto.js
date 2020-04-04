/**
 * crypto.js 
 * Functions to encrypt/decrypt files
 * 3/28/2020
 * William Clot
 */

const crypto = require('crypto');

getCipherKey = (password) => {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest();
}

getInitVect = () => {
    return crypto.randomBytes(16);
}

getCipher = (cipherKey, initVect) => {
    const initVect = initVect;
    const algo = 'aes256';
    const key = cipherKey;
    return crypto.createCipheriv(algo, key, initVect);
  }

/**
 * encrypt()
 * data: buffer object
 * password: string
 */

encrypt = (data, password) => {
    const initVect = getInitVect();
    const cipherKey = getCipherKey(password);
    const cipher = getCipher(cipherKey,initVect);
    const ciphertext = cipher.update(data).digest();
    return initVect + ciphertext;
  }

decrypt = (initVect, ciphertext, password) => {
    const cipherKey = getCipherKey(password);
    const decipher = crypto.createDecipheriv('aes256', cipherKey, initVect);
    const plaintext = decipher.update(ciphertext);
    return plaintext
}