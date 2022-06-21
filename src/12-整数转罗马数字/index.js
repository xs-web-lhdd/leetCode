/**
 * @description 12-整数转罗马数字
 * @author 氧化氢
 */

/**
 * @param {number} num
 * @return {string}
 * @solution 通过枚举 每一位的情况（个位数的 1 - 9，十位上的 1 - 9， 百位上的 1 - 9， 千位上的 1 - 3，然后将数字拆分开，如：1999 就拆成：1 9 9 9，那么个位就是 IX 十位就是 XC 百位就是 CM 千位就是 M 合起来就是 MCMXCIX）
 */
 var intToRoman = function(num) {
  var map = {
    1: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    2: ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    3: ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    4: ['M', 'MM', 'MMM']
  }

  var str = String(num)
  var length = str.length
  var i = 0, j = 1, ans = ''
  while(i < length) {
    var char = str[length - i - 1]
    var getRoman = map[j][char-1]
    if(getRoman) ans = getRoman + ans
    j++
    i++
  }

  return ans
};

export default intToRoman