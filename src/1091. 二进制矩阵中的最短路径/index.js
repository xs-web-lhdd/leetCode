/**
 * @description 1091. 二进制矩阵中的最短路径
 * @author 氧化氢
 */

/**
 * @param {*} i 横坐标
 * @param {*} j 纵坐标
 * @param {*} k 距离
 */
function Data(i, j, k) {
  this.i = i
  this.j = j
  this.k = k
}
 
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
  if(grid[0][0]) return -1
   // 八个方向：
  var dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [1, 1],
    [1, -1]
  ]
  var n = grid.length, m = grid[0].length
  var visable = []
  for(var i = 0; i < n; i++) {
    visable.push([])
  }

  var queue = [new Data(0, 0, 1)]
  visable[0][0] = 1

  while(queue.length) {
    // 取状态：
    var cur = queue.shift()
    // 如果到右下角了直接返回
    if(cur.i === n -1 && cur.j === m - 1) return cur.k
    for(var k = 0; k < 8; k++) {
      var x = cur.i + dir[k][0]
      var y = cur.j + dir[k][1]
      if(x < 0 || x >= n) continue
      if(y < 0 || y >= m) continue
      if(grid[x][y]) continue
      // 搜索过就不加队列了
      if(visable[x][y]) continue
      visable[x][y] = 1
      queue.push(new Data(x, y, cur.k + 1))
    }
  }

  return -1
};