/**
 * @description 17-电话号码的字母组合
 * @author 氧化氢
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if(!digits) return []
  var map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
  }
  var arr = ['','','']
  for(var i = 0; i < digits.length; i++) {
      arr = recursion(digits[i], arr, map)
  }

  arr.sort()

  return arr
};

function recursion(char, arr, map) {
  var str = map[char]
  var ans = []
  for(var i = 0; i < str.length; i++) {
      for(var j = 0; j < arr.length; j++) {
          if(!ans.includes(arr[j] + str[i])) ans.push(arr[j] + str[i])
      }
  }

  return ans
}