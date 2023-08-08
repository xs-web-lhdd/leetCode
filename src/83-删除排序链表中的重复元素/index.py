# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        pre = head
        cur = head.next
        while cur:
            while cur and pre.val == cur.val:
                cur = cur.next
            if cur is None:
                break
            pre.next = cur
            pre = cur
            cur = cur.next
        pre.next = None

        return head
