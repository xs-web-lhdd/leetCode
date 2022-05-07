/**
 * @description 706-设计哈希映射
 * @author 氧化氢
 */

 var MyHashMap = function() {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

MyHashMap.prototype.put = function(key, value) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
      if (it[0] === key) {
          it[1] = value;
          return;
      }
  }
  this.data[h].push([key, value]);
};

MyHashMap.prototype.get = function(key) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
      if (it[0] === key) {
          return it[1];
      }
  }
  return -1;
};

MyHashMap.prototype.remove = function(key) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
      if (it[0] === key) {
          const idx = this.data[h].indexOf(it);
          this.data[h].splice(idx, 1);
          return;
      }
  }
};

MyHashMap.prototype.hash = function(key) {
  return key % this.BASE;
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */