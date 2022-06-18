/**
 * @description 6-Z 字形变换 
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  // 如果就 一行 那么直接返回即可
  if(numRows === 1) return s

  // 构建一个二维数组用来存放字符
  var arr = []
  for(var i = 0; i < numRows; i++) {
      arr.push([])
  }

  var max = numRows - 1
  var flag = true, m = 0, n = 0
  for(var i = 0; i < s.length; i++) {
      if(flag) {
          // 增的操作：
          if(m < max) {
              arr[m][n] = s[i]
              m++
          }else if(m === max) {
              arr[m][n] = s[i]
              flag = false
              m--
              n++
          }
      } else {
          if(m > 0) {
              arr[m][n] = s[i]
              m--
              n++
          } else if(m === 0) {
              arr[m][n] = s[i]
              flag = true
              m++
          }
      }
  }

  var ans = ''
  for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j < arr[i].length; j++) {
          if(arr[i][j]) ans += arr[i][j]
      }
  }

  return ans
};

export default convert