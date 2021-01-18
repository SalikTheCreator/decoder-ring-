/* eslint-disable strict */
// Write your tests here!
const expect = require('chai').expect;
const {describe} = require('mocha');
const caesar = require('../src/caesar');

describe('caesar', () => {
  it('should return false if shift value is 0', () => {
    const stringTest = 'test';
    const shiftTest = 0;
    const encodeTest = true;
    const expected = false;
    const actual = caesar(stringTest,shiftTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should ignore capital letters', () => {
    const stringTest = 'TEST';
    const shiftTest = 1;
    const encodeTest = true;
    const expected = 'uftu';
    const actual = caesar(stringTest,shiftTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should handle shifts that go past the alphabet', () => {
    const stringTest = 'zzz';
    const shiftTest = 3;
    const encodeTest = true;
    const expected = 'ccc';
    const actual = caesar(stringTest,shiftTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should maintain spaces and other nonalphabetic symbols in the message when encoding', () => {
    const stringTest = 'abc 123!';
    const shiftTest = 1;
    const encodeTest = true;
    const expected = 'bcd 123!';
    const actual = caesar(stringTest,shiftTest, encodeTest);
    expect(actual).to.equal(expected);
  });
  it('should maintain spaces and other nonalphabetic symbols in the message when decoding', () => {
    const stringTest = 'bcd 123!';
    const shiftTest = 1;
    const encodeTest = false;
    const expected = 'abc 123!';
    const actual = caesar(stringTest,shiftTest, encodeTest);
    expect(actual).to.equal(expected);
  });

});