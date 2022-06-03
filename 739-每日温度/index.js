/**
 * @description 739-每日温度
 * @author 氧化氢
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 * @solution 看代码就知道答案,常规写法,没有用到算法 单调栈 的思想
 */
 var dailyTemperatures = function(temperatures) {
  var ret = new Array(temperatures.length).fill(0)

  for(var i = 0; i < temperatures.length; i++) {
    for(var j = i+1; j < temperatures.length; j++) {
      if(temperatures[j] > temperatures[i]) {
        ret[i] = j - i
        break
      }
    }
  }

  return ret
};


// -----------------------------------------------------------------------------------------------------------------------------------------


/**
 * @param {number[]} temperatures
 * @return {number[]}
 * @method 用单调栈来解决,嘎嘎快!
 * @solution 用单调递减栈,如果 i 大于栈顶元素,说明下标 i 的元素是下标是栈顶的元素的目标值
 */
 var dailyTemperatures = function(temperatures) {
  var ret = new Array(temperatures.length).fill(0)
  var stack = []
  for(var i = 0; i < temperatures.length; i++) {
    while(stack.length && temperatures[stack[stack.length-1]] < temperatures[i]) {
      ret[stack[stack.length-1]] = i - stack[stack.length-1]
      stack.pop()
    }
    stack.push(i)
  }

  return ret
};

