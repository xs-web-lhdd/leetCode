# 61 旋转链表

`index2.js`是`index.js`的清晰版，
`index2.js`的思想是先找头节点，然后再循环一遍链表找尾节点，然后让尾节点指向`null`
`index3.js`是先找尾节点，然后尾节点下一个赋值为头节点，之后把尾节点下一个指向`null`