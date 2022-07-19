/**
 * @description 24-两两交换链表中的节点
 * @author 氧化氢
 */

import swapPairs from "./index";

describe('24-两两交换链表中的节点', () => {
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
    var arr = [1, 2, 3, 4]
    var list = getList(arr)
    var res = swapPairs(list)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": {
            "next": null,
            "val": 3
          },
          "val": 4
        },
        "val": 1
      },
      "val": 2
    })
  })
  test('测试用例二', () => {
    var arr = [1]
    var list = getList(arr)
    var res = swapPairs(list)
    expect(res).toEqual({
      "next": null,
      "val": 1
    })
  })
})