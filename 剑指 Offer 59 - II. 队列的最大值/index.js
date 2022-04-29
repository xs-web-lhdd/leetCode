/**
 * @description 剑指 Offer 59 - II. 队列的最大值
 * @author 氧化氢
 */

// 维护一个最大值队列，这样每次返回最大值直接返回 maxQueue 的首元素即可，这样就能满足时间复杂度为 O(1)
 var MaxQueue = function() {
  // 设置队列：
  this.queue = []
  // 维护最大值的队列：
  this.maxQueue = []
};

/**
* @return {number}
*/
MaxQueue.prototype.max_value = function() {
  if(!this.maxQueue.length) return -1
  return this.maxQueue[0]
};

/** 
* @param {number} value
* @return {void}
*/
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value)
  // 注意这句里面 < 这个细节（为什么不是 <= ？见例子吧），这个细节对应着 39 行 这个判断条件
  while(this.maxQueue.length && this.maxQueue[this.maxQueue.length-1] < value) this.maxQueue.pop()
  this.maxQueue.push(value)
};

/**
* @return {number}
*/
MaxQueue.prototype.pop_front = function() {
  if(!this.queue.length) return -1
  // 易忽视的一步：如果出队的值正好和最大值队列的队首元素相等，那么在出队的同时，也把最大值队列的首元素出队
  if(this.queue[0] === this.maxQueue[0]) this.maxQueue.shift()
  return this.queue.shift()
};

/**
* Your MaxQueue object will be instantiated and called as such:
* var obj = new MaxQueue()
* var param_1 = obj.max_value()
* obj.push_back(value)
* var param_3 = obj.pop_front()
*/


/**
 * @example ["MaxQueue","push_back","push_back","pop_front","max_value","max_value"]
            [[],[2],[2],[],[],[]]
   如果是 <= 那么是 [null,null,null,2,-1,-1] 明显都不对！！！
解释：
   因为 第一个 2 被从 maxQueue 中删除了，所以 maxQueue 中只有 2 了，但队列中还有 [2,2]
   这样一旦 pop_front 那么 39 行代码执行，maxQueue 中 2 被删除，为空了，所以后面 max_value 是 -1,但实际 queue 中还有一个值 2，即 max_value 为 2
 */