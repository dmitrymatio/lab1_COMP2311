/**
 * @author Don (dl90)
 * @date January 12, 2020
 * @version 1.0
 */


const fs = require("fs");
const fileName = "a2bc194f4cbf9a1caf8cd38a93d100f5b798cbe75a965ae3b04067ece8bc62e9" //TODO change to hashed history 
const input = "25 Celsius"; // TODO chage from static to converted input 
const fileStore = "../history"
const filePath = `${fileStore}/${fileName}`;

readDir(fileStore)
  .catch(err => console.log(err));

/**
 * Adds timestamp to input
 * @param {String} input 
 */
const timeStamp = (input) => {
  const date = new Date();
  return (date.toLocaleString() + " - " + input + "\n");
}


/**
 * Read directory
 * @param {String} path 
 */
function readDir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err || files === undefined) {
        reject(err.message);
      } else {
        if (files.includes(fileName)) {
          // TODO append to file
          appendFile(filePath, timeStamp(input))
            .then(state => console.log(`Append = ${state}`));
        } else {
          // TODO create file
          writeFile(filePath, timeStamp(input))
            .then(state => console.log(`Create = ${state}`));
        }
      }

    })
  })
}


/**
 * Append to existing file
 * @param {String} file 
 * @param {String} str 
 */
function appendFile(path, str) {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, str, (err) => {
      if (err) {
        reject(err.message);
      }
      else {
        resolve(true);
      }
    })
  })
}


/**
 * Write/Create file
 * @param {String} fileName 
 * @param {String} str 
 */
function writeFile(path, str) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, str, "utf-8", (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(true);
      }
    })
  })
}

module.exports = { readDir }