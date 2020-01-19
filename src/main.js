/**
 * @author Don (dl90)
 * @date January 18, 2020
 * @version 1.0
 */


const { userMaker, sessionMaker, historyMaker } = require("./objGen");
const { read, readDir } = require("./io/read");
const write = require("./io/write").main;

const fileNameObj = {
  user: "users.txt",
  session: "session.txt",
}


const historyDBPath = "../db/history"
const userDBPath = "../db/users"
const sessionDBPath = "../db/sessions"

const [users, sessions] = [[], []];
let parsedUsers = [];


/**
 * @TODO
 * 
 * 1. need to make userID and other fields unique
 * 2. need to compare sessions with history file name (named after sessions)
 * 3. remove files older than 1 year
 * 4. fix setTimeout parsedUsers
 * 
 */
const user = userMaker(3, "Don", "don@abc.ca", "abc123");
const session = sessionMaker(3, "Don3", "Don");
// const history = historyMaker("25C");

users.push(user);
sessions.push(session);
// console.log(...users, ...sessions);


function main() {
  continue;
}

// userDBWrite(user);
// sessionDBWrite(session);
// historyDBWrite("25C");

userDBRead(`${userDBPath}/${fileNameObj.user}`);
setTimeout(() => console.log(parsedUsers), 100);


checkDir(userDBPath);
function checkDir(path) {
  readDir(path)
    .then(file => console.log(file))
    .catch(err => console.log(err));
}



function parse(data) {
  return new Promise((resolve, reject) => {
    const allData = data.split("\n");

    allData.forEach(data => {
      if (data !== "") {
        const timeStamp_obj_arr = data.split("-");
        const obj = {};
        obj["time"] = Date.parse(timeStamp_obj_arr[0].trim());
        obj["obj"] = JSON.parse(timeStamp_obj_arr[1].trim());
        parsedUsers.push(obj);
      }
    })
  })
}


function userDBRead(path) {
  return new Promise((resolve, reject) => {
    read(path)
      .then(data => {
        parse(data)
      })
      .catch(err => reject((err)));
  })
}


function historyDBWrite(temp) {
  write(historyDBPath, session.session, temp);
}


function userDBWrite(obj) {
  write(userDBPath, fileNameObj.user, JSON.stringify(obj));
}


function sessionDBWrite(obj) {
  write(sessionDBPath, fileNameObj.session, JSON.stringify(obj));
}