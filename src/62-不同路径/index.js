/**
 * @description 62-不同路径 递归超时解法
 * @author 氧化氢
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @solution 递归超时，还是要用动态规划啊!!!
 */
 var uniquePaths = function(m, n) {
  // 往右走用 1 来标记，往下走用 2 来标记
  var arr = []
  var ans = 0
  function dfs(x, y, m, n, arr) {
    if(x < m - 1 && y < n - 1) {
      // 可以往右和下走：
      var arr1 = arr.slice()
      arr1.push(1)
      dfs(x, y + 1, m, n, arr1)
      var arr2 = arr.slice()
      arr2.push(2)
      dfs(x + 1, y, m, n, arr2)
    }
    else if(x < m - 1 && y === n - 1) {
      // 只能往下走：
      var arr2 = arr.slice()
      arr2.push(2)
      dfs(x + 1, y, m, n, arr2)
    }
    else if(x === m - 1 && y < n - 1) {
      // 只能往右走：
      var arr1 = arr.slice()
      arr1.push(1)
      dfs(x, y + 1, m, n, arr1)
    }
    else {
      // 到达终点
      ans++
      return
    }
  }

  dfs(0, 0, m, n, arr)


  return ans
};

export default uniquePaths