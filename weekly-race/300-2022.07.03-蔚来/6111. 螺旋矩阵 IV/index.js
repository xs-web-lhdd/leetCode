/**
 * @description 6111. 螺旋矩阵 IV
 * @author 氧化氢
 * @url https://leetcode.cn/contest/weekly-contest-300/problems/spiral-matrix-iv/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
 var spiralMatrix = function(m, n, head) {
  var length = m
  var size = n
  var arr = []
  var ans = []
  for(var i = 0; i < length; i++) {
    arr.push(new Array(size).fill(0))
    ans.push(new Array(size).fill(-1))
  }

  var cur = head


  var k = 0
  var direction = 'right'
  var i = 0, j = 0
  ans[0][0] = cur.val
  cur = cur.next
  arr[i][j] = 1
  while(cur) {
    if(direction === 'right') {
      if(j < size - 1) {
        if(!arr[i][j+1]) j++
        else {
          direction = 'down'
          i++
        }
      }
      else if(j === size - 1) {
        direction = 'down'
        i++
      }
    }
    else if(direction === 'down') {
      if(i < length - 1) {
        if(!arr[i+1][j]) i++
        else {
          direction = 'left'
          j--
        }
      }
      else if(i === length - 1) {
        direction = 'left'
        j--
      }
    }
    else if(direction === 'left') {
      if(j > 0) {
        if(!arr[i][j-1]) j--
        else {
          direction = 'up',
          i--
        }
      }
      else if(j === 0) {
        direction = 'up'
        i--
      }
    }
    else if(direction === 'up') {
      if(i > 0) {
        if(!arr[i-1][j]) i--
        else {
          direction = 'right',
          j++
        }
      }
    }
    ans[i][j] = cur.val
    cur = cur.next
    arr[i][j] = 1
  }

  return ans
};