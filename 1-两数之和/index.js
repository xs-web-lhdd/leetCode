/**
 * @description 1-两数之和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 方法一:
var twoSum = function(nums, target) {
  if(nums.length === 2)  return [0, 1]
  var arr = [...nums]
  arr.sort((a, b) => a - b)
  var i = 0, j = arr.length - 1
  for(i, j; i < j; ) {
      if(arr[i] + arr[j] > target) {
          j--
      } else if(arr[i] + arr[j] < target) {
          i++
      } else {
          break
      }
  }

  return [nums.indexOf(arr[i]), nums.lastIndexOf(arr[j])]
};

// 方法二:
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i]
    if (map.has(dif)) {
      return [map.get(dif), i]
    }
    map.set(nums[i], i);
  }
};