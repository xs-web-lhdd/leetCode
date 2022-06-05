/**
 * @description 367-有效的完全平方数
 * @author 氧化氢
 */

 var isPerfectSquare = function(num) {
  let i = 1;
  while(i*i <= num) {
      if(i*i === num) {
          return true;
      }

      i++;
  }
  return false;
};