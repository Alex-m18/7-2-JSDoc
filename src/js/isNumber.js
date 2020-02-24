export default function isNumber(string) {
  if (/\D/.test(string) || string === '' || Number.isNaN(string)) {
    throw new Error('Error isNumber: input string is not a number');
  }

  const number = Number.parseInt(string, 10);

  if (number === 0) throw new Error('Error isNumber: input number must be grater then 0');

  return number;
}
