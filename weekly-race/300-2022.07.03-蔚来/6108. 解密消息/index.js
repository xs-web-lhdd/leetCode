/**
 * @description 6108. 解密消息
 * @author 氧化氢
 * @url https://leetcode.cn/contest/weekly-contest-300/problems/decode-the-message/
 */

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 var decodeMessage = function(key, message) {
  var map = new Map()
  var start = 97
  for(var i = 0; i < key.length; i++) {
    if(!map.get(key[i]) && key[i] !== ' ') {
      map.set(key[i], String.fromCharCode(start))
      start++
    }
  }

  var ans = ''
  for(var i = 0; i < message.length; i++) {
    if(message[i] !== ' ') {
      ans += map.get(message[i])
    } else {
      ans += ' '
    }
  }

  return ans
};