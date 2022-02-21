/**
 * @description 350 两个数组的交集 II
 * @author 氧化氢
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  const arr = []
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  var l1 = 0, l2 = 0
  while(l1 < nums1.length && l2 < nums2.length) {
    if(nums1[l1] === nums2[l2]) {
      arr.push(nums1[l1])
      l1++
      l2++
    } else if(nums1[l1] < nums2[l2]) {
      l1++
    } else {
      l2++
    }
  }

  return arr
};