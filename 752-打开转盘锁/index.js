/**
 * @description 752-打开转盘锁
 * @author 氧化氢
 */


/**
 * @param {string} s 密码
 * @param {number} k 次数 
 */
 function Data(s, k) {
  this.s = s
  this.k = k
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 var openLock = function(deadends, target) {
  var map = new Map()
  for(var i = 0; i < deadends.length; i++) {
    if(deadends[i] === '0000') return -1
    map.set(deadends[i], 1)
  }

  var queue = []
  map.set('0000', 1)
  queue.push(new Data('0000', 0))

  while(queue.length) {
    var cur = queue.shift()
    if(cur.s === target) return cur.k
    // 第几个位置发生移动:
    for(var i = 0; i < 4; i++) {
      // 每个位置上下旋动, 1 代表上转, 0代表下转
      for(var j = 0; j < 2; j++) {
        // 得到当前状态的下一个状态:
        var res = getS(cur.s, i, j)
        if(map.has(res)) continue
        map.set(res, 1)
        queue.push(new Data(res, cur.k + 1))
      }
    }
  }

  return -1
};

/**
 * @param {string} s 当前字符串密码 
 * @param {number} i 密码的第几位(从左到右,从 0 开始)
 * @param {number} j 上转还是下转, 1 代表加, 0 代表减
 * @returns {string} 返回旋转后的新密码
 */
function getS(s, i, j) {
  if(j === 1) {
    // 向上调
    var temp = Number(s[i]) + 1
    if(temp > 9) temp = 0
  }
  else {
    // 向下调:
    var temp = Number(s[i]) - 1
    if(temp < 0) temp = 9
  }
  return s.slice(0, i) + temp + s.slice(i + 1)
}