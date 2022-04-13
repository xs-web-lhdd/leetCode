/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(num1, num2) {
  var i = num1.length - 1
  var j = num2.length - 1

  var c1, c2, falg = 0, res = []
  while(i >=0 || j >= 0 || falg) {
      c1 = num1[i] ? Number(num1[i]) : 0
      c2 = num2[j] ? Number(num2[j]) : 0
      if(c1 + c2 + falg >= 2) {
          res.unshift((c1 + c2 + falg) % 2)
          falg = 1
      } else {
          res.unshift(c1 + c2 + falg)
          falg = 0
      }

      i--
      j--
  }

  return String(res.join(""))
};