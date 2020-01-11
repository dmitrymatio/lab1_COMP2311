/**
 * @author Don (dl90)
 * @date January 9, 2020
 * @version 1.0
 */

// console.log(convert("31c"));
// console.log(convert("30C"));
// console.log(convert("29f"));
// console.log(convert("28F"));
// console.log(convert("31"));
// console.log(convert("32a"));
// console.log(convert("abc31abc"));

/**
 * Converts input (C/F) to approprate (C/F)
 * @param {String} input string to be converted
 */
function convert(input) {
  let [converted, inputLengthMinusOne] = [, input.length - 1];
  const temp = parseInt(input.substring(0, inputLengthMinusOne));

  if (isNaN(temp)) {
    return ("Parsed NaN, possibly caused by incorrect input. Ensure input is in correct format.");
  } else {
    const determiner = input[inputLengthMinusOne].toLowerCase();

    switch (determiner) {
      case "c":
        converted = Math.trunc(cToF(temp));
        return converted;
      case "f":
        converted = Math.trunc(fToC(temp));
        return converted;
      default:
        return "Need temperature unit (C/F) to proceed.";
    }
  }
}

function cToF(input) {
  // formula F = (C * 1.8) + 32
  return input * 1.8 + 32;
}

function fToC(input) {
  // formula C = (F / 1.8) - 32
  return input / 1.8 - 32;
}

module.exports = { convert }
