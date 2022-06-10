/**
 * @description 190-颠倒二进制位
 * @author 氧化氢
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  //  将数字转化为 2 进制
  n = n.toString(2)
  // 将数字长度补为 32 位
  if(n.length < 32) {
    n = new Array(33 - n.length).join('0') + n
  }
  var str = `${n}`

  var s = str.split('').reverse().join('')

  // 将二进制转化为 10 进制
  var sum = BigInt(0)
  for(var i = s.length - 1; i >= 0; i--) {
    sum += BigInt(BigInt(s[i]) * BigInt(2 ** (s.length - 1 - i)))
  }

  return sum
};