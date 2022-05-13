/**
 * @description 面试题 01.05. 一次编辑
 * @author 氧化氢
 */

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
 var oneEditAway = function(first, second) {
  //  边界情况：
  if(first.length === 1 && second.length === 1) return true
  // 相等的情况：
  if(first === second) return true
  // 修改字母的情况：
  else if(first.length === second.length) {
      var count = 0
      for(var i = 0, j = 0; i < first.length || j < second.length; i++, j++) {
          if(first[i] !== second[j]) count++
      }        
  }
  // 删除字母的情况:
  else {
      var min, max
      if(first.length > second.length) min = second, max = first
      else min = first, max = second

      var count = 0
      for(var i = 0, j = 0; i < min.length || j < max.length;) {
          if(min[i] === max[j]) i++, j++
          else {
              if(!count) {
                  count++, j++
              }
              // 做优化,当删除的时候发现第二个不一样的时候直接返回即可
              else return false
          }
      }
  }

  // 修改的情况判断，修改了几个字符，修改一个那返回 true，修改多个返回 false
  if(count === 1) return true
  else return false
};