/**
 * @description 83-删除排序链表中的重复元素
 * @author 氧化氢
 */

import deleteDuplicates from "./index";

describe('83-删除排序链表中的重复元素', () => {
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
    var arr = [1, 1, 2]
    var list = getList(arr)
    var res = deleteDuplicates(list)
    expect(res).toEqual({
      "next": {
        "next": null,
        "val": 2
      },
      "val": 1
    })
  })
  test('测试用例二', () => {
    var arr = [1, 1, 2, 3, 3]
    var list = getList(arr)
    var res = deleteDuplicates(list)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": null,
          "val": 3
        },
        "val": 2
      },
      "val": 1
    })
  })
})