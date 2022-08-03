/**
 * @description 445 两数相加 II
 * @author 氧化氢
 */

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
 * 什么垃圾写法！抛弃！思路可以是遍历到数组中，相加再生成链表，或者两次翻转相加再翻转回来！
 */
var addTwoNumbers = function (l1, l2) {
  var firstStack = [],
    secondStack = [],
    stack = []
  var cur = l1
  while (cur) {
    firstStack.push(cur.val)
    cur = cur.next
  }
  cur = l2
  while (cur) {
    secondStack.push(cur.val)
    cur = cur.next
  }
  var flag = 0
  while (firstStack.length || secondStack.length || flag) {
    if (firstStack.length && !secondStack.length && !flag) {
      stack.push(firstStack[firstStack.length - 1])
      firstStack.pop()
    } else if (!firstStack.length && secondStack.length && !flag) {
      stack.push(secondStack[secondStack.length - 1])
      secondStack.pop()
    } else if (firstStack[firstStack.length - 1] + secondStack[secondStack.length - 1] + flag > 9) {
      stack.push((firstStack[firstStack.length - 1] + secondStack[secondStack.length - 1] + flag) % 10)
      firstStack.pop()
      secondStack.pop()
      flag = 1
    } else if (firstStack[firstStack.length - 1] + secondStack[secondStack.length - 1] + flag <= 9) {
      stack.push(firstStack[firstStack.length - 1] + secondStack[secondStack.length - 1] + flag)
      firstStack.pop()
      secondStack.pop()
      flag = 0
    } else if (!firstStack.length && !secondStack.length && flag) {
      stack.push(1)
      flag = 0
    } else if (firstStack.length && flag && !secondStack.length) {
      if (firstStack[firstStack.length - 1] + flag > 9) {
        stack.push((firstStack[firstStack.length - 1] + flag) % 10)
        firstStack.pop()
        flag = 1
      } else {
        stack.push(firstStack[firstStack.length - 1] + flag)
        firstStack.pop()
        flag = 0
      }

    } else if (secondStack.length && flag && !firstStack.length) {
      if (secondStack[secondStack.length - 1] + flag > 9) {
        stack.push((secondStack[secondStack.length - 1] + flag) % 10)
        secondStack.pop()
        flag = 1
      } else {
        stack.push(secondStack[secondStack.length - 1] + flag)
        secondStack.pop()
        flag = 0
      }
    }
  }

  var res = new ListNode(),
    cur = res
  for (let i = stack.length - 1; i >= 0; i--) {
    var tmp = new ListNode(stack[i])
    res.next = tmp
    res = res.next
  }

  return cur.next
};