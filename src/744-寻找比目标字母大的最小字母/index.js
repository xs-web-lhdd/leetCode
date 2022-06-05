/**
 * @description 744-寻找比目标字母大的最小字母
 * @author 氧化氢
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  for(var i = 0; i < letters.length; i++) {
      if(letters[i].charCodeAt() > target.charCodeAt()) return letters[i]
  }

  return letters[0]
};
