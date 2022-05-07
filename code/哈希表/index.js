/**
 * @description 哈希表的动态演示环节 - 还 TM 的有问题
 */


class HashTable {
  constructor() {
    this.count = 1,
    this.data = new Array(100)
    // 标志每个位置是否存储了数据，没存就是 false .存过就是 true
    this.flag = new Array(this.data.length)
  }

  // 存入操作：
  insert(s) {
    // 计算哈希值：
    var index = this.hash_func(s) % this.data.length
    // 冲突处理：
    this.recalc_ind(index, s)
    // 把数据 s 存储到 index 中
    this.data[index] = s
    this.flag[index] = true
    return
  }

  // 查询操作：
  find(s) {
    // 计算哈希值：
    var index = this.hash_func(s) % this.data.length
    console.log('打印哈希值：', index)
    // 冲突处理：
    this.recalc_ind(index, s)

    return this.flag[index]
  }

  // 计算哈希值：返回一个整形 字符串 --->>> 整形
  hash_func(s) {
    var seed = 131, hash = 0
    for(var i = 0; s[i]; i++) {
      hash = hash * seed + s[i]
    }
    
    return hash
  }

  // 处理冲突：
  recalc_ind(index, s) {
    var t = 1
    // 当前位置存储了数据，并且存入的数据不等于之前的数据那么就进行开放定址法进行处理冲突
    while(this.flag[index] && this.data[index] !== s) {
      index += t * t
      t += 1
      index %= this.data.length
    }

    return
  }
} 


var hash = new HashTable()


console.log('打印哈希表：', hash.data);

hash.insert("hello world")
hash.insert("H2O")
hash.insert("CS")

console.log('查找HO', hash.find('HO'));
console.log('查找 H2O', hash.find('H2O'));

console.log('打印哈希表：', hash.data);