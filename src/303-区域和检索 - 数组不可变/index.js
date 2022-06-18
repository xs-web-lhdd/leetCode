/**
 * @description 303-区域和检索 - 数组不可变
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
  this.preArr = [0]
  for(var i = 0; i < nums.length; i++) {
      this.preArr[i+1] = this.preArr[i] + nums[i]
  }
  console.log(this.preArr)
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  return this.preArr[right+1] - this.preArr[left]
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/

export default NumArray