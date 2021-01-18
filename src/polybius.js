/* eslint-disable strict */
function polybius(input, encode = true) {
  const alphabet = {
    'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
    'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52',
    'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53',
    'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54',
    'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55'
  };
    
  // Needs to input to run
  if (!input) return false;

  // make everything lowercase 
  const lowerCase = input.toLowerCase();
  let result = '';   
    
  // encoding 
  if (encode) {
    for (let i = 0; i < lowerCase.length; i++) {

      // maintain spaces
      let char = lowerCase[i];
      if (char === 'i' || char === 'j') {
        result += alphabet['i'];
      } else if (char === ' ') {
        result += ' ';
      } else {
        let match = Object.entries(alphabet).find((letter) => char === letter[0]);
        result += match[1];
      }
    }
  } else {

    // if the string is not an even number return false and ignore spaces 
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== ' ') counter++;
    }
    if (counter % 2 !== 0) {
      return false;
    }

    // decoding
    for (let i = 0; i < input.length; i+=2) {
      let code = `${input[i]}${input[i+1]}`;
      if (code.includes(' ')) {
        result += ' ';
        i-=1;
      } else if (code === '42') {
        result += '(i/j)';
      } else {
        let match = Object.entries(alphabet).find((letter) => code === letter[1]);
        if (match) result += match[0];
      }
    }
  }

  return result;
}
// console.log(
//   polybius('chicken wing', true)
// );
// console.log(
//   polybius('31324231525133 25423322', false)
// );

module.exports = polybius;
