/**
 * @deprecated 剑指 Offer 40. 最小的k个数
 * @author 氧化氢
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  arr.sort((x, y) => x - y)
  var array = []
  for(var i = 0; i < k; i++) {
    array.push(arr[i])
  }

  return array
};