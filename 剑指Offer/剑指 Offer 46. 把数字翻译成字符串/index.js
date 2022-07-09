/**
 * @description 剑指 Offer 46. 把数字翻译成字符串
 * @author 氧化氢
 */

/**
 * @param {number} num
 * @return {number}
 */
 var translateNum = function(num) {
  var str = String(num)
  var arr = new Array(str.length).fill(0)
  // 初始化第一个为 1
  arr.unshift(1)
  arr.pop()

 for(var i = 1; i < str.length; i++) {
   arr[i] = arr[i-1]
   // 如果当前字母和前一个字母合起来是可以换成 a - z 中的一个，那么就进行处理
   var preNum = Number(str[i-1]) * 10 + Number(str[i])
   if(preNum >= 10 && preNum <= 25) {
       if(arr[i - 2]) arr[i] += arr[i - 2]
       // 12 这种分支，也就是 i 为 1，i - 2 不存在的情况
       else arr[i] += 1
   }
 }

 return arr[arr.length - 1]
};

export default translateNum