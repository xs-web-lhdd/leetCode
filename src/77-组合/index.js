/**
 * @description 77-组合
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  var ans = []

  function dfs(n, k, start, path) {
    var arr = path.slice()
    if(!k) {
      ans.push(arr)
      return
    }
    for(var i = start; i <= n; i++) {
      arr.push(i)
      dfs(n, k - 1, i + 1, arr)
      arr.pop()
    }
  }

  dfs(n, k, 1, [])

  return ans
};

export default combine