/**
 * @description 402-移掉 K 位数字
 * @author 氧化氢
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
  var stack = []
  // 形成一个单调递增栈:
  for(var i = 0; i < num.length; i++) {
      while(k && stack.length && num[i] < stack[stack.length - 1]) {
          stack.pop()
          k--
      }
      stack.push(num[i])
  }

  // 当 k 不为 0 时，将栈后 k 个元素全部出栈
  while(k !== 0) stack.pop(), k--

  // 解决前缀是 0 的情况
  var index = 0
  while(stack[index] === '0') index++

  var ans = ''
  for(var i = index; i < stack.length; i++) {
      ans += stack[i]
  }

  return ans === "" ? "0" : ans
};


export default removeKdigits