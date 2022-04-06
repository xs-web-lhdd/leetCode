/**
 * @description 263-丑数
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
  if(n === 0) return false
  if(n === 1)  return true
  while(isExpect(n)) {
      if(!String(n/2).includes('.')) {
          n = n / 2
      }
      if(!String(n/3).includes('.')) {
          n = n / 3
      }
      if(!String(n/5).includes('.')) {
          n = n / 5
      }
  }

  return n === 1
};

function isExpect(n) {
      if(!String(n/2).includes('.')) {
          return true
      }
      else if(!String(n/3).includes('.')) {
          return true
      }
      else if(!String(n/5).includes('.')) {
          return true
      }

      return false
}