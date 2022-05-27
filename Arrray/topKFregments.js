//Given an integer array nums and an integer k,
//return the k most frequent elements. You may return the answer in any order.
const topKFrequent = (nums, k) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  let arr = [];
  for (let key in map) {
    arr.push([key, map[key]]);
  }
  arr.sort((a, b) => {
    return b[1] - a[1];
  });
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  return res;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
