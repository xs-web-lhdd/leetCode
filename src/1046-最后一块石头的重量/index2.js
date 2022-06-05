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
    heapSort(stones)
    first = stones[stones.length - 1]
    second = stones[stones.length - 2]
    if(first === second) {
      stones.pop()
      stones.pop()
    } else {
      stones.pop()
      stones.pop()
      stones.push(first - second)
    }
  }

  return stones[0] ? stones[0] : 0
};

function heapSort(arr) {
  buildMaxHeap(arr)
  for(var i = arr.length-1; i > 0; i--) {
      swap(arr, 0, i)
      adjustMaxHeap(arr, 0, i)
  }

  return arr
}

function buildMaxHeap(arr) {
  let length = arr.length
  let endRoot = Math.floor(length / 2) - 1
  for(var i = endRoot; i >= 0; i--) {
      adjustMaxHeap(arr, i, length)
  }
}

function adjustMaxHeap(arr, index, heapSize) {
  let iMax, left, right
  while(true) {
      iMax = index
      left = index * 2 + 1
      right = index * 2 + 2
      if(arr[iMax] < arr[left] && left < heapSize) iMax = left
      if(arr[iMax] < arr[right] && right < heapSize) iMax = right
      if(iMax !== index) {
          swap(arr, iMax, index)
          index = iMax
      } else {
          break
      }
  }
}

function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]]
}