/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
  // 方法一：
  // return Math.min.apply(numbers, numbers)
  
  // 方法二：
  for(var i = 0; i < numbers.length; i++) {
      if(numbers[i] < numbers[0]) return numbers[i]
  }
  return numbers[0]
};