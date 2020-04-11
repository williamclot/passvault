/**
 * @name crypto.js
 * @description Functions to encrypt/decrypt data buffers
 * @author William Clot | Camille Plays
 */

const crypto = require('crypto');

getCipherKey = (password) => {
  return crypto.createHash('sha256').update(password).digest();
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
 * Encryption function
 * @param buffer data
 * @param string password
 */
encrypt = (data, password) => {
  const initVect = getInitVect();
  const cipherKey = getCipherKey(password);
  const cipher = getCipher(cipherKey, initVect);
  const ciphertext = cipher.update(data).digest();
  return initVect + ciphertext;
}

decrypt = (data, password) => {
  const cipherKey = getCipherKey(password);
  const decipher = crypto.createDecipheriv('aes256', cipherKey, initVect);
  const plaintext = decipher.update(ciphertext);
  return plaintext
}