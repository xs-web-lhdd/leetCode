/**
 * @deprecated 剑指 Offer 40. 最小的k个数
 * @author 氧化氢
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 自己手写堆排序进行处理：这才是我想要的呀！！！
var getLeastNumbers = function(arr, k) {
  heapSort(arr)

  return arr.slice(0, k)
}


function heapSort(arr) {
  buildMaxHeap(arr)
  for(var i = arr.length-1; i > 0; i--) {
      swap(arr, 0, i)
      adjustMaxHeap(arr, 0, i)
  }
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
      left = iMax * 2 + 1
      right = iMax * 2 + 2
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

