讲解代码中 
/** 位运算中 异或 模型
  a = a ^ b
  b = a ^ b
  a = a ^ b
*/
```js
这里面令 a = a ^ b
在 异或 中 已知：a ^ a = 0  和  a ^ 0 = a 这两条定律

b = a ^ b = a ^ b ^ b = a ^ 0 = a
a = a ^ b = a ^ b ^ a = a ^ a ^ b = 0 ^ b = b

```