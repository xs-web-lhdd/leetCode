/**
 * @description 19-删除链表的倒数第 N 个节点
 * @author 氧化氢
 */

import removeNthFromEnd from "./index";

describe('19-删除链表的倒数第 N 个节点', () => {
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
    var list = getList(arr),
      n = 2
    var res = removeNthFromEnd(list, n)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": {
            "next": null,
            "val": 5
          },
          "val": 3
        },
        "val": 2
      },
      "val": 1
    })
  })
  test('测试用例二', () => {
    var arr = [1]
    var list = getList(arr),
      n = 1
    var res = removeNthFromEnd(list, n)
    expect(res).toEqual(null)
  })
})