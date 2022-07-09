/**
 * @description 322-零钱兑换
 * @author 氧化氢
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * @soluion kkb
 */
 var coinChange = function(coins, amount) {
  // arr 存的是每个钱数的用的硬币的最小个数
  var arr = new Array(amount+1).fill(-1)
  // 边界情况处理，0 面额 0 个硬币
  arr[0] = 0
  
  for(var i = 1; i <= amount; i++) {
      for(var val of coins) {
          if(i < val) continue
          // 如果零钱面额为 i - val 不存在兑换方式，直接跳过为后面找到最少硬币做铺垫
          if(arr[i - val] === -1) continue
          // 如果当前面额还没存过兑换方案的硬币个数或者当前方案用的硬币个数小于之前方案的硬币个数就更新最小的硬币个数存进去
          if(arr[i] === -1 || arr[i - val] + 1 < arr[i]) arr[i] = arr[i - val] + 1
      }
  }

  return arr[amount]
};

export default coinChange