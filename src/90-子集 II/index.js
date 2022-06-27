/**
 * @description 90-子集 II
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @solution 看 78 题即可
 */
 var subsetsWithDup = function(nums) {
  var map = new Map()
  var ans = []
  var length = 2 ** nums.length
  for(var i = 0; i < length; i++) {
    var str = i.toString(2)
    str = '0'.repeat(nums.length - str.length) + str
    var arr = []
    for(var j = 0; j < str.length; j++) {
      if(str[j] === '1') arr.push(nums[j])
    }
    arr.sort((a, b) => a - b)
    if(!map.has(arr.join(''))) ans.push(arr), map.set(arr.join(''), 1)
  }

  return ans
};


export default subsetsWithDup