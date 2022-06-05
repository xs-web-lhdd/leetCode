/**
 * @description 239 滑动窗口最大值
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @method 这是本题的常规想法 --- 比较易想到
 */
// 双重循环：
 var maxSlidingWindow = function(nums, k) {
  const arr = []
  for(var i = 0; i < nums.length; i++) {
    if(i + k > nums.length) break
    let max = nums[i]
    for(var j = i + 1; j < i + k; j++) {
      if(nums[j] > max) max = nums[j]
    }
    arr.push(max)
  }

  return arr
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 单调队列模板：
var maxSlidingWindow = function(nums, k) {
  const queue = [], ret = []
  for(var i = 0; i < nums.length; i++) {
    //  最大值必须是单调递减的队列：
    while(queue.length && nums[queue[queue.length-1]] < nums[i]) queue.pop()
    queue.push(i)
    // 队满就出队：
    if(i - queue[0] === k) queue.shift()
    // 刚开始不满 k 个元素，就不要往 ret 里面添加元素了：
    if(i + 1 < k) continue
    ret.push(nums[queue[0]])
  }

  return ret
};