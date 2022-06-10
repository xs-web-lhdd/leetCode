/**
 * @description 191-位1的个数
 * @author 氧化氢
 */


/**
 * @param {number} n - a positive integer
 * @return {number}
 * @solution 转成字符串 然后 for 循环进行统计 1 的个数
 */
 var hammingWeightTwo = function(n) {
  var str = n.toString(2)
  var count = 0
  for(var i = 0; i < str.length; i++) {
    if(str[i] === '1') count++
  }
  
  return count
};

export {
  hammingWeightTwo
}