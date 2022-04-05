/**
 * @description 762-二进制表示中质数个计算置位
 * @author 氧化氢
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
  let c = 0
  for(var j = left; j <= right; j++) {
      if(toTwoAndIsPrime(j)) c++
  }

  return c
};

function toTwoAndIsPrime(num) {
  let count = 0
  const res = num.toString(2)
  for(var i = 0; i < res.length; i++) {
      if(res[i] === '1') count++
  } 
  if(isPrime(count)) return true
}

function isPrime(num) {
  if(num === 1) return false
  if(num === 2) return true
  for(var i = 2; i < num; i++) {
      if(num % i) {}
      else return false 
  }

  return true
}