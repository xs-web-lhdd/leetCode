/**
 * @description 剑指 Offer 10- I. 斐波那契数列
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  if(n === 0) return 0
  if(n === 1) return 1
  var m1 = BigInt(1)
  var m2 = BigInt(0)
  var temp = BigInt(0)
  for(var i = 2; i <= n; i++) {
      temp = m1 + m2
      m2 = m1
      m1 = temp
  }

  return temp % BigInt(1000000007)
};

export default fib