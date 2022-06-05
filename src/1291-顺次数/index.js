/**
 * @description 1291-顺次数
 * @author 氧化氢
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
 var sequentialDigits = function(low, high) {
  var ans = []
  var num = '123456789'
  var min = String(low).length
  var max = String(high).length
  var res
  
  while(min <= max) {
      for(var i = 0; i <= num.length - min; i++) {
          res = num.substring(i, i + min)
          if(Number(res) <= high && Number(res) >= low) ans.push(res)
      }
      min++
  }

  return ans
};
