/**
 * @deprecated 堆排序模板
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // 整个流程就是上浮下沉
 var findKthLargest = function(nums, k) {
  let heapSize=nums.length
   buildMaxHeap(nums,heapSize) // 构建好了一个大顶堆
   // 进行下沉 大顶堆是最大元素下沉到末尾
   for(let i=nums.length-1;i>=nums.length-k+1;i--){
       swap(nums,0,i)
       --heapSize // 下沉后的元素不参与到大顶堆的调整
       // 重新调整大顶堆
        maxHeapify(nums, 0, heapSize);
   }
   return nums[0]
  // 自下而上构建一颗大顶堆
  function buildMaxHeap(nums,heapSize){
    for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
      maxHeapify(nums,i,heapSize)
    }
  }
  // 从左向右，自上而下的调整节点，变成一个大根堆
  function maxHeapify(nums,i,heapSize){
    let l=i*2+1
    let r=i*2+2
    let largest=i
    if(l < heapSize && nums[l] > nums[largest]){
      largest=l
    }
    if(r < heapSize && nums[r] > nums[largest]){
      largest=r
    }
    if(largest!==i){
      // 将最大节点调整到根节点的位置：
      swap(nums,i,largest)
      // 继续调整下面的非叶子节点
      maxHeapify(nums,largest,heapSize)
    }
  }
  // 交换 i j 在数组 arr 中的位置
  function swap(arr,  i,  j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};