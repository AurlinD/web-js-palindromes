const isPalindrome = function(s) {
  let string = s
    .split("")
    .join("")
    .split(" ")
    .join("");
  let stringReverse = s
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .join("");

  console.log(string);
  console.log(stringReverse);
  return string == stringReverse;
};

const phrase = "a man a plan a canal panama";
isPalindrome(phrase);
module.exports = isPalindrome;
