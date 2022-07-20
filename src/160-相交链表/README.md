# 160 相交链表
这个题目有点细节：
大家观察一下一下两种代码：
```js
// 写法一：
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    var p = headA, q = headB
    while(p !== q) {
        p = p === null ? headB : p.next
        q = q === null ? headA : q.next
    }

    return p
};
```
```js
// 写法二：
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    var p = headA, q = headB
    while(p !== q) {
        p = p.next ? p.next : headB
        q = q.next ? q.next : headA
    }

    return p
};
```
仔细对比上面两种写法，也就是发现第一种写法中链表末尾多了一个 null ,这也就是第一种写法的精妙之处，如果没有 null ，
也就是第二种写法，那么最终两个没有相交节点的链表会形成死循环，然后超时，因为我们知道，如果两个链表相交，那么走 l1 的长度和 l2 的长度之和就是它们相交的节点，这必然在两个链表都走到 null 之前，所以如果有交点那么必然会返回交点，如果没交点那么 l1 走 l2 * l1 步，l2 走 l1 * l2 步，他们必然相交在 null，这样也是可以返回相交值得 null，也是符合题意的