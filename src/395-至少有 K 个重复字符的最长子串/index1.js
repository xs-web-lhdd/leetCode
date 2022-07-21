/**
 * @description 395-至少有 K 个重复字符的最长子串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * @solution 分治 + 递归
 */
var longestSubstringTwo = function (s, k) {
  var map = new Map()
  for (var i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
  }

  var splits = []
  // 将次数少于 k 的字母均当作虚拟分割点
  for (var i = 0; i < s.length; i++) {
    if (map.get(s[i]) < k) splits.push(i)
  }
  // 虚拟分割点
  splits.push(s.length)

  // 当 splits 中只有一个元素（就是加的那个虚拟分割点）的时候说明 此时进行的字符串是满足每个字母数量都大于等于 k 的条件的，返回 字符串的长度即可
  if (splits.length === 1) return ans = splits[0]

  var pre = 0,
    ans = 0
  for (var item of splits) {
    var str = s.slice(pre, item)

    if (str.length >= k) {
      ans = Math.max(ans, longestSubstringTwo(str, k))
    }

    pre = item + 1
  }

  return ans
};

export {
  longestSubstringTwo
}