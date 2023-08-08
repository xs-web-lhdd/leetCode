# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        hair = Node(-1, head)
        pre = hair
        cur = head
        while cur and cur.next:
            if cur.val != cur.next.val:
                pre = pre.next
                cur = cur.next
            else:
                while cur and cur.next and cur.val == cur.next.val:
                    cur = cur.next
                pre.next = cur.next
                cur = cur.next

        return hair.next


class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
