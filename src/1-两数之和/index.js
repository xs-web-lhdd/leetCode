/**
 * @description 1-两数之和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 方法一: 通过排序加双指针：先找到目标的两个数，然后再从原数组中找到下标即可（切记一个从前找，一个从后找，因为像 [2,2] 4 这种情况如果都从前找必然不对）
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

// 方法二: 通过哈希表的形式，还是比较巧妙地，不用多解释，直接看代码就懂了！！！
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

// 方法三：排序加二分
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @method 排序加二分
 */
 var twoSum = function (nums, target) {
  var arr = new Array(nums.length)
  for(var i = 0; i < nums.length; i++) arr[i] = [i]
  // 对下标数组进行排序,排序后的下标对应的原数组的值是升序的
  arr.sort((a, b) => nums[a] - nums[b])

  var ans = []
  for(var i = 0; i < arr.length; i++) {
    // 目前的值
    var value = nums[arr[i]]
    var j = binary_search(nums, arr, i+1, target-value)
    // 没找到就 continue
    if(j === -1) continue
    // 找到了就去 arr 中找到对应的数组真实下标:
    var a = arr[i]
    var b = arr[j]
    ans[0] = a
    ans[1] = b
  }

  return ans
};

/**
 * @method 无脑二分
 * @param {*} nums 原数组
 * @param {*} arr 排序过的下标数组
 * @param {*} key 开始查找的位置
 * @param {*} res 查找的值
 */
function binary_search(nums, arr, head, res) {
  var tail = nums.length - 1, mid
  while (head <= tail) {
    mid = (tail + head) >> 1
    if(nums[arr[mid]] === res) return mid
    else if(nums[arr[mid]] < res) head = mid + 1
    else tail = mid - 1
  }

  return -1
}