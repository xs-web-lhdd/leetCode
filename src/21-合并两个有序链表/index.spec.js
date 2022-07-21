/**
 * @description 21-合并两个有序链表 test
 * @author 氧化氢
 */

import mergeTwoLists from "./index1";

describe('21-合并两个有序链表', () => {
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
    var arr1 = [1, 2, 4],
      arr2 = [1, 3, 4]
    var l1 = getList(arr1),
      l2 = getList(arr2)
    var resList = mergeTwoLists(l1, l2)
    var resArr = getArr(resList)
    expect(resArr).toEqual([1, 1, 2, 3, 4, 4])
  })
  test('测试用例二', () => {
    var arr1 = [],
      arr2 = []
    var l1 = getList(arr1),
      l2 = getList(arr2)
    var resList = mergeTwoLists(l1, l2)
    var resArr = getArr(resList)
    expect(resArr).toEqual([])
  })
})