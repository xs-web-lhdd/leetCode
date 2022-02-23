/**
 * @description 76-最小覆盖子串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  var tL = t.length
  if(s.length < tL) return ""
  // 统计 t 中每个字母的数量
  var tMap = new Map()
  for(var i = 0; i < tL; i++) {
    if(tMap.get(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1)
    } else {
      tMap.set(t[i], 1)
    }
  }

  // 窗口的大小从 t 的长度开始,如果用 t 的长度大小的窗口滑动一遍没有找到对应字符串就将窗口的大小加一, 最大窗口大小与s长度相等
  for(var i = tL; i <= s.length; i++) {
    if(window(i, s, tMap)) break
  }
  
  return window(i, s, tMap) ? s.slice(...window(i, s, tMap)) : ""
};

function window(length, s, tMap) {
  // 如果当前窗口不匹配 t,那就把窗口往后移动一位,直到移动到 s 末尾
  for(var i = 0; i < s.length - length + 1; i++) {
    // 拿到 length 大的窗口，然后统计其中的字母数量
    let map = new Map()
    for(var j = i; j < i + length; j++) {
      if(map.get(s[j])) {
        map.set(s[j], map.get(s[j]) + 1)
      } else {
        map.set(s[j], 1)
      }
    }
    // 判断是否包含，包含就返回在s中的起始喝末尾下标：
    if(isSubstring(map, tMap)) {
      return [i, i+length]
    }
  }
  return false
}

// 比较 s 中是否包含 t，包含就是 t 中的字母，s也有，并且数量是大于等于的关系
var isSubstring = function (sMap, tMap) {
  for (const key of tMap.keys()) {
    if ((sMap.get(key) || 0) < tMap.get(key)) return false;
  }
  return true;
}; 