//Given an integer array nums, return true if any value appears
//at least twice in the array, and return false if every element is distinct.
const doubleNumber = (num) => {
  const filter = num.filter((item, index, array) => {
    return array.indexOf(item) !== index;
  });
  if (filter.length > 0) {
    console.log(filter);
    return true;
  } else {
    console.log(filter);
    return false;
  }
};

console.log(doubleNumber([1, 2, 3, 4, 1, 2]));
