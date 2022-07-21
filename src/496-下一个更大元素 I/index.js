/**
 * @description 496-下一个更大元素 I
 * @author 氧化氢
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  var stack = [],
    next = []

  for (var i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      next[stack[stack.length - 1]] = i
      stack.pop()
    }
    stack.push(i)
  }
  while (stack.length) next[stack[stack.length - 1]] = nums2.length, stack.pop()

  var res = []
  for (var i = 0; i < nums1.length; i++) {
    var index = nums2.indexOf(nums1[i])
    res[i] = (next[index] !== nums2.length ? nums2[next[index]] : -1)
  }

  return res
};