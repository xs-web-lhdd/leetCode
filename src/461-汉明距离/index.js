/**
 * @description 461-汉明距离
 * @author 氧化氢
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  x = x.toString(2)
  y = y.toString(2)

  if(x.length > y.length) {
      max = x
      min = y
  } else {
      max = y
      min = x
  }
  
  min = '0'.repeat(max.length - min.length) + min

  // console.log(max, min)

  var count = 0, maxChar, minChar
  for(var i = min.length - 1, j = max.length - 1; i >= 0, j >= 0; i--, j--) {
      // xChar = min[i] ? Number(min[i]) : 0
      // yChar = max[j] ? Number(max[j]) : 0
      minChar = min[i]
      maxChar = max[j]
      if(minChar !== maxChar) count++
  }

  return count
};