/**
 * @description 面试题 16.11. 跳水板
 * @author 氧化氢
 */

/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
 var divingBoard = function(shorter, longer, k) {
  if(k === 0) return []
  var ans = []
  var shortNum, longerNum
  for(var i = 0; i <= k; i++) {
      shortNum = i
      longerNum = k - i
      ans.push(shortNum * shorter + longerNum * longer)
  }

  return [... new Set(ans.sort((a, b) => a - b))]
};