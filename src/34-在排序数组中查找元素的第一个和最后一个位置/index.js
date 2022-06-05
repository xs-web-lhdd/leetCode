/**
 * @description 34-在排序数组中查找元素的第一个和最后一个位置
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @method 小赤佬 ！！！ 二分思想很简单，细节真尼玛魔鬼！！！
 */
 var searchRange = function(nums, target) {
  var arr = []
  arr.push(nums.indexOf(target), nums.lastIndexOf(target))

  return arr
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @method 老夫怎么会一直偷工减料呢,今天来补上思路
 */
 var searchRange = function(nums, target) {
  //  找到第一个 target 的值,如果不存在就返回 [-1, -1]
  var i = binary_search(nums, target)
  var ret = []
  ret[0] = i
  if(i === nums.length || nums[i] !== target) {
      ret[0] = ret[1] = -1
      return ret
  }
  // 因为数组是排过序的,所以找到第一个大于等于 target + 1 的下标的前一个下标就是 要找的 target 的最后一位了
  ret[1] = binary_search(nums, target + 1) - 1

  return ret
};

// 在 nums 中找到第一个 大于等于 target 的下标,如果整个数组的值都小于 target,就默认数组最后一位的下一位(就是 nums.length) 是目标下标
function binary_search(nums, target) {
  var head = 0, tail = nums.length - 1, mid
  while(tail - head > 3) {
      mid = (head + tail) >> 1
      if(nums[mid] >= target) tail = mid
      else head = mid
  }
  for(var i = head; i <= tail; i++) {
      if(nums[i] >= target) return i
  }

  return nums.length
}