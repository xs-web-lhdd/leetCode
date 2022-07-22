/**
 * @description 剑指 Offer 18. 删除链表的节点 test
 * @author 氧化氢
 */

import deleteNode from "./index";

describe('剑指 Offer 18. 删除链表的节点', () => {
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

  function getArr(list) {
    var p = list
    var arr = []
    while (p) {
      if (p.val) {
        arr.push(p.val)
      }
      p = p.next
    }

    return arr
  }
  test('测试用例一', () => {
    const arr = [2, 1, 3, 4, 6],
      val = 3
    const list = getList(arr)
    const resList = deleteNode(list, val)
    const res = getArr(resList)
    expect(res).toEqual([2, 1, 4, 6])
  })
  test('测试用例一', () => {
    const arr = [3, 4, 6],
      val = 6
    const list = getList(arr)
    const resList = deleteNode(list, val)
    const res = getArr(resList)
    expect(res).toEqual([3, 4])
  })
})