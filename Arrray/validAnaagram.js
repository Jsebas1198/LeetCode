// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

const anagram = (s, t) => {
  let sArr = s.split("");
  let tArr = t.split("");
  if (sArr.length !== tArr.length) {
    return false;
  }
  const sSort = sArr.sort((a, b) => {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
  });
  const tSort = tArr.sort((a, b) => {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
  });
  if (sSort.join("") === tSort.join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(anagram("anagram", "namagra"));
