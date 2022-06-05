/**
 * @description 39-组合总和
 * @author 氧化氢
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  var ret = []
  dfs(candidates, target, [], ret)
  ret = [... new Set(ret)]
  var ans = []
  for(var i = 0; i < ret.length; i++) {
    ans.push(ret[i].split(','))
  }

  return ans
};

function dfs(candidates, target, ans, ret) {
  for(var i = 0; i < candidates.length; i++) {
    var arr = ans.slice(0)
    // 剪枝：
    if(target < candidates[i]) {
      // console.log(`目标值 ${target} 小于最小 值，进行剪枝`);
      return
    }
    if(target === candidates[i]) {
      arr.push(candidates[i])
      // console.log(`${candidates[i]} 满足的数组`, arr)
      arr.sort((a, b) => a - b)
      ret.push(arr.join(','))
      return
    }
    if(target > candidates[i]) {
      arr.push(candidates[i])
      // console.log(`目标值 ${target} 大于当前值 ${candidates[i]}, 然后 ${candidates[i]} 入数组`, arr)
      dfs(candidates, target - candidates[i], arr, ret)
    }
  }
}