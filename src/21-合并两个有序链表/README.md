# 21 合并两个有序链表

`index.js`中先进行一个简单的判断，如果l1是空那么直接返回l2，如果l2是空那么直接返回l1，如果两者都存在，那么把两者的值都循环到一个数组里面，然后把数组中的值进行按升序进行排序，然后按数组的顺序生成一个新的链表返回即可