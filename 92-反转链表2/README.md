# 92、反转链表2

题目地址：https://leetcode-cn.com/problems/reverse-linked-list-ii/


这题比206-反转链表要复杂一点,但也没复杂多少
思路是:先让left与right之间的链表进行反转(包括left和right),然后让原本left之前的节点指向right,left节点指向原本right之后的节点

#### 下面见代码分析:
`reverseList`函数的作用是将left与right之间的节点进行反转(包括left和right),然后将left下一个节点指向right的下一个节点,并将right作为头节点返回,在`reverseBetween`中先通过`while`循环拿到left的前一个节点,然后将left前一个节点的next指向`reverseList`返回的节点,到此,题目结束
