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