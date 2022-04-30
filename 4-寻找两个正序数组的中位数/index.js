/**
 * @description 4-寻找两个正序数组的中位数
 * @author 氧化氢
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  nums1 = nums1.concat(nums2)
  nums1.sort((a, b) => a - b)
  if(nums1.length % 2) {
      // 奇数的情况：
      return nums1[Math.floor(nums1.length/2)]
  } else {
      // 偶数的情况：
      var mid = nums1.length/2
      return (nums1[mid - 1] + nums1[mid]) / 2
  }
};