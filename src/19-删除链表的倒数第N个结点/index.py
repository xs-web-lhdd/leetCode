# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        hair = Node(-1, head)
        pre = hair
        cur = head
        for _ in range(n):
            cur = cur.next

        while 1:
            if cur is None:
                break
            pre = pre.next
            cur = cur.next

        pre.next = pre.next.next

        return hair.next


class Node:
    def __init__(self, val, next):
        self.val = val if val else 0
        self.next = next if next else None
