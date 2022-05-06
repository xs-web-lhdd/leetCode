/**
 * @description 81-搜索旋转排序数组 II
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
//  var search = function(nums, target) {
//   if(nums[0] === target) return true
//   else if(nums[0] < target) {
//     // target 可能在前半段：
//     var head = 1, tail = nums.length - 1, mid
//     while(tail >= head) {
//       mid = (head + tail) >> 1
//       if(nums[mid] === target) return true
//       else tail = mid - 1 
//     }
//     return false
//   }
//   else {
//     // target 可能在后半段：
//     var head = 1, tail = nums.length - 1, mid
//     var head = 1, tail = nums.length - 1, mid
//     while(tail >= head) {
//       mid = (head + tail) >> 1
//       if(nums[mid] === target) return true
//       else head = mid + 1 
//     }
//     return false
//   }
// };
var search = function(nums, target) {
  if(nums[0] === target || nums[nums.length - 1] === target) return true
  var l = 0, r = nums.length  - 1, mid, head, tail
  // 把左右相等的元素去掉，保证左边第一段的第一个元素大于右边第二段的最后一个元素
  while(l < nums.length && nums[l] === nums[0]) l++
  while(r >= 0 && nums[r] === nums[0]) r--

  head = l, tail = r
  while(l <= r) {
    mid = (l + r) >> 1
    if(nums[mid] === target) return true
    // 在后半段：
    if(nums[mid] <= nums[tail]) {
      // target 在 mid 与 tail 之间
      if(target <= nums[tail] && target > nums[mid]) l = mid + 1
      // target 在 head 与 mid 之间  
      else r = mid - 1
    } 
    // 在前半段：
    else {
      // target 在 head 与 mid 之间：
      if(target < nums[mid] && target >= nums[head]) r = mid - 1
      // targt 在 mid 与 tail 之间   
      else l = mid + 1
    }
  }
  
  return false
};