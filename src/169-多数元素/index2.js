/**
 * @description 169. 多数元素
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  var flag, count = 0
  for(var i = 0; i < nums.length; i++) {
      if(count === 0) flag = nums[i] 
           
      if(flag === nums[i]) count++
      else count--
  }

  return flag
};

// 返回的目标元素的数量一定多于数组中其他元素，所以找到元素最多的那个元素即可，也就是说 count 不会减到 0 的元素就是最终元素，被减到 0 的元素都是不合法的，那么把 flag 更换即可