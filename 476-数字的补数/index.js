/**
 * @description 476-数字的补数
 * @author 氧化氢
 */

/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
  num = num.toString(2)
  var sum = 0

  for(var i = 0; i < num.length; i++) {
      if(num[i] === '0') {
          sum += (2 ** (num.length - i - 1))
      }
  }


  return sum
};