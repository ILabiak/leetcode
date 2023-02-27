//https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const opening = new Set(['(', '[', '{']);
    const closing = new Set([')', ']', '}']);
    const pairs = {
      ')': '(',
      ']': '[',
      '}': '{',
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (opening.has(char)) {
        stack.push(char);
      } else if (closing.has(char)) {
        const top = stack.pop();
        if (pairs[char] !== top) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };