/**
 * @description 剑指 Offer 12. 矩阵中的路径
 * @author 氧化氢
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  var col = board.length, row = board[0].length
  // var ans = []
  // for(var k = 0; k < col; k++) {
  //   ans.push(new Array(row).fill(0))
  // }

  var startArr = []
  for(var i = 0; i < col; i++) {
    for(var j = 0; j < row; j++) {
      if(board[i][j] === word[0]) startArr.push([i, j])
    }
  }

  console.log(startArr);
  for(var i = 0; i < startArr.length; i++) {
    if(getWord(startArr[i], col, row, word, board)) return true
  }

  return false
};

function getWord(position, col, row, word, board) {
  var ans = []
  for(var k = 0; k < col; k++) {
    ans.push(new Array(row).fill(0))
  }

  console.log(ans);

  function df(position, flag, word) {
    if(flag === word.length) return true
    var x = position[0]
    var y = position[1]
    var p = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1]
    ]
    for(var i = 0; i < 4; i++) {
      x = x + p[i][0]
      y = y + p[i][1]
      if(ans[x][y]) continue
      if(x < 0 || x >= col) continue
      if(y < 0 || y >= row) continue
      if(board[x][y] !== word[flag]) return false
      ans[x][y] = 1
      df([x, y], flag+1, word)
    }
  }

  if(df(position, 0, word)) return true
  else return false
}