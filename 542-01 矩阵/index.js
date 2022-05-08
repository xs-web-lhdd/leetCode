/**
 * @description 542-01 矩阵
 * @author 氧化氢
 */

/**
 * @param {number} i 横坐标
 * @param {number} j 纵坐标
 * @param {number} k 该坐标与 0 的最近距离
 */
 function Data(i, j, k) {
  this.i = i
  this.j = j
  this.k = k
}

function initQueue(queue, visable, n, m, mat) {
  // 没被入过队的就初始化为 -1
  for(var i = 0; i < n; i++) {
    visable[i] = []
    for(var j = 0; j < m; j++) {
      visable[i][j] = -1
    }
  }
  // 将值为 0 的入队
  for(var i = 0; i < n; i++) {
    for(var j = 0; j < m; j++) {
      if(mat[i][j]) continue
      visable[i][j] = 0
      queue.push(new Data(i, j, 0))
    }
  }
}

/**
* @param {number[][]} mat
* @return {number[][]}
* @method 广度优先遍历
* @solution 初始化结果数组 visable 为 -1，然后遍历原数组，如果原数组为 0，那就入队（此时得队是初始化的队），然后遍历队里的每一个元素，计算该元素上下左右的四个坐标，如果没被遍历给并且合法位置那么就算出该位置距离最近 0 的距离，（就是 visable[x][y] = cur.k + 1）这一句，然后把该位置入队即可（保证，该位置周围四个位置都被处理过）
*/
var updateMatrix = function(mat) {
  var dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  var n = mat.length, m = mat[0].length
  var queue = []
  var visable = []
  initQueue(queue, visable, n, m, mat)
  while(queue.length) {
    var cur = queue.shift()
    for(var k = 0; k < 4; k++) {
      // 确定 cur 周围的四个坐标
      var x = cur.i + dir[k][0]
      var y = cur.j + dir[k][1]
      // 越界情况：
      if(x < 0 || x >= n) continue
      if(y < 0 || y >= m) continue
      // 遍历过了就不需要再遍历了 --- 剪枝
      if(visable[x][y] !== -1) continue
      visable[x][y] = cur.k + 1
      queue.push(new Data(x, y, cur.k + 1))
    }
  }

  return visable
};