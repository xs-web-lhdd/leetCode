/**
 * @description 503-下一个更大元素 II
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * @method 最近大于关系，通过单调递减栈解决
 */
 var nextGreaterElements = function(nums) {
  var arr = nums.slice()
  // 把像 [1,2,3,4,3] 这样的 nums 变成 [1,2,3,4,3,1,2,3,4,3] 这样，这样搜索一次就能解决题中循环搜索的问题
  // 通过复制两变,来模拟循环 --- 小技巧:
  nums = nums.concat(arr)
  var stack = []
  // 存储结果的数组：
  var ret = new Array(nums.length)

  for(var i = 0; i < nums.length; i++) {
    while(stack.length && nums[stack[stack.length-1]] < nums[i]) {
      ret[stack[stack.length-1]] = nums[i]
      stack.pop()
    }
    // 栈中存的数组下标：
    stack.push(i)
  }

  // 没出栈的就是后面没有比它大的元素的下标,这样在 ret 中填充为 -1 即可
  while(stack.length) ret[stack[stack.length - 1]] = -1, stack.pop()


  return ret.slice(0, arr.length)
};