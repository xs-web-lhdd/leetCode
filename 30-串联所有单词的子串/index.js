/**
 * @description 30-串联所有单词的子串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * @sulution 通过 dfs 得出 words 的所有的排列情况数组 arr，然后用一个长度为 n(arr中任意一个字符串的长度) 的窗口去判断窗口内 str 在不在 arr 中，在了就把下标放入 ans 中
 */
 var findSubstring = function(s, words) {
  var arr = []
  dfs("", words, arr)

  var ans = []
  var length = arr[0].length
  for(var i = 0; i <= s.length - length; i++) {
      if(arr.includes(s.slice(i, i + length))) ans.push(i)
  }

  return ans
};


function dfs(str, targetArr, arr) {
  for(var i = 0; i < targetArr.length; i++) {
      var resArr = targetArr.slice(0, i).concat(targetArr.slice(i+1))
      if(resArr.length) dfs(str + targetArr[i], resArr, arr)
      else arr.push(str + targetArr[0])
  }
}