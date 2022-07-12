/**
 * @description 3. 无重复字符的最长子串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 * @solution leetcode 究极班
 */
var lengthOfLongestSubstring = function (s) {
  var ans = 0
  var map = new Map()
  // j 只会往后增，不会往前减，因为如果往前减会有重复字母，所以只会往后增或者不变
  var j = 0
  for (var i = 0; i < s.length; i++) {
    // 将 s[i] 放入哈希表中：
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1)
    else map.set(s[i], 1)

    // 如果新字母放进去正好重复，那j就往前走，直到找到重复字母从哈希表中去处为止：
    while (map.get(s[i]) > 1) {
      map.set(s[j], map.get(s[j]) - 1)
      j++
    }

    ans = Math.max(ans, i - j + 1)
  }

  return ans
};

export default lengthOfLongestSubstring