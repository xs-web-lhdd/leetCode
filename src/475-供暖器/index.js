/**
 * @description 475-供暖器
 * @author 氧化氢
 */

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @method 二分查找：
 * @solution 从每个位置开始遍历，找到每个位置距离最近的火炉（考虑每个位置可能前后各有一个火炉和有些位置可能只有后边有火炉前边没有和前边有火炉而后边没有的情况），然后进行比较即可，距离最大的设置为火炉半径，那么整个房间都可以被照暖
 */
 var findRadius = function(houses, heaters) {
  heaters.sort((a, b) => a - b)
  var ans = 0
  for(var item of houses) {
    // 去 hearts 中寻找第一个大于等于 item 的数组下标，如果没找到就返回最接近 item 的数组下标，其实就是为了找到距离 item 之后（可能相等）的第一个火炉的位置
    var j = binary_search(heaters, item)
    // 算出 火炉与item 之间的距离
    var a = Math.abs(heaters[j] - item)
    // 如果 j ? 为真，说明找到的火炉不是 heaters 中第一个火炉，那么 j - 1 的位置就是 item 位置前面的第一个火炉，那么 item - heaters[j - 1] 就是 item 与前一个火炉的距离
    // 如果 j ? 为假，说明 j 是 hearters 中第一个元素，也就是第一个火炉，那么 item 前面没有火炉了，那么 item 与最近火炉的位置就是 j 与 item 位置只差了，这里为了后续统一处理，设置为 a + 1
    var b = (j ? item - heaters[j - 1] : a + 1)
    // Math.min(a, b) 是 item 距离两端火炉距离的最小值，也就是 item 与离它最近火炉的距离
    // 因为返回的是半径，那么返回 item 距离火炉最大值作为半径，即可满足题意
    ans = Math.max(ans, Math.min(a, b))
  }

  return ans
};

// 二分查找的 01 模型
// 找到 nums 中第一个大于等于 target 的位置，如果都小于 target 那么返回的是 nums 中最接近 target 的数组下标
function binary_search(nums, target) {
  var head = 0, tail = nums.length - 1, mid
  while(head < tail) {
    mid = (head + tail) >> 1
    if(nums[mid] >= target) tail = mid
    else head = mid + 1
  }

  return head
}