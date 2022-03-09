/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  var str = ''
  for(var i = 0; i < s.length; i++) {
      if(s[i] !== ' ') {
          str += s[i]
      } else {
          if(str[str.length - 1] !== ' ') str += ' '
      }
  }


  return str.split(' ').reverse().join(' ').trim()
};