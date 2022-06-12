/**
 * @description 5259. 计算应缴税款总额
 * @author 氧化氢
 * url: https://leetcode.cn/problems/calculate-amount-paid-in-taxes/
 */


/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
 var calculateTax = function(brackets, income) {
  var index = 0
  for(var i = 0; i < brackets.length; i++) {
    if(income <= brackets[i][0]) {
      index = i
      break
    }
  }

  if(index === 0) {
    return income * brackets[0][1] / 100
  }

  var sum = 0
  sum += brackets[0][1] * brackets[0][0] / 100
  for(var j = 1; j < index; j++) {
    sum += (brackets[j][0] - brackets[j-1][0]) * brackets[j][1] / 100
  }

  sum += (income - brackets[index-1][0]) * brackets[index][1] / 100

  return sum
};

export default calculateTax