/**
 * @author Don (dl90)
 * @date January 14, 2020
 * @version 1.0
 */

/**
 * Filters input
 * @param {String} input 
 */
const encode = (input) => {
  // const map = {
  //   '&': '&#x26;',
  //   '<': '&#x3c;',
  //   '>': '&#x3e;',
  //   '"': '&#x22;',
  //   "'": '&#x27;',
  //   "/": '&#x2F;',
  //   ";": '&#x3a;',
  //   "(": '&#x28;',
  //   ")": '&#x29;'
  // };
  // const reg = /[&<>"'/;()]/ig;
  // return input.replace(reg, (match) => (map[match]));
  return encodeURIComponent(input);
}

/**
 * Unfilters filtered input
 * @param {String} input 
 */
const decode = (input) => {
  return decodeURIComponent(input);
}

console.log(encode(";"+"<script>alert('xss')</script>"));
console.log(decode(encode("<script>alert('xss')</script>")));