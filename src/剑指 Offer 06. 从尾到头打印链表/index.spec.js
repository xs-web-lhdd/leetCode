/**
 * @description 剑指 Offer 06. 从尾到头打印链表 test
 * @author 氧化氢
 */

import reversePrint from "./index";

describe('剑指 Offer 06. 从尾到头打印链表', () => {
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
    const arr = [1, 2, 3, 4, 5]
    const list = getList(arr)
    const res = reversePrint(list)
    expect(res).toEqual([5, 4, 3, 2, 1])
  })
  test('测试用例二', () => {
    const arr = [2, 8, 4, 9]
    const list = getList(arr)
    const res = reversePrint(list)
    expect(res).toEqual([9, 4, 8, 2])
  })
})