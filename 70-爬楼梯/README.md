# 70 爬楼梯

采用递归方法会超时：
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 2) {
        return 1
    } else {
        return climbStairs(n-1) + climbStairs(n - 2)
    }
};
```
所以选择采用数组存储，但里面的操作一样，都是后面数等于前面两数字的和