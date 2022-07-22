/**
 * @description 147-对链表进行插入排序 test
 * @author 氧化氢
 */

import insertionSortList from './index'

describe('147-对链表进行插入排序', () => {
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
    const arr = [4, 2, 1, 3]
    const list = getList(arr)
    const resList = insertionSortList(list)
    const res = getArr(resList)
    expect(res).toEqual([1, 2, 3, 4])
  })
  test('测试用例二', () => {
    const arr = [-1, 5, 3, 4, 0]
    const list = getList(arr)
    const resList = insertionSortList(list)
    const res = getArr(resList)
    expect(res).toEqual([-1, 0, 3, 4, 5])
  })
})