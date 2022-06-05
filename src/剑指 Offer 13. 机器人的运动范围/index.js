/**
 * @description 剑指 Offer 13. 机器人的运动范围
 * @author 氧化氢
 */

/**
 * @param {number} i 横坐标 
 * @param {number} j 纵坐标
 */
 function Data(i, j) {
  this.i = i
  this.j = j
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
  var dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]

  var visable = []
  for(var i = 0; i < m; i++) {
    visable.push([])
  }
  visable[0][0] = 1
  var queue = [new Data(0, 0)]

  var ans = 1
  while(queue.length) {
    var cur = queue.shift()
    for(var z = 0; z < 4; z++) {
      var x = cur.i + dirs[z][0]
      var y = cur.j + dirs[z][1]
      if(x < 0 || x >= m) continue
      if(y < 0 || y >= n) continue
      if(modeSum(x) + modeSum(y) > k) continue
      if(visable[x][y] === 1) continue
      visable[x][y] = 1
      queue.push(new Data(x, y))
      // 只要满足条件就把 ans 加一, ans 就是最后机器人能到达的格子
      ans += 1
    }
  }

  return ans
};


/**
 * @param {number} num 参数 
 * @returns {number} 返回 num 每一位相加之和
 */
function modeSum(num) {
  var sum = 0
  while(num) {
    var mode = num % 10
    sum += mode
    num = Math.floor(num / 10)
  }

  return sum
}