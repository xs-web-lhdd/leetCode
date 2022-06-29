/**
 * @description 40-组合总和 II
 * @author 氧化氢
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @soluton 时间复杂度太高，超时！
 */
 var combinationSum2 = function(candidates, target) {

  // 计算每一个字符的数量：
  var map = new Map()
  for(var i = 0; i < candidates.length; i++) {
    if(map.has(candidates[i])) map.set(candidates[i], map.get(candidates[i]) + 1)
    else map.set(candidates[i], 1)
  }
     
  candidates.sort((a, b) => a - b)
  var ret = []
  var res = {
      ans: [],
      map: new Map()
  }
  dfs(candidates, target, res, ret, map)
  ret = [... new Set(ret)]
  var ans = []
  for(var i = 0; i < ret.length; i++) {
    ans.push(ret[i].split(','))
  }

  return ans
};

function dfs(candidates, target, res, ret, map) {
  for(var i = 0; i < candidates.length; i++) {
    var arr = res.ans.slice(0)
    var m = new Map(res.map)
    // 剪枝：
    if(target < candidates[i]) {
      // console.log(`目标值 ${target} 小于最小 值，进行剪枝`);
      return
    }

    if(target === candidates[i]) {
        arr.push(candidates[i])
        if(m.has(candidates[i])) m.set(candidates[i], m.get(candidates[i]) + 1)
        else m.set(candidates[i], 1)

        // 当数组中某个数字数量超过 candidates 中对应数字的数量时就剪枝
        if(m.get(candidates[i]) > map.get(candidates[i])) return

        arr.sort((a, b) => a - b)
        ret.push(arr.join(','))
        return
    }
    if(target > candidates[i]) {
      arr.push(candidates[i])
      if(m.has(candidates[i])) m.set(candidates[i], m.get(candidates[i]) + 1)
      else m.set(candidates[i], 1)

      // 当数组中某个数字数量超过 candidates 中对应数字的数量时就剪枝
      if(m.get(candidates[i]) > map.get(candidates[i])) return

      dfs(candidates, target - candidates[i], { ans: arr, map: m }, ret, map)
    }
  }
}

export default combinationSum2