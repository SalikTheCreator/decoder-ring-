/* eslint-disable strict */
// Write your tests here!
const expect = require('chai').expect;
const {describe} = require('mocha');
const substitution = require('../src/substitution');

describe('substitution', () => {
  it('should be able to encode and maintain spaces', () => {
    const stringTest = 'You are an excellent spy';
    const alphabetTest =  'xoyqmcgrukswaflnthdjpzibev';   
    const encodeTest = true;
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution(stringTest, alphabetTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should be able to decode and maintain spaces', () => {
    const stringTest = 'j rufscpw';
    const alphabetTest =  'xoyqmcgrukswaflnthdjpzibev';   
    const encodeTest = false;
    const expected = 't hinkful';
    const actual = substitution(stringTest, alphabetTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should return false if alphabet parameter is not 26 characters', () => {
    const stringTest = 'thinkful';
    const alphabetTest =  'short'; 
    const encodeTest = true;
    const expected = false;
    const actual = substitution(stringTest, alphabetTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should return false if alphabet characters are not unique', () => {
    const stringTest = 'thinkful';
    const alphabetTest =  'abcabcabcabcabcabcabcabcyz';
    const encodeTest = true;
    const expected = false;
    const actual = substitution(stringTest, alphabetTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should be able to encode even if there are special characters in the alphabet', () => {
    const stringTest = 'ahinkful';
    const alphabetTest =  '$oyqmcgrukswaflnthdjpzibev';
    const encodeTest = true;
    const expected = '$rufscpw';
    const actual = substitution(stringTest, alphabetTest, encodeTest);
    expect(actual).to.equal(expected);
  });
    
    

});