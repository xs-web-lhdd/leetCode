/**
 * @description 128-最长连续序列
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function (nums) {
  // 把题目中数组的数字全部放入set中，一来去重，二来方便快速查找
  const set = new Set(nums);
  let max = 0;
  for (let a of nums) {
    // 没有左邻居，是序列的起点
    if (!set.has(a - 1)) {
      let count = 1;
      let cur = a;
      // 有右邻居，看连续的右邻居有多少个
      while (set.has(cur + 1)) {
        cur++;
        count++;
      }
      // 存放最大的连续邻居的值
      max = Math.max(max, count);
    }
  }
  return max;
};
