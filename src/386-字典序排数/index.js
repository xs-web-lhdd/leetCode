/**
 * @description 386-字典序排数
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number[]}
 */
 var lexicalOrder = function(n) {
  var arr = []
  for(var i = 1; i <= n; i++) {
      arr.push(String(i))
  }

  return arr.sort()
};

// 吃了 js 的语法，迟早要还回来！