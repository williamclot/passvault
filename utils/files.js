/**
 * @file files.js 
 * @description Functions to read/write to files
 * @author: William Clot | Camille Plays
 */

const fs = require('fs');

/**
 * Read a file function
 * @param string path
 */
readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

/**
 * Write to a file function
 * @param string path
 * @param buffer data
 */
writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, error => {
      if (error) reject(error);
      resolve();
    });
  });
}

module.exports = {
  writeFile: writeFile,
  readFile: readFile
}