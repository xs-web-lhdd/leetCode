/**
 * @description 面试题 17.09. 第 k 个数
 * @author 氧化氢
 */

/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  var arr = []
  var p3 = 0,
    p5 = 0,
    p7 = 0
  arr[0] = 1
  for (let i = 1; i < k; i++) {
    arr[i] = Math.min(arr[p3] * 3, Math.min(arr[p5] * 5, arr[p7] * 7))
    if (arr[i] === arr[p3] * 3) p3++;
    if (arr[i] === arr[p5] * 5) p5++;
    if (arr[i] === arr[p7] * 7) p7++;
  }
  return arr[k - 1]
};

export default getKthMagicNumber