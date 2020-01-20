/**
 * @author Don (dl90)
 * @date January 18, 2020
 * @version 1.0
 */


const { userMaker, sessionMaker } = require("./objGen");
const { read, readDir } = require("./io/read");
const write = require("./io/write").main;

const fileNameObj = {
  user: "users",
  session: "session",
}

const historyDBPath = "../db/history"
const userDBPath = "../db/users"
const sessionDBPath = "../db/sessions"

const [users, sessions, history, parsedUsers, parsedSessions] = [[], [], [], [], []];


/**
 * @TODO
 * 
 * 1. need to make userID and other fields unique
 * 2. need to compare sessions with history file name (named after sessions)
 * 3. remove files older than 1 year
 * 4. fix setTimeout parsedUsers
 * 
 */


main()
function main() {
  // for (let i = 1; i <= 10; i++) {
  //   setTimeout(() => { populate(i, `Don ${i}`, `don${i}@test.ca`, `testpw${i}`, `${i + 10}`) }, 100);
  // }

  DBRead(`${userDBPath}/${fileNameObj.user}`, "user");
  DBRead(`${sessionDBPath}/${fileNameObj.session}`, "session");

  checkDir(userDBPath);
  checkDir(sessionDBPath);
  checkDir(historyDBPath);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  setTimeout(() => console.log(history), 10);
  setTimeout(() => console.log(parsedUsers), 10);
  setTimeout(() => console.log(parsedSessions), 10);

  setTimeout(() => {
    console.log(historyMatch(parsedSessions, history[getRndInteger(0, history.length)]));
  }, 100);


}


function historyMatch(sessions, history) {
  let state;

  sessions.forEach(session => {
    if (session.obj.historyID === history) {
      state = session;
    }
  })
  return state;
}


async function populate(id, name, email, pw, temp = 0) {
  const user = userMaker(id, name, email, pw);
  const session = sessionMaker(id, String(rand()), String(rand()));

  // users.push(user);
  // sessions.push(session);

  // bug => creating the files only appends 1 user, where as appending to file appends all users.
  await userDBWrite(user);
  await sessionDBWrite(session);
  setTimeout(() => { historyDBWrite(session, temp) }, 0);

  function rand() {
    const num = Math.random();
    return num;
  }
}


function extract(arr, path) {
  switch (path) {
    case historyDBPath: arr.forEach(item => history.push(item));
      break
    case userDBPath:
    case sessionDBPath:
      break
  }
}


function checkDir(path) {
  readDir(path)
    .then(file => extract(file, path))
    .catch(err => console.log(err));
}


function parse(data, type) {
  return new Promise((resolve, reject) => {
    const allData = data.split("\n");

    allData.forEach(data => {
      if (data !== "") {
        const timeStamp_obj_arr = data.split("-");
        const obj = {};
        obj["time"] = Date.parse(timeStamp_obj_arr[0].trim());
        obj["obj"] = JSON.parse(timeStamp_obj_arr[1].trim());

        switch (type) {
          case "user": parsedUsers.push(obj);
            break;
          case "session": parsedSessions.push(obj);
            break;
          default:
            console.error("Incorrect type specified to parse")
        }
      }
    })
  })
}


function DBRead(path, type) {
  return new Promise((resolve, reject) => {
    read(path)
      .then(data => {
        parse(data, type)
      })
      .catch(err => reject((err)));
  })
}


function historyDBWrite(sessionObj, temp) {
  write(historyDBPath, sessionObj.historyID, temp);
}


function userDBWrite(userObj) {
  write(userDBPath, fileNameObj.user, JSON.stringify(userObj));
}


function sessionDBWrite(sessionObj) {
  write(sessionDBPath, fileNameObj.session, JSON.stringify(sessionObj));
}