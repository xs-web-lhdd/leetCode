/**
 * @description 6093. 设计一个文本编辑器
 * @author 氧化氢
 */

// 题目链接：https://leetcode.cn/problems/design-a-text-editor/

var TextEditor = function() {
  this.left = ""
  this.right = ''
};

/** 
* @param {string} text
* @return {void}
*/
TextEditor.prototype.addText = function(text) {
  this.left += text
};

/** 
* @param {number} k
* @return {number}
*/
TextEditor.prototype.deleteText = function(k) {
  if(k >= this.left.length) {
      var length = this.left.length
      this.left = ''
      return length
  }
  else {
      this.left = this.left.slice(0, this.left.length - k)
      return k
  }
};

/** 
* @param {number} k
* @return {string}
*/
TextEditor.prototype.cursorLeft = function(k) {
  if(this.left.length <= k) {
      this.right = this.left + this.right
      this.left = ''
      return ''
  }
  else {
      this.right = this.left.slice(-k) + this.right
      this.left = this.left.slice(0, this.left.length - k)

      if(this.left.length >= 10) return this.left.slice(-10)
      return this.left
  }
};

/** 
* @param {number} k
* @return {string}
*/
TextEditor.prototype.cursorRight = function(k) {
  if(this.right.length <= k) {
      this.left += this.right
      this.right = ''

      if(this.left.length >= 10) return this.left.slice(-10)

      return this.left
  }
  else {
      var str = this.right.slice(0, k)
      this.right = this.right.slice(k)
      this.left += str

      if(this.left.length >= 10) return this.left.slice(-10)

      return this.left
  }
};

/**
* Your TextEditor object will be instantiated and called as such:
* var obj = new TextEditor()
* obj.addText(text)
* var param_2 = obj.deleteText(k)
* var param_3 = obj.cursorLeft(k)
* var param_4 = obj.cursorRight(k)
*/