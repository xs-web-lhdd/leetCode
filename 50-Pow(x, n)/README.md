# 50-Pow(x, n)

刚开始想通过递归刷，但是后来发现爆栈了，于是通过奇数偶数来降低调用次数，所以有了
```js
  if(n % 2) {
      return x * myPow(x, n -1)
  } else {
      return myPow(x*x, n / 2)
  }
```
这写法