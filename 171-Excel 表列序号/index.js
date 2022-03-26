/**
 * @description 171-Excel 表列序号]
 * @author 氧化氢
 */

/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
  let ans = 0;
  for (const c of columnTitle) {
      ans = ans * 26 + (c.charCodeAt() - 64);
  }
  return ans;
};
