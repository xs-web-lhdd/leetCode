####  本题用了三种解法：
**index.js**:
这种思路是判断一个数是不是 0，如果是 0，就截取下来放到数组末尾也就是`splice(index, 1) push`，注意这里不一定需要循环`nums.length` 次，只需要循环 0 的个数次就可以了m，时间复杂度太高 O(n ** 2)

**index1.js && index2.js**:
见代码吧，时间复杂度比较好 O(n)
链接：https://xiaochen1024.com/video?id=62861ab5ede03c002e46b248
