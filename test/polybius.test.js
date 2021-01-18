/* eslint-disable strict */
// Write your tests here!
const {describe} = require('mocha');
const expect = require('chai').expect;
const polybius = require('../src/polybius');

describe('polybius', () => {
  it('should output a string when encoding', () => {
    const stringTest = 'test';    
    const encodeTest = true;
    const expected = 'string';
    const actual = typeof(polybius(stringTest, encodeTest));
    expect(actual).to.equal(expected);
  });
  it('should return false if input does not have even number of characters not including spaces when decoding', () => {
    const stringTest = 'testt';       
    const encodeTest = false;
    const expected = false;
    const actual = polybius(stringTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should maintain spaces when encoding', () => {
    const stringTest = 'a a';        
    const encodeTest = true;
    const expected = '11 11';
    const actual = polybius(stringTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should maintain spaces when decoding', () => {
    const stringTest = '11 11';    
    const encodeTest = false;
    const expected = 'a a';
    const actual = polybius(stringTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should be case insensitive when encoding', () => {
    const stringTest = 'Aa';       
    const encodeTest = true;
    const expected = '1111';
    const actual = polybius(stringTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should convert 42 to (i/j) when decoding', () => {
    const stringTest = '42';       
    const encodeTest = false;
    const expected = '(i/j)';
    const actual = polybius(stringTest, encodeTest);
    expect(actual).to.equal(expected);
  });    
  it('should return 4432423352125413 when passing in thinkful', () => {
    const stringTest = 'thinkful';       
    const encodeTest = true;
    const expected = '4432423352125413';
    const actual = polybius(stringTest, encodeTest);
    expect(actual).to.equal(expected);
  });    
  it('should return hello world when passing in 3251131343 2543241341', () => {
    const stringTest = '3251131343 2543241341';       
    const encodeTest = false;
    const expected = 'hello world';
    const actual = polybius(stringTest, encodeTest);
    expect(actual).to.equal(expected);
  });    

});