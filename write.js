/**
 * @author Don (dl90)
 * @date January 12, 2020
 * @version 1.0
 */

const fs = require("fs");
const fileName = __dirname + "/history.txt";


const date = new Date();
let strToWrite = (date.toLocaleString() + " - 25C");

console.log(strToWrite);
console.log(Date(strToWrite));



const writeFile = (fileName, str) => {
  return new Promise((reject) => {
    fs.writeFile(fileName, str, "utf-8", (err) => {
      if (err) {
        reject(err.message);
      }
    })
  })
}