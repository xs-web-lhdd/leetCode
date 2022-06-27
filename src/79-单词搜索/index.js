/**
 * @description 79-单词搜索
 * @author 氧化氢
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  var targetChar = word[0]
  var targetArr = []
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[0].length; j++) {
      if(board[i][j] === targetChar) targetArr.push([i, j]) 
    }
  }


  for(var i = 0; i < targetArr.length; i++) {
    // 生成映射数组:
    var map = []
    for(var j = 0; j < board.length; j++) {
      map.push(new Array(board[0].length).fill(0))
    }
    var direction = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]

    var start = targetArr[i]
    map[start[0]][start[1]] = 1
    var res = dfs(start[0], start[1], 0, word, board.length, board[0].length, direction, map, board)
    if(res === true) return true
  }

  return false
};


function dfs(i, j, k, word, length, size, direction, map, board) {
  if(k === word.length-1) return true
  for(var m = 0; m < 4; m++) {
    var x = i + direction[m][0]
    var y = j + direction[m][1]
    if(x < 0 || x > length - 1) continue
    if(y < 0 || y > size - 1) continue
    if(map[x][y] === 1) continue
    if(board[x][y] !== word[k+1]) continue
    map[x][y] = 1
    // 如果当前位置往后能找到，那就返回true
    if(dfs(x, y, k+1, word, length, size, direction, map, board) === true) {
      return true
    } else {
      // 刚刚走的位置也对,但是达不到最终结果,那么必然要返回到上一种情况中进行回溯,记得把 map 走过的恢复回来
      map[x][y] = 0
      continue
    }
  }

  return false
}

export default exist