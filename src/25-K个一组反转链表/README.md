# 25 K一组反转链表

### 含泪写了一小时,我是废物!!!

`reverseList`作用是先判断传进来的头节点后面够不够 length 个节点,如果不够则直接将 head 节点返回,不进行反转,如果够 length个节点,则执行链表的反转操作,并将反转后的链表的头节点返回,`hair = new ListNode(-1, head)`是创建一个虚拟头节点,
```js
    for(let i = 0; i < k && pre; i++) {
      pre = pre.next
    }
    if(!pre) break
```
上面作用是如果`reverseList`中头节点后面够 length 个节点那么把pre指针往后移动,执行下一组的 k个节点反转,如果不够那么执行上面那段代码就会跳出循环,然后`return hair.next`程序结束