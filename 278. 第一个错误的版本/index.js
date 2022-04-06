/**
 * @description 278. 第一个错误的版本
 * @author 氧化氢
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      for(var i = 1, j = n; i < j; ) {
          if(isBadVersion(j) && !isBadVersion(j-1)) return j
          var mid =  Math.floor((i+j)/2)
          if(isBadVersion(mid)) {
              j = mid 
          } else {
              i = mid + 1
          }
          if(isBadVersion(mid) && !isBadVersion(mid-1)) return mid
      }

      return i
  };
};