/**
 * @author Don (dl90)
 * @date January 18, 2020
 * @version 1.1
 */


const crypto = require('crypto');

// user obj template
// const user = {
//   id: "id",
//   name: "name lastname",
//   email: "abc@abc.com",
//   password: "hashed pw"
// }

// user session template
// const session = {
//   id: "id",
//   session: "hashed session",
//   historyId: "hashed history path"
// }

// user history template
// const history = {
//   dateTime = "dateTime",
//   temp = "temp"
// }


/**
 * Creates history object
 * @param {Date} dateTime timestamp
 * @param {String} temp temp
 */
function historyMaker(temp) {
  const history = {};

  if (temp !== null || undefined) {
    history['temp'] = temp;

    return history;
  } else {
    console.error("Empty parameters for objGen.historyMaker");
  }
}


/**
 * Creates user object
 * @param {Number} inputID unique auto-incrementing id
 * @param {String} inputName user name
 * @param {String} inputEmail user email
 * @param {String} inputPW user password
 * @return user object
 */
function userMaker(inputID, inputName, inputEmail, inputPW) {
  const user = {};

  if ((inputID != null || undefined) && (inputID.length > 0 || inputID > 0)) {
    const pwHash = crypto.createHash('sha256').update(inputPW).digest('hex');
    user['id'] = inputID;
    user['name'] = inputName;
    user['email'] = inputEmail;
    user['password'] = pwHash;

    return user;
  } else {
    console.error("Problem with inputID for objGen.userMaker");
  }
}


/**
 * Create session obj
 * @param {String} inputID unique auto-incrementing id
 * @param {String} inputSession unique session
 * @param {String} inputHistoryID unique history
 * @return session object
 */
function sessionMaker(inputID, inputSession, inputHistoryID) {
  const user = {};

  if ((inputID != null || undefined) && (inputID.length > 0 || inputID > 0)) {
    const sessionHash = crypto.createHash('sha256').update(inputSession).digest('hex');
    const historyHash = crypto.createHash('sha256').update(inputHistoryID).digest('hex');

    user['id'] = inputID;
    user['session'] = sessionHash;
    user['historyID'] = historyHash;

    return user;
  } else {
    console.error("Problem with inputID for objGen.sessionMaker");
  }
}

module.exports = { userMaker, sessionMaker, historyMaker }