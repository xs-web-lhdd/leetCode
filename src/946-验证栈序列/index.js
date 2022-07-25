/**
 * @description 946 验证栈序列
 * @author 氧化氢
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  var stack = [],
    cur = 0
  for (var item of pushed) {
    stack.push(item)
    while (stack[stack.length - 1] === popped[cur] && stack.length) {
      stack.pop()
      cur++
    }
  }

  return !stack.length
};

export default validateStackSequences