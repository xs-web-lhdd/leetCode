/**
 * @description 202-快乐数
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {boolean}
 * @solution 这题的巧妙之处在于非快乐数会经过快乐数的规律转换后重复之前的元素，形成一个环，因此可以用哈希表来写
 */
var isHappy = function (n) {
  let cur = n
  var map = new Map()
  while (cur !== 1) {
    // 如果重复直接返回 false
    if (map.get(cur)) return false
    else map.set(cur, 1)
    cur = getValue(cur)
  }

  return true
}

// 拿到下一个快乐数
function getValue(n) {
  let sum = 0
  let mod = 0
  while (n > 0) {
    mod = n % 10
    n = Math.floor(n / 10)
    sum += mod * mod
  }

  return sum
}

export default isHappy