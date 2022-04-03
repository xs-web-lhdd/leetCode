/**
 * @description 455-分发饼干
 * @author 氧化氢
*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let result = 0
  let index = s.length - 1
  for(let i = g.length - 1; i >= 0; i--) {
      if(index >= 0 && s[index] >= g[i]) {
          result++
          index--
      }
  } 
  return result
};

// 思路：把大饼干给大胃口的孩子，即为最优解！