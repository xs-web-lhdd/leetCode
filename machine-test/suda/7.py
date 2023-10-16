"""
题目：
给你一个链表，求出链表中元素后四位重复的元素，然后将这些元素构造成一个新链表返回
例子：
题目给的链表：12345678 -> 234456545 -> 1325678 -> 343234342 -> 3226545 -> 13 -> 13
那么构造的链表就是：5678 -> 6545 -> 13
"""


class Node:
    def __init__(self, data, next):
        self.data = data
        self.next = next


class Solution:
    def __init__(self):
        self.pre = None(-1)

    def getList(self, list):
        p = self.pre
        for item in list:
            p.next = Node(item)
            p = p.next

        return self.pre.next

    def getInfo(self):
        link = self.getList()
        pass
