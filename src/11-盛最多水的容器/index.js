/**
 * @description 11. 盛最多水的容器
 * @author 氧化氢
 */

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  var ans = 0
  for(var i = 0, j = height.length - 1; i < j; ) {
      ans = Math.max(ans, (j - i) * Math.min(height[i], height[j]))
      if(height[i] < height[j]) i++
      else j--
  }

  return ans
};

export default maxArea