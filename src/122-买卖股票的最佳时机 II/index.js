/**
 * @description 122-买卖股票的最佳时机 II
 * @author 氧化氢
 */

/**
 * @param {number[]} prices
 * @return {number}
 * @solution 这题属于脑筋急转弯类型了，只要后一项比前一项大，股票都是可以出手的，都是稳赚的，所以只需要比较后一项是否比前一项大即可
 */
 var maxProfit = function(prices) {
  var upOrDown = []
  for(var i = 0; i < prices.length - 1; i++) {
    if(prices[i+1] - prices[i] > 0) upOrDown[i] = 1
    else upOrDown[i] = 0
  }

  var ans = 0
  for(var i = 0; i < upOrDown.length; i++) {
    if(upOrDown[i]) {
      ans += (prices[i + 1] - prices[i])
    }
  }

  return ans
};

export default maxProfit