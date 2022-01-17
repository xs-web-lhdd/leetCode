var isValidSerialization = function(preorder) {
  var arr = preorder.split(',')
  var l = arr.length
  var stack = [1]
  var i = 0
  while(i < l) {
    if(!stack.length) return false 
    if(arr[i] === '#') {
      // 栈顶数字减一
      stack[stack.length - 1]--;
      if(stack[stack.length - 1] === 0) {
        stack.pop()
      }
      i++
    } else{
      // 有效数字情况
      stack[stack.length - 1]--;
      if(stack[stack.length - 1] === 0) {
        stack.pop()
      }
      stack.push(2)
      i++
    }
  }

  return !stack.length
};