# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        hair = Node(-1)
        cur = hair
        top = l1
        down = l2
        flag = 0
        while top or down or flag:
            n1 = top.val if top else 0
            n2 = down.val if down else 0
            sum = n1 + n2 + flag
            if sum >= 10:
                num = sum - 10
                flag = 1
            else:
                num = sum
                flag = 0

            cur.next = ListNode(num)
            cur = cur.next

            if top:
                top = top.next
            if down:
                down = down.next

        return hair.next


class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
