/**
 * @description 9-回文数
 * @author 氧化氢
 */

/**
 * @param {number} x
 * @return {boolean}
 * @solution 字符串法 
 */
 var isPalindrome = function(x) {
  var p = x;
  if(x<0){return false;}
  else if(x === 0){return true;}
  
  str = String(x)
  for(var i = 0, j = str.length-1; i < j; ) {
      if(str[i] !== str[j]) return false
      i++
      j--
  }

  return true
};