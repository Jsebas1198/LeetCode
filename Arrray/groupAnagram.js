// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

const groupAnagrams = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");
    if (map[sortedStr]) {
      map[sortedStr].push(strs[i]);
    } else {
      map[sortedStr] = [strs[i]];
    }
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
