/**
 * @description 9-回文数
 * @author 氧化氢
 */

/**
 * @param {number} x
 * @return {boolean}
 * @solution 数字法
 */
 var isPalindrome = function(x) {
  var p = x;
  if(x<0){return false;}
  else if(x === 0){return true;}
  else{
              var s = 0;
      while(x !== 0){
          s = s*10 + (x%10);
          x = x/10 | 0 ;
      }
  }
  return s === p;
};

export default isPalindrome