/**
 * @description 473-火柴拼正方形
 * @author 氧化氢
 */

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
  matchsticks.sort((a, b) => a - b)
  var sum = 0
  matchsticks.forEach(item => sum += item)
  // 如果每个边长不是整数，说明不可能形成火柴
  if(sum % 4) return false

  var arr = []
  for(var i = 0; i < 4; i++) {
      arr[i] = sum / 4
  }

  return dfs(matchsticks.length - 1, arr, matchsticks)
};

function dfs(index, arr, ms) {
  // 如果能走到最后一个木棍，说明全部木棍已经放到所有边上了，那么就说明满足情况了
  if(index === -1) return true
  // 拿出木棍往每一个边上去放，然后去尝试
  for(var i = 0; i < 4; i++) {
      if(arr[i] < ms[index]) continue
      // arr[i] >= ms[index] + ms[0] 做了剪枝处理，细节是 ms[0] 这块，有一种情况是 一个边还剩长度为 10，但其中有两个木棍分别是 8， 3 这样即使  10 > 8 但也没必要继续尝试，因为即使尝试了最后剩 2 还是小于 3 还是放不下，那还不如不尝试以提升性能
      if(arr[i] === ms[index] || arr[i] >= ms[index] + ms[0]) {
          arr[i] -= ms[index]
          // 如果有一种情况成功了，那么就不需要继续判断了，直接返回 true 即可
          if(dfs(index - 1, arr, ms)) return true
          // 如果该请情况不成立，那么回到前一种情况，继续下一个边的尝试
          arr[i] += ms[index]
      }
  }

  return false
}