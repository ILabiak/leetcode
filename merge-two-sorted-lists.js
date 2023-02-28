//https://leetcode.com/problems/merge-two-sorted-lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let currentNode = list1;
    if (list1?.val == undefined) return list2;
    if (list2?.val == undefined) return list1;
    while (list2?.next != null || list2?.val != undefined) {
      if (currentNode.val > list2.val) {
        let temp = new ListNode(currentNode.val, currentNode?.next);
        currentNode.val = list2.val
        currentNode.next = temp
      } else {
        while (currentNode?.next != null && currentNode?.next.val < list2.val) {
          currentNode = currentNode.next;
        }
        currentNode.next = new ListNode(list2.val, currentNode.next);
      }
      if (list2?.next == null) break;
      list2 = list2.next;
    }
    return list1;
  };