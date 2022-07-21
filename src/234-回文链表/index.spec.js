/**
 * @description 234-回文链表
 * @author 氧化氢
 */

import isPalindrome from "./index2";

describe('234-回文链表', () => {
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  function getList(arr) {
    let hair = new ListNode(),
      p = hair
    for (let i = 0; i < arr.length; i++) {
      p.next = new ListNode(arr[i])
      p = p.next
    }

    return hair.next
  }
  test('测试用例一', () => {
    var arr = [1, 2, 3, 4, 5]
    var list = getList(arr)
    var res = isPalindrome(list)
    expect(res).toBe(false)
  })
  test('测试用例一', () => {
    var arr = [1, 2, 2, 1]
    var list = getList(arr)
    var res = isPalindrome(list)
    expect(res).toBe(true)
  })
})