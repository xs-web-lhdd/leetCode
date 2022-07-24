/**
 * @description 622 设计循环队列 test
 * @author 氧化氢
 */

import MyCircularQueue from "./index";

describe('622 设计循环队列', () => {
  test('测试用例零一', () => {
    var queue = new MyCircularQueue(3)
    expect(queue.enQueue(1)).toBe(true)
    expect(queue.enQueue(2)).toBe(true)
    expect(queue.enQueue(3)).toBe(true)
    expect(queue.enQueue(4)).toBe(false)
    expect(queue.Rear()).toBe(3)
    expect(queue.isFull()).toBe(true)
    expect(queue.deQueue()).toBe(true)
    expect(queue.enQueue(4)).toBe(true)
    expect(queue.Rear()).toBe(4)
  })
})