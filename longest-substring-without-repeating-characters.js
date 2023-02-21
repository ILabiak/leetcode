//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const strArr = s.split('')
    let subStr = []
    let res = 0;
    for(let el of strArr){
        if(!subStr.includes(el)){
            subStr.push(el)
        }else{
            let index = subStr.indexOf(el)
            subStr = [...subStr.slice(index + 1), el]
        }
        res = subStr.length > res ? subStr.length : res;
    }
    return res;
};