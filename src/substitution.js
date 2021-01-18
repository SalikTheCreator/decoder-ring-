/* eslint-disable strict */

function substitution(input, alphabet, encode = true) {
  const abcStandard = 'abcdefghijklmnopqrstuvwxyz';

  // return false if missing arguments
  if (!input || !alphabet) return false;

  // make everything lower case
  const string = input.toLowerCase();
  let result = '';

  // return false if alphabet argument is not 26 characters
  if (alphabet.length !== 26) return false;

  // return false if each letter in the alphabet argument is not unique
  const uniqueArray = [];
  for (let letter in alphabet) {
    if (uniqueArray.indexOf(alphabet[letter]) < 0) {
      uniqueArray.push(alphabet[letter]);
    } else {
      return false;
    }
  }

  for (let i = 0; i < string.length; i++) {
    // maintain spaces
    if (string[i] === ' ') {
      result += ' ';
    } else {
      // when encoding loop through index alphabet. when decoding, loop through the user alphabet
      let abcIndex = abcStandard;
      let abc = alphabet;
      if (!encode) {
        abcIndex = alphabet;
        abc = abcStandard;
      }

      //  Loop, find match, push to result
      for (let j = 0; j < abcIndex.length; j++) {
        if (string[i] === abcIndex[j]) {
          result += abc[j];
        }
      }
    }
  }
  // Should return an encoded/decoded message
  return result;
}
//decode
// console.log(
// substitution('eioeatf','qwertyuiopasdfghjklzxcvbnm',false));
//encode
// console.log(
//   substitution('chicken', 'qwertyuiopasdfghjklzxcvbnm', true));

module.exports = substitution;
