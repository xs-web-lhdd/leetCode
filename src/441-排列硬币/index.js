/**
 * @description 441-排列硬币
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
  if(n === 1) return 1
  for(var i = 1; i < n; i++) {
      var small = (1 + i) * i / 2
      var large = (1 + 1 + i) * (1 + i) / 2
      if((small <= n) && (large > n)) return i
  }
};