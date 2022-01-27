/**
 * @deprecated 1046 后一块石头的重量
 * @author氧化氢
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  var first, second
  while(stones.length > 1) {
    stones.sort((x, y) => y - x)
    first = stones[0]
    second = stones[1]
    if(first === second) {
      stones.shift()
      stones.shift()
    } else {
      stones.shift()
      stones.shift()
      stones.push(first - second)
    }
  }

  return stones[0] ? stones[0] : 0
};