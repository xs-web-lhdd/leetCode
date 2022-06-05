/**
 * @description 349-两个数组的交集
 * @author 氧化氢
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  var maxNum, minNum
  if(nums1.length >= nums2.length) {
      maxNum = nums1
      minNum = nums2
  } else {
      maxNum = nums2
      minNum = nums1
  }
  var arr = []
  for(var i = 0; i < minNum.length; i++) {
      if(maxNum.indexOf(minNum[i]) > -1) {
          arr.push(minNum[i])
      }
  }

  return Array.from(new Set(arr))
};