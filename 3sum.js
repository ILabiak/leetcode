//https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  let sortedArr = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 2; i++) {
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;

    let left = i + 1;
    let right = sortedArr.length - 1;
    while (right > left) {
      let sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        while (sortedArr[left] === sortedArr[left + 1]) left++;
        while (sortedArr[right] === sortedArr[right - 1]) right--;
        res.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
        left++;
        right--;
      }
    }
  }

  return res;
};
