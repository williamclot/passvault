/**
 * @name crypto.js
 * @description Functions to encrypt/decrypt data buffers
 * @author William Clot | Camille Plays
 */

const crypto = require('crypto');


/**
 * Create encryption key from password
 * @param string password
 */
getCipherKey = (password) => {
  return crypto.createHash('sha256').update(password).digest();
}

createInitVect = () => {
  return crypto.randomBytes(16);
}

getCipher = (cipherKey, initVect) => {
  return crypto.createCipheriv('aes256', cipherKey, initVect);
}

/**
 * Encryption function
 * @param buffer data
 * @param string password
 */
encryptData = (data, password) => {
  const initVect = getInitVect();
  const cipherKey = getCipherKey(password);
  const cipher = getCipher(cipherKey, initVect);
  const ciphertext = cipher.update(data).digest();
  return initVect + ciphertext;
}

decryptData = (data, password) => {
  const cipherKey = getCipherKey(password);
  const decipher = crypto.createDecipheriv('aes256', cipherKey, initVect);
  const plaintext = decipher.update(ciphertext);
  return plaintext
}