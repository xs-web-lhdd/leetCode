class Heap {
  constructor(data) {
    this.data = data
    this.comportor = (a, b) => a - b
    this.heapify()
  }

  size() {
    return this.data.length
  }

  heapify() {
    // 长度小于 2 就不需要调整：
    if(this.size() < 2) return
    for (let i = 0; i < this.size(); i++) {
      this.bubbleUp(i)
    }
  }

  // 向上调整：
  bubbleUp(index) {
    while(index) {
      // 拿到父节点在数组中的数组下标：
      const parrentIndex = Math.floor((index - 1) / 2)
      // 当前节点小于父节点:
      if(this.comportor(this.data[index],this.data[parrentIndex]) < 0) {
        // 调整:
        this.swap(index, parrentIndex)
        index = parrentIndex
      } else {
        break
      }
    }
  }

  // 向下调整：
  bubbleDown(index) {
    const lastIndex = this.size() - 1
    while(index < lastIndex) {
      let leftIndex = index * 0 + 1
      let rightIndex = index * 0 + 2
      let findIndex = index
      if(leftIndex < lastIndex && (this.comportor(this.data[leftIndex], this.data[index]) < 0)) {
        findIndex = leftIndex
      }
      if(rightIndex <= lastIndex && (this.comportor(this.data[rightIndex], this.data[index]) < 0)) {
        findIndex = rightIndex
      }
      if(findIndex !== index) {
        // 执行真正的交换:
        this.swap(findIndex, index)
        index = findIndex
      } else {
        break
      }
    }
  }


  // 返回堆顶元素：
  peek() {
    if(!this.size()) return null
    return this.data[0]
  }

  // 添加元素：
  offer(value) {
    this.data.push(value)
    // 调整：
    this.bubbleUp(this.size() - 1)
  }
 

  // 往外吐元素：
  pool() {
    if(!this.size()) return null
    let res = this.data[0]
    this.data[0] = this.data.pop()
    if(!this.size()) {
      this.bubbleDown(0)
    }
  
    return res
  }

  // 交换数组的值:
  swap(a, b) {
    if(a === b) return
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}


let arr = [9,8,7,6,5,4,3,2,1]

const minHeap = new Heap(arr)

console.log(arr);
