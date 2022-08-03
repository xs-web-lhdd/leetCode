/**
 * @description 636 函数的独占时间
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  // 初始化一个数组，用来存放每个标识的总时间
  var arr = new Array(n).fill(0)
  // 初始化一个栈，用来存储标识
  var stack = []
  var every, num_mark, num_status, num_time, timePre = 0
  for (let num of logs) {
    // 拿到没个的标识，状态，和时间节点
    every = num.split(':')
    num_mark = every[0]
    num_status = every[1]
    num_time = every[2]
    if (num_status === 'start') {
      // 状态为开始状态
      if (stack.length) {
        arr[stack[stack.length - 1]] += num_time - timePre
      }
      timePre = num_time
      stack.push(num_mark)
    } else {
      // 状态为结束状态
      arr[stack[stack.length - 1]] += num_time - timePre + 1
      timePre = Number(num_time) + 1
      stack.pop()
    }
  }

  return arr
};

export default exclusiveTime