/**
 * @description 
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  while(s.includes(' ')) {
     s = s.replace(' ', '%20')
  }
  return s
};