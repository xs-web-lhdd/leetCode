/**
 * @description 43-字符串相乘'
 * @author 氧化氢
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * @method 这题是真 TM 恶心，稍不注意就写错了
 */
 var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0'
  var sum = ""
  for(var i = num1.length - 1; i >= 0; i--) {
      var val = multiplyOne(num1[i], num2) + '0'.repeat( num1.length - 1- i)
      sum = strAdd(sum, val)
  }

  return sum ? sum : '0'
};

// 字符乘以字符串：1位乘多位
function multiplyOne(char, str) {
  var i = str.length - 1, flag = 0, arr = []
  while(i >=0 || flag) {
      var l1 = str[i] ? str[i] : '0'
      var res = Number(l1) * Number(char) + flag
      if(res >= 10) {
          flag = Number(String(res)[0])
          arr.unshift(String(res)[1])
      } else {
          arr.unshift(String(res))
          flag = 0
      }
      i--
  }

  return arr.join("")
}

// 字符串相加：十进制
function strAdd(str1, str2) {
  var l1 = str1.length-1, l2 = str2.length-1, flag = 0, res = ""
  while(l1 >= 0 || l2 >= 0 || flag) {
      var n1 = str1[l1] ? str1[l1] : "0"
      var n2 = str2[l2] ? str2[l2] : "0"
      if(Number(n1) + Number(n2) + flag >= 10) {
          res = String(Number(n1) + Number(n2) + flag - 10) + res
          flag = 1
      } else {
          res = String(Number(n1) + Number(n2) + flag) + res
          flag = 0
      }
      l1--
      l2--
  }

  return res
}