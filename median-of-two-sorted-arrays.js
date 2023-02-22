//https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let jointArr = [...nums1,...nums2].sort((a, b) => a - b)
    if(jointArr.length % 2 == 0){
        let index = jointArr.length / 2
        return (jointArr[index-1] + jointArr[index])/ 2
    }else {
        return jointArr[Math.floor(jointArr.length/2)]
    }
    
};