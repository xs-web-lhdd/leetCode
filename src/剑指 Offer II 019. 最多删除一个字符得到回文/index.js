/**
 * @description 剑指 Offer II 019. 最多删除一个字符得到回文
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
  // 如果是回文字，直接返回 true
  if(isPalindrome(s)) return true
  for(var i = 0, j = s.length-1; i < j; ) {
      if(s[i] !== s[j]) {
          var newStr1 = s.slice(i, j)
          var newStr2 = s.slice(i+1, j+1)
          return isPalindrome(newStr1) || isPalindrome(newStr2)
      }
      i++
      j--
  }

  return true
};


var isPalindrome = function(s) {
  for(var i = 0, j = s.length-1; i < j;) {
      if(s[i] === s[j]) i++, j--
      else return false
  }
  return true
};
