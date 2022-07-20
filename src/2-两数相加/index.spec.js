/**
 * @description 2-两数相加
 * @author 氧化氢
 */

import addTwoNumbers from "./index";

describe('2-两数相加', () => {
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
    const arr1 = [2, 4, 3],
      arr2 = [5, 6, 4]
    const l1 = getList(arr1),
      l2 = getList(arr2)
    const res = addTwoNumbers(l1, l2)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": null,
          "val": 8
        },
        "val": 0
      },
      "val": 7
    })
  })
  test('测试用例二', () => {
    const arr1 = [9, 9, 9, 9, 9, 9, 9],
      arr2 = [9, 9, 9, 9]
    const l1 = getList(arr1),
      l2 = getList(arr2)
    const res = addTwoNumbers(l1, l2)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": null,
                    "val": 1
                  },
                  "val": 0
                },
                "val": 0
              },
              "val": 0
            },
            "val": 9
          },
          "val": 9
        },
        "val": 9
      },
      "val": 8
    })
  })
})