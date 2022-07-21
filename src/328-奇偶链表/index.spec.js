/**
 * @description 328-奇偶链表
 * @author 氧化氢
 */

import oddEvenList from "./index";

describe('328-奇偶链表', () => {
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
    var res = oddEvenList(list)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": {
            "next": {
              "next": null,
              "val": 4
            },
            "val": 2
          },
          "val": 5
        },
        "val": 3
      },
      "val": 1
    })
  })
  test('测试用例二', () => {
    var arr = [2, 1, 3, 5, 6, 4, 7]
    var list = getList(arr)
    var res = oddEvenList(list)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": null,
                  "val": 4
                },
                "val": 5
              },
              "val": 1
            },
            "val": 7
          },
          "val": 6
        },
        "val": 3
      },
      "val": 2
    })
  })
})