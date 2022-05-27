// Return the resulting string after removing exactly one occurrence
// of digit from number such that the value of the resulting string in
//  decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

const removeDigit = (number, digit) => {
  let str = number.toString();
  let index = str.indexOf(digit);
  console.log(str.slice(index + 1));
  let newStr = str.slice(0, index) + str.slice(index + 1);
  return parseInt(newStr);
};

console.log(removeDigit("1234576", 5));
