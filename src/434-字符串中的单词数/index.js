/**
 * @description 434-字符串中的单词数
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function (s) {
  let count = 0;
  // 加上前导空格是为了简化后面的判断条件
  s = " " + s;
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " " && s[i - 1] == " ") count++;
  }
  return count;
};
