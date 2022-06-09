/**
 * @description 172-阶乘后的零
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number}
 * @solution 其实这个题就是看数因子 2 5 的组合，一对 2 5 就是一个 10，又因为 5 比 2 多，所以数 5 的数量即可
 */
 var trailingZeroes = function(n) {
  var count = 0

  for(var i = 0; i <= n; i += 5) {
      if(i === 0) continue;
      var num = i
      while(!(num % 5)) {
          num = num / 5
          count++
      }
  }

  return count
};


export default trailingZeroes