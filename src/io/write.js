/**
 * @author Don (dl90)
 * @date January 12, 2020
 * @version 1.0
 */


const fs = require("fs");


/**
 * Writes to db
 * @param {String} path path of "db"
 * @param {String} fileName "name of file"
 * @param {String} content "content of file"
 */
function main(path, fileName, content) {
  const filePath = `${path}/${fileName}`;

  readDir(path, filePath, fileName, content)
    .catch(err => console.log(err));

}


/**
 * Adds timestamp to input
 * @param {String} input String to add timestamp to
 */
const timeStamp = (input) => {
  const date = new Date();
  return (date.toLocaleString() + " - " + input + "\n");
}


/**
 * Read directory
 * @param {String} path path of db
 * @param {String} filePath path of file
 * @param {String} fileName name of file
 * @param {String} content content of file
 */
function readDir(path, filePath, fileName, content) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err || files === undefined) {
        reject(err.message);
      } else {
        if (files.includes(fileName)) {
          appendFile(filePath, timeStamp(content))
            .then(state => console.log(`${fileName} Append = ${state}`));
        } else {
          writeFile(filePath, timeStamp(content))
            .then(state => console.log(`${fileName} Create = ${state}`));
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

module.exports = { main }
