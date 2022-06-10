/**
 * @description 78-子集
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @solution 二进制的方式进行排列 --- 适用于所有数组求子集
 * @tutorial https://www.bilibili.com/video/BV14r4y1q7iV?spm_id_from=333.337.search-card.all.click&vd_source=605eaae8506df36fc86fca9b2b498d80
 */
 var subsets = function(nums) {
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

  return ans
};

export default subsets