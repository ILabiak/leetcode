//https://leetcode.com/problems/add-two-numbers/
// bad speed
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let firstArray = [l1.val]
    let secondArray = [l2.val]
    while(l1.next){
        l1 = l1.next
        firstArray.push(l1.val)
    }
    while(l2.next){
        l2 = l2.next
        secondArray.push(l2.val)
    }
    const firstValue = BigInt(firstArray.reverse().join(''))
    console.log(firstArray.reverse().join(''))
    console.log(firstValue)
    const secondValue = BigInt(secondArray.reverse().join(''))
    const sum = firstValue + secondValue
    const sumArray = sum.toString().split('').reverse().map(el => BigInt(el))
    let res = [];
    for(let i = 0; i < sumArray.length; i++){
        res[i] = new ListNode(sumArray[i])
        if(i < sumArray.length && i != 0){
            res[i-1].next = res[i]
        }
    }
    return res[0];
    
};