/**
 * @description 22-括号生成
 * @author 氧化氢
 */

// 优质题解：
// https://leetcode-cn.com/problems/generate-parentheses/solution/22-gua-hao-sheng-cheng-jian-zhi-hui-su-t-zt0t/

/**
 * @param {number} n
 * @return {string[]}
 * @method 暴力破解法
 */
 var generateParenthesis = function(n) {
  var arr = []
  // 往数组中放入括号组成的所有可能：
  di('', 2 * n, arr)

  var ans = []
  for(var i = 0; i < arr.length; i++) {
    // 取出合法的放入 ans 数组中： 
    if(isLegitimate(arr[i])) ans.push(arr[i])
  }
  
  return ans
};

// 验证括号组成是否合法：
function isLegitimate(str) {
  var stack = []
  for(var i = 0; i < str.length; i++) {
      if(str[i] === '(') stack.push('(')
      if(str[i] === ')') {
          if(str.length && stack[stack.length - 1] === '(') stack.pop()
          else return false
      }
  }

  return stack.length === 0
}

// 递归找到所有合法括号组成形式：
function di(str, num, arr) {
  var str1 = str + '('
  var str2 = str + ')'

  if(str1.length === num) arr.push(str1)
  else if(str1.length < num) di(str1, num, arr)
  else return
  
  if(str2.length === num) arr.push(str2)
  else if(str2.length < num) di(str2, num, arr)
  else return
}