/**
 * @description 206-反转链表
 * @author 氧化氢
 */

import reverseList from "./index.js"

describe('206-反转链表', () => {
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  function getList(list) {
    var hair = new ListNode(),
      p = hair
    for (var i = 0; i < list.length; i++) {
      p.next = new ListNode(list[i])
      p = p.next
    }
    var head = hair.next
    hair.next = null

    return head
  }
  test('有长度的链表', () => {
    const arr = [1, 2, 3, 4, 5]
    const list = getList(arr)
    const res = reverseList(list)
    console.log(res)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": {
            "next": {
              "next": null,
              "val": 1
            },
            "val": 2
          },
          "val": 3
        },
        "val": 4
      },
      "val": 5
    })
  })

  test('空链表', () => {
    const list = {}
    const res = reverseList(list)
    expect(res).toEqual({
      next: null
    })
  })
})