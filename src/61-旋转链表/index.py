# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or k == 0:
            return head
        length = 0
        cur = head
        end = None
        while cur:
            length += 1
            if cur.next is None:
                end = cur
            cur = cur.next
        # 头尾相连
        end.next = head
        step_length = length - k % length

        while step_length:
            step_length -= 1
            end = end.next
        p = end.next
        end.next = None

        return p


class Node:
    def __init__(self, val, next):
        self.val = val if val else 0
        self.next = next if next else None
