/**
 * @description 6094. 公司命名
 * @author 氧化氢
 * url：https://leetcode.cn/problems/naming-a-company/
 */

/**
 * @param {string[]} ideas
 * @return {number}
 * @question 超时
 */
 var distinctNames = function(ideas) {
  var ans = 0
  var map = new Map()
  for(var i = 0; i < ideas.length; i++) {
    var word = ideas[i]
    for(var j = i; j < ideas.length; j++) {
      if(word[0] !== ideas[j][0]) {
        var w1 = word[0] + ideas[j].slice(1)
        var w2 = ideas[j][0] + word.slice(1)
        if(!ideas.includes(w1) && !ideas.includes(w2)) {
          if(!map.has(`${w1} ${w2}`) && !map.has(`${w2} ${w1}`)) {
            map.set(`${w1} ${w2}`, true)
            map.set(`${w2} ${w1}`, true)
            ans += 2
          }
        }
      }
    }
  }

  return ans
};