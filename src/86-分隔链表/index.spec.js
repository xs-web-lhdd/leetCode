/**
 * @description 86-分隔链表
 * @author 氧化氢
 */

import partition from "./index";

describe('86-分割链表', () => {
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
    const arr = [1, 4, 3, 2, 5, 2],
      x = 3
    const list = getList(arr)
    const res = partition(list, x)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": null,
                "val": 5
              },
              "val": 3
            },
            "val": 4
          },
          "val": 2
        },
        "val": 2
      },
      "val": 1
    })
  })
  test('测试用例一', () => {
    const arr = [2, 1],
      x = 2
    const list = getList(arr)
    const res = partition(list, x)
    expect(res).toEqual({
      "next": {
        "next": null,
        "val": 2
      },
      "val": 1
    })
  })
})