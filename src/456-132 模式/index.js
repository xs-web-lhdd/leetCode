/**
 * @description 456-132 模式
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 * 时间复杂度过高，过不去！！！
 */
 var find132pattern = function(nums) {
  for(var i = 0; i < nums.length; i++) {
    var lMin = Math.min.apply(null, nums.slice(0, i))
    if(lMin >= nums[i]) continue

    // 对后面进行二分查找：
    // for(var j = i+1; j < nums.length; j++) {
    //   if(nums[j] > lMin && nums[j] < nums[i]) return true
    // }
    var arr = nums.slice(i+1).sort((a, b) => a - b)
    var l = 0, r = arr.length-1
    var mid
    while(r - l > 3) {
      mid = Math.floor((l + r) / 2)
      if(arr[mid] > lMin && arr[mid] < nums[i]) return true
      if(arr[mid] >= nums[i]) r = mid - 1
      if(arr[mid] <= lMin) l = mid + 1
    }

    for(var j = l; j <=r; j++) {
      if(arr[j] > lMin && arr[j] < nums[i]) return true
    }

  }

  return false
};

