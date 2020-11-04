const { expect } = require('@jest/globals');
const diffFunc = require('./subtractNums');

test('test1', () => {
  expect(diffFunc(10,8)).toBe(2);
})

test('test2', () => {
  expect(diffFunc(5,5)).toBe(0);
})

test('test3', () =>{
  expect(diffFunc(-5,3)).toBe(-8);

})
