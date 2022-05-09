/**
 * @description 130-被围绕的区域
 * @author 氧化氢
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * @method 深度优先遍历
 * @sulution 先遍历矩阵的最外圈,如果发现是 'O' 那么就改为 'o',那么就继续进行深度优先遍历,然后直到结束,这时矩阵里面的 'O' 就是被 'X' 包围的格子,然后对矩阵进行一个遍历,把 'o' 改为 'O',其他都是 'X' 即可
 */
 var solve = function(board) {
  var m = board.length, n = board[0].length

  var dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]

  function dfs(i, j, board) {
    board[i][j] = 'o'
    for(var k = 0; k < 4; k++) {
      var x = i + dirs[k][0]
      var y = j + dirs[k][1]
      if(x < 0 || x >= m) continue
      if(y < 0 || y >= n) continue
      if(board[x][y] !== 'O') continue
      dfs(x, y, board)
    }
  }

  // 对矩阵的最外圈进行查找, 最上最下两行：
  for(var i = 0; i < n; i++) {
    if(board[0][i] === 'O') dfs(0, i, board)
    if(board[m-1][i] === 'O') dfs(m-1, i, board)
  }
  // 最左最右两列：
  for(var i = 0; i < m; i++) {
    if(board[i][0] === 'O') dfs(i, 0, board)
    if(board[i][n-1] === 'O') dfs(i, n-1, board)
  }

  // 将 o 变为 O, 其他变为 X
  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if(board[i][j] !== 'o') board[i][j] = 'X'
      else board[i][j] = 'O'
    }
  }

  return board
};