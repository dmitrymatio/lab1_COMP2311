/**
 * @author Don (dl90)
 * @date January 16, 2020
 * @version 1.0
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


console.log(JSON.stringify(userMaker(1, "Don1", '123@abc.com', "123abc")));
console.log(JSON.stringify(sessionMaker(1, "session1", "Don2history")));


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

  const pwHash = crypto.createHash('sha256').update(inputPW).digest('hex');
  user['id'] = inputID;
  user['name'] = inputName;
  user['email'] = inputEmail;
  user['password'] = pwHash;

  return user;
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

  const sessionHash = crypto.createHash('sha256').update(inputSession).digest('hex');
  const historyHash = crypto.createHash('sha256').update(inputHistoryID).digest('hex');

  user['id'] = inputID;
  user['session'] = sessionHash;
  user['historyID'] = historyHash;

  return user;
}

module.exports = { userMaker, sessionMaker }