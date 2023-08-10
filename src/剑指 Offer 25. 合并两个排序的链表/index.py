# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1:
            return l2
        if not l2:
            return l1
        p = l1
        q = l2
        hair = ListNode()
        cur = hair
        while p and q:
            if p.val <= q.val:
                cur.next = p
                p = p.next
            else:
                cur.next = q
                q = q.next
            cur = cur.next
        cur.next = p if p else q

        return hair.next
