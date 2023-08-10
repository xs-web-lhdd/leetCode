# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        length = lists.__len__()
        if length == 0:
            return None
        if length == 1:
            return lists[0]

        i = 1
        res = lists[0]
        while i < length:
            res = self.mergeTwoList(res, lists[i])
            i += 1

        return res

    def mergeTwoList(self, l1, l2):
        if not l1:
            return l2
        if not l2:
            return l1
        hair = ListNode(-1)
        cur = hair
        p = l1
        q = l2
        while p and q:
            if p.val <= q.val:
                cur.next = p
                p = p.next
            else:
                cur.next = q
                q = q.next
            cur = cur.next
        cur.next = q if q else p

        return hair.next
