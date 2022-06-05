/**
 * @deprecated 258-各位相加
 * @author 氧化氢
 */

/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
  while(num > 9) {
      num = isMode(num)
  }

  return num
};

function isMode(num) {
  var sum = 0
  while(num > 0) {
      sum += num % 10
      num = Math.floor(num / 10)
  }

  return sum
}