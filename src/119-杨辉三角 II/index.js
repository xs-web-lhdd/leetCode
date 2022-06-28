/**
 * @description 119-杨辉三角 II
 * @author 氧化氢
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  // 两种边界情况：
  if(rowIndex === 0) return [1]
  else if(rowIndex === 1) return [1,1]
  else {
    var ans = [[1], [1,1]]
    var layer = 2
    for(var i = layer; i < rowIndex+1; i++) {
      var arr = [1]
      for(var j = 0; j < ans[layer-1].length; j++) {
        if(j+1 < ans[layer-1].length) arr.push(ans[layer-1][j] + ans[layer-1][j+1])
      }
      arr.push(1)
      ans.push(arr)
      layer++
    }

    return ans[ans.length - 1]
  }
};

export default getRow