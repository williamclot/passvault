/**
 * @file files.js 
 * @description Functions to read/write to files
 * @author: William Clot | Camille Plays
 */

const fs = require('fs');
const zlib = require('zlib');
const os = require('os');

// console.log(os.homedir());
// const readStream = fs.createReadStream(os.homedir + '/file.txt');
// readStream.pipe(process.stdout);

readFile = (path) => {
  const unzipStream = zlib.createGunzip();
  const readStream = fs.createReadStream(path);

  const data = readStream.pipe(unzipStream);
  console.log(data);
};

readFile('./newfile.txt');