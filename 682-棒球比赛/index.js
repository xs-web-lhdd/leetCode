/**
 * @description 682 棒球比赛
 * @author 氧化氢
 */

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  var result = []
  for(num of ops) {
      if(num === 'C') {
          result.pop()
      }
      else if(num === 'D') {
          result.push(result[result.length - 1] * 2)
      }
      else if(num === '+') {
          result.push(result[result.length - 1] + result[result.length - 2])
      }
      else {
          result.push(Number(num))
      }
  }

  return result.reduce((pre, next) => pre + next)
};
