/**
 * @description 143-重排链表
 * @author 氧化氢
 */

import reorderList from "./index1";

describe('143-重排链表', () => {
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
    while (p) arr.push(p.val), p = p.next

    return arr
  }
  test('测试用例一', () => {
    const arr = [1, 2, 3, 4]
    const list = getList(arr)
    const resList = reorderList(list)
    const resArr = getArr(resList)
    expect(resArr).toEqual([1, 4, 2, 3])
  })
  test('测试用例二', () => {
    const arr = [1, 2, 3, 4, 5]
    const list = getList(arr)
    const resList = reorderList(list)
    const resArr = getArr(resList)
    expect(resArr).toEqual([1, 5, 2, 4, 3])
  })
})