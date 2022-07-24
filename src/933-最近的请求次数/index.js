/**
 * @description 933 最近的请求次数
 * @author 氧化氢
 */

var RecentCounter = function () {
  this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)
  while (this.queue[0] < t - 3000) {
    this.queue.shift()
  }
  return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

export default RecentCounter