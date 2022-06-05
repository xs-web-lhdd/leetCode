/**
 * @description 901-股票价格跨度
 * @author 氧化氢
 */

 var StockSpanner = function() {
  this.i = 0
  this.minS = [{
    i: this.i++,
    price: 1000000
  }]
};

/** 
* @param {number} price
* @return {number}
* @method 单调递减栈
*/
StockSpanner.prototype.next = function(price) {
  while(this.minS.length && price >= this.minS[this.minS.length-1].price) {
    this.minS.pop()
  }
  var ret = this.i - this.minS[this.minS.length-1].i
  this.minS.push({
    i: this.i++,
    price
  })

  return ret
};

/**
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/