/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
  var arr = []
  for(var i = 0; i < s.length; i++) {
      if(s[i] === c) arr.push(i)
  }
  console.log(arr)

  var ans = [], pre = -1000, next = arr[0]
  for(var i = 0; i < s.length; i++) {
      if(next >= i) ans.push(Math.min(i - pre, next - i))
      else {
          pre = arr.shift()
          if(arr.length) next = arr[0]
          else next = 100000
          ans.push(Math.min(i - pre, next - i))
      }
  }

  return ans
};