/**
 * @description 969 煎饼排序
 * @author 氧化氢
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  var x = arr.length, ar = []
  var resultArr = arr
  while(x > 0) {
    var { i: maxIndex } = getArrMax(resultArr)
    resultArr = reverse(resultArr, maxIndex + 1, ar)
    resultArr = reverse(resultArr, x, ar)
    resultArr.pop()
    x--
  }
  return ar
}

var getArrMax = function(arr) {
  var maxNum = Math.max.apply(null, arr)
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === maxNum) {
      return { i, maxNum }
    }
  }
}

var reverse = function(arr, k, ar) {
  ar.push(k)
  var a = [], b = []
  for(let i = 0; i < k; i++) {
    a[i] = arr[k-i-1]
  }
  for(let i = k; i < arr.length; i++) {
    b[i-k] = arr[i]
  }

  return a.concat(b)
}