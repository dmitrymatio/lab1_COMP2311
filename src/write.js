/**
 * @author Don (dl90)
 * @date January 12, 2020
 * @version 1.0
 */

const fs = require("fs");
const fileName = __dirname + "/history.txt";
const input = "25 Celsius"; // TODO chage from static to converted input 


/**
 * Adds timestamp to input
 * @param {String} input 
 */
const timeStamp = (input) => {
  const date = new Date();
  return (date.toLocaleString() + " - " + input + "\n");
}

readDir(__dirname);

/**
 * Read directory
 * @param {String} path 
 */
function readDir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err.message);
      }

      if (files.includes("history.txt")) {
        // TODO append to file
        appendFile(fileName, timeStamp(input))
          .then(state => console.log(`Append = ${state}`));
      } else {
        // TODO create file
        writeFile(fileName, timeStamp(input))
          .then(state => console.log(`Create = ${state}`));
      }
    })
  })
}


/**
 * Append to existing file
 * @param {String} file 
 * @param {String} str 
 */
function appendFile(filePath, str) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, str, (err) => {
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
function writeFile(fileName, str) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, str, "utf-8", (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(true);
      }
    })
  })
}

module.exports = { readDir }