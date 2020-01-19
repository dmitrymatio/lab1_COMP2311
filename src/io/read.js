/**
 * @author Don (dl90)
 * @date January 18, 2020
 * @version 1.0
 */


const fs = require("fs");


/**
 * Reads directory
 * @param {String} dirPath path of dir to read
 */
function readDir(dirPath) {
  return new Promise((resolve, reject) => {
    if (typeof (dirPath) !== 'string') {
      reject(new Error("Wrong parameters, must be string"))
    } else {
      fs.readdir(dirPath, (err, files) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(files)
        }
      })
    }
  })
}


/**
 * Reads file
 * @param {String} filePath path of file to read
 */
function read(filePath) {
  return new Promise((resolve, reject) => {
    if (typeof (filePath) !== 'string') {
      reject(new Error("Wrong filePath, must be string"));
    } else {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(data);
        }
      })
    }
  })
}

module.exports = { read, readDir }
