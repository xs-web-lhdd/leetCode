/**
 * @description 33-搜索旋转排序数组
 * @author 氧化氢
 */


 var search = function(nums, target) {
  //分别从数组的两侧开始搜索
  let left=0
  let right=nums.length-1
  if(nums.length==1){
      if(nums[0]==target)
      return 0
      else return -1
  }
  while(left<right){
      if(target<nums[left]&&target>nums[right]){
          return -1
      }
      if(target==nums[left]){
          return left
      }else if(target==nums[right]){
          return right
      }else if(left<right&&target<nums[right]){
          right--
          //大于最左边的，向左找
      }else if(left<right&&target>nums[left]){
          left++
          //小于最右边的，向右找
      }
  }
  return -1
};
