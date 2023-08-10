# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        hair = ListNode(-99999999, head)
        pre = hair
        cur = head
        while cur:
            if cur.val == val:
                pre.next = cur.next
                break
            else:
                pre = pre.next
                cur = cur.next

        return hair.next
