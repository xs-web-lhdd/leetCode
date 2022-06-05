/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
  var count = 9
  var sum = 0
  while(n) {
      sum = sum * 10 + count
      n--
  }

  var arr = []
  for(var i = 1; i <= sum; i++) {
      arr.push(i)
  }

  return  arr
};