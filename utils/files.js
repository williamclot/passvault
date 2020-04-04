/**
 * crypto.js 
 * Functions to encrypt/decrypt files
 * @date: 3/28/2020
 * @author: William Clot
 */

const fs = require('fs');
const os = require('os');

console.log(os.homedir());
const readStream = fs.createReadStream(os.homedir + '/file.txt');
readStream.pipe(process.stdout);