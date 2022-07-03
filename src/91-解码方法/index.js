/**
 * @description 91-解码方法
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
  var size = s.length
  var arr = new Array(size + 1).fill(0)

  s = '0' + s

  arr[0] = 1
  for(var i = 1; i <= size; i++) {
      if(s[i] >= '1' && s[i] <= '9') arr[i] += arr[i - 1]
      if(i > 1) {
          var num = Number(s[i]) + Number(s[i - 1]) * 10
          if(num >= 10 && num <= 26) {
              arr[i] += arr[i - 2]
          }
      }
  }


  return arr[arr.length - 1]
};

export default numDecodings