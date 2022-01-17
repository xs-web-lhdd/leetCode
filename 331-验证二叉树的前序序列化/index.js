/**
 * @description 331 验证二叉树的前序序列化
 * @author 氧化氢
 */

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  var l = preorder.length
  var stack = [1]
  var i = 0
  while(i < l) {
    if(!stack.length) return false 
    if(preorder[i] === ',') i++
    else if(preorder[i] === '#') {
      // 栈顶数字减一
      stack[stack.length - 1]--;
      if(stack[stack.length - 1] === 0) {
        stack.pop()
      }
      i++
    } else{
      // 如果发现是数字，往后循环，直到不是数字，因为字符串中'123'会分别按照1 2 3循环而不是当作123一个数循环
      // 如果觉得这里不好理解，那么看index2.js
      while(preorder[i] && preorder[i] !== ',' && preorder[i] !== '#') {
        i++
      }
      // 有效数字情况
      stack[stack.length - 1]--;
      if(stack[stack.length - 1] === 0) {
        stack.pop()
      }
      stack.push(2)
      i++
    }
  }

  return !stack.length
};