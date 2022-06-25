/**
 * @description 515-在每个树行中找最大值 test
 * @author 氧化氢
 */

import largestValues from "./index";

describe('515-在每个树行中找最大值', () => {
  it('树为正', () => {
    const tree = {
      val: 1,
      left: {
        val: 3,
        left: {
          val: 5,
          left: null,
          right: null
        },
        right: {
          val: 3,
          left: null,
          right: null
        }
      },
      right: {
        val: 2,
        left: null,
        right: {
          val: 9,
          left: null,
          right: null
        }
      }
    }
    const res = largestValues(tree)
    expect(res).toEqual([1,3,9])
  })

  it('树为空树', () => {
    const tree = null
    const res = largestValues(tree)
    expect(res).toEqual([])
  })

  it('树为负', () => {
    const tree = {
      val: -100,
      left: {
        val: -10,
        left: null,
        right: null
      },
      right: null
    }
    const res = largestValues(tree)
    expect(res).toEqual([-100, -10])
  })
})