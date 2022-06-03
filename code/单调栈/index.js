/**
 * @description 单调栈 js 代码演示
 * @sulution 解决距离 x 后面（前面）最近的最小值或最大值的问题
 * @author 氧化氢
 */

// 找到前面 和 后面 分别别当前元素小的元素下标，前面找不到是 -1，后面找不到是 *
function minMonotonicStack(arr) {
  var stack = []
  var pre = [], next = []

  for(var i = 0; i < arr.length; i++) {
    while(stack.length && arr[i] < arr[stack[stack.length - 1]]) {
      next[stack[stack.length - 1]] = i
      stack.pop()
    }

    if(!stack.length) pre[i] = -1
    else pre[i] = stack[stack.length - 1]
    stack.push(i)
  }

  while(stack.length) next[stack[stack.length - 1]] = '*', stack.pop()

  console.log('后面 / 前面 最小值下标的问题：');
  console.log('arr --->>>', arr);
  console.log('next --->>>', next);
  console.log('pre --->>>', pre);
  console.log('-------------------------------------------------');
}


minMonotonicStack([6,7,9,0,8,3,4,5,2])




// 找到前面 和 后面 分别别当前元素小的元素下标，前面找不到是 -1，后面找不到是 *
function maxMonotonicStack(arr) {
  var stack = []
  var pre = [], next = []

  for(var i = 0; i < arr.length; i++) {
    while(stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      next[stack[stack.length - 1]] = i
      stack.pop()
    }

    if(!stack.length) pre[i] = -1
    else pre[i] = stack[stack.length - 1]
    stack.push(i)
  }

  while(stack.length) next[stack[stack.length - 1]] = '*', stack.pop()

  console.log('后面 / 前面 最大值下标的问题：');
  console.log('arr --->>>', arr);
  console.log('next --->>>', next);
  console.log('pre --->>>', pre);
  console.log('-------------------------------------------------');
}


maxMonotonicStack([6,7,9,0,8,3,4,5,2])