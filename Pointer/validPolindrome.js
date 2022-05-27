// A phrase is a palindrome if, after converting all
// uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
const isPalindrome = (s) => {
  let newS = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let palindrome = newS.split("").reverse().join("");
  if (palindrome == newS) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
