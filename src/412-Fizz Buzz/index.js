/**
 * @description 412-Fizz Buzz
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
  var ans = []
  for(var i = 1; i <= n; i++) {
      if(isThree(i)) ans.push('Fizz')
      else if(isFive(i)) ans.push('Buzz')
      else if(isThreeAndFive(i)) ans.push('FizzBuzz')
      else ans.push(String(i))
  }

  return ans
};

function isThree(n) {
  return (n % 3 === 0) && (n % 5)
}

function isFive(n) {
  return (n % 3) && (n % 5 === 0)
}

function isThreeAndFive(n) {
  return (n % 3 === 0) && (n % 5 === 0)
}