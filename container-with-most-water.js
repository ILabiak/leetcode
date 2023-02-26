//https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let result = 0;
    let left = 0
    let right = height.length - 1;
    while(left != right){
        if(height[left] < height[right]){
            area = (right - left) * height[left]
            left ++;
        }else{
            area = (right - left) * height[right]
            right--;
        }
        if(result < area) result = area;
    }
    return result
};