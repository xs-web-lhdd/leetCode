# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        if not head:
            return head
        hair = ListNode(-1, head)
        pre = hair
        cur = head
        while cur:
            if cur.val == val:
                pre.next = cur.next
                cur = cur.next
            else:
                cur = cur.next
                pre = pre.next

        return hair.next
