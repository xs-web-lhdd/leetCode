/**
 * @description 345-反转字符串中的元音字母
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
  s = s.split("")

  var temp = null
  for(var i = 0, j = s.length; i < j; ) {
      if(isVowel(s[i]) && isVowel(s[j])) {
          temp = s[j]
          s[j] = s[i]
          s[i] = temp
          i++
          j--
      }
      else if(!isVowel(s[i]) && isVowel(s[j])) i++
      else if(isVowel(s[i]) && !isVowel(s[j])) j--
      else i++, j--
  }

  return s.join('')
};

function isVowel(char) {
  if(char === 'a') return true
  else if(char === 'e') return true
  else if(char === 'i') return true
  else if(char === 'o') return true
  else if(char === 'u') return true
  else if(char === 'A') return true
  else if(char === 'E') return true
  else if(char === 'I') return true
  else if(char === 'O') return true
  else if(char === 'U') return true
  else return false
}