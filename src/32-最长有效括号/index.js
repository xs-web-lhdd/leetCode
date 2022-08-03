/**
 * @description 32-最长有效括号
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 * @solution leetcode 官方题解的方法二，栈就很好理解，并且很好用！
 */
var longestValidParentheses = function (s) {
  let maxLen = 0
  let stack = []
  stack.push(-1) // 初始化一个参照物，方便边界
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      // ( 入栈   )出栈
      stack.push(i)
    } else {
      // )的情况 出栈
      stack.pop()
      if (stack.length) {
        // 每次出栈 计算下当前有效连续长度
        // 如何计算连续长度 当前位置 - 栈顶下标
        maxLen = Math.max(maxLen, i - stack[stack.length - 1])
      } else {
        stack.push(i) //栈为空时 放入右括号参照物 表示从这个下标开始 需要重新计算长度
      }
    }
  }
  return maxLen
};

export default longestValidParentheses