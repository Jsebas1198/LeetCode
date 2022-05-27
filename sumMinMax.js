// Given five positive integers, find the minimum and maximum values that can be calculated
// by summing exactly four of the five integers. Then print the respective minimum and maximum
// values as a single line of two space-separated long integers.

const minMaxSum = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b);
  console.log(sum - max, sum - min);
};

console.log(minMaxSum([1, 2, 3, 4, 5]));
