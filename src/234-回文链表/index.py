# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        if not head or not head.next:
            return True
        arr = []
        cur = head
        while cur:
            arr.append(cur.val)
            cur = cur.next

        i = 0
        j = arr.__len__() - 1
        while i <= j:
            if arr[i] != arr[j]:
                return False
            i += 1
            j -= 1

        return True
