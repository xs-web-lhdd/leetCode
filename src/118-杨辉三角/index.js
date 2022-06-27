/**
 * @description 118-杨辉三角
 * @author 氧化氢
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  // 两种边界情况：
  if(numRows === 1) return [[1]]
  else if(numRows === 2) return [[1], [1,1]]
  else {
    var ans = [[1], [1,1]]
    var layer = 2
    for(var i = layer; i < numRows; i++) {
      var arr = [1]
      for(var j = 0; j < ans[layer-1].length; j++) {
        if(j+1 < ans[layer-1].length) arr.push(ans[layer-1][j] + ans[layer-1][j+1])
      }
      arr.push(1)
      ans.push(arr)
      layer++
    }

    return ans
  }
};

export default generate