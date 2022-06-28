/**
 * @description 36-有效的数独
 * @author 氧化氢
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  // 判断行：
  for(var i = 0; i < 9; i++) {
    var map = new Map()
    for(var j = 0; j < 9; j++) {
      if(board[i][j] !== '.') {
        if(map.get(board[i][j])) return false
        else map.set(board[i][j], 1)
      }
    }
  }

  // 判断列：
  for(var i = 0; i < 9; i++) {
    var map = new Map()
    for(var j = 0; j < 9; j++) {
      if(board[j][i] !== '.') {
        if(map.get(board[j][i])) return false
        else map.set(board[j][i], 1)
      }
    }
  }

  // 判断小格子：
  for(var i = 0; i < 9; i+=3) {
    for(var j = 0; j < 9; j+=3) {
      // 每个九宫格的下标：
      var map = new Map()
      for(var m = 0; m < 3; m++) {
        for(var n = 0; n < 3; n++) {
          if(board[i+m][j+n] !== '.') {
            if(map.get(board[i+m][j+n])) return false
            else map.set(board[i+m][j+n], 1) 
          }
        }
      }
    }
  }

  return true
};

export default isValidSudoku