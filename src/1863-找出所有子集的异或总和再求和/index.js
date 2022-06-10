/**
 * @description 1863-找出所有子集的异或总和再求和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @solution 思路很简单，找到所有子集，然后将各个子集内容进行异或处理，然后加和即可。
 * 求子集相关题目：leetcode 78 子集
 */
 var subsetXORSum = function(nums) {
  //  求子集：
  var ans = []
  var length = 2 ** nums.length
  for(var i = 0; i < length; i++) {
    var str = i.toString(2)
    str = '0'.repeat(nums.length - str.length) + str
    var arr = []
    for(var j = 0; j < str.length; j++) {
      if(str[j] === '1') arr.push(nums[j])
    }
    ans.push(arr)
  }

  // 对子集进行异或加和：
  var res = 0
  for(var i = 0; i < ans.length; i++) {
      var cur = ans[i]
      var s = 0
      for(var j = 0; j < cur.length; j++) s ^= cur[j]
      res += s
  }

  return res
};

export {
  subsetXORSum
}