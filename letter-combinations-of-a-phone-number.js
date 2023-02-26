//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */

const digitLetters = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const getCombinations = (digits, previousCombinations) => {
  if (digits.length < 1) return;
  let newCombinations = [];
  for (combination of previousCombinations) {
    for (letter of digitLetters[digits[0]]) {
      newCombinations.push(combination + letter);
    }
  }
  if (digits.length <= 1) {
    return newCombinations;
  }
  digits.shift();
  return getCombinations(digits, newCombinations);
};

var letterCombinations = function (digits) {
  if (digits.length == 0) return [];
  return getCombinations(digits.split(""), [""]);
};
