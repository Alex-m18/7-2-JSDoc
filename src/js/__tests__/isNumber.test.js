import isNumber from '../isNumber';

test('should return number', () => {
  expect(isNumber('10')).toBe(10);
  expect(isNumber('07654')).toBe(7654);
});

test('should return error', () => {
  expect(() => { isNumber(); }).toThrow();
  expect(() => { isNumber(''); }).toThrow();
  expect(() => { isNumber('sdf123'); }).toThrow();
  expect(() => { isNumber('asd'); }).toThrow();
  expect(() => { isNumber('0'); }).toThrow();
  expect(() => { isNumber('-10'); }).toThrow();
  expect(() => { isNumber('10.5'); }).toThrow();
  expect(() => { isNumber('10,6'); }).toThrow();
  expect(() => { isNumber('Infinity'); }).toThrow();
  expect(() => { isNumber('0b10011'); }).toThrow();
  expect(() => { isNumber('0xabcdef'); }).toThrow();
});
