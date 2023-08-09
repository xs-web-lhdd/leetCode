# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        if not headA or not headB:
            return None
        a = headA
        b = headB
        l1 = a
        l2 = b
        while l1 != l2:
            l1 = b if not l1 else l1.next
            l2 = a if not l2 else l2.next

        return l1
