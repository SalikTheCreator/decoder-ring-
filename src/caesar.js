/* eslint-disable strict */
function caesar(input, shift = 0, encode = true) {
  if (shift < -25 || shift > 25 || shift === 0) return false;
  if (encode === false) {
    if (Math.sign(shift) === 1) {
      shift = -Math.abs(shift);
    } else if (Math.sign(shift) === -1) {
      shift = Math.abs(shift);
    }
  }
    
  let result = '';
  let inputWords = input.toLowerCase();
  
  for (let i = 0; i < inputWords.length; i++) {
    let char = inputWords.charCodeAt(i);
  
    if (Math.sign(shift) === 1) {
      if (char >= 97 && char <= 122) {
        result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
      } else result += inputWords[i];
    } else if (Math.sign(shift) === -1) {
      if (char >= 97 && char <= 122) {
        result += String.fromCharCode(((char - 122 + shift) % 26) + 122);
      } else result += inputWords[i];
    }
  }
  return result;
}
// //encode
// console.log(
//   caesar('chicken wing!', 23 ,true));
//   //decode
//   console.log(
//     caesar('zefzhbk tfkd!',23,false))
  
module.exports = caesar;