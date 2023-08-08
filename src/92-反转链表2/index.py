# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if not head:
            return head
        hair = Node(-1, head)
        pre = hair
        cnt = right - left + 1
        left = left - 1
        while left > 0:
            left -= 1
            pre = pre.next
        pre.next = self.reverseListNode(pre.next, cnt)

        return hair.next

    def reverseListNode(self, head, length):
        pre = None
        cur = head
        while length:
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
            length -= 1
        head.next = cur

        return pre

    # def listNode(self, val, next):
    #     self.val = val if val != None else 0
    #     self.next = next if next != None else None


class Node:
    def __init__(self, val=0, next=None):
        self.val = val if val != None else 0
        self.next = next if next != None else None
