# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head:
            return head
        hair = Node(-1, head)
        pre = hair

        while 1:
            pre.next = self.reverseListNode(pre.next, k)
            # 向前走 k 步，如果为空，直接返回链表
            for i in range(k):
                pre = pre.next
                if pre.next is None:
                    return hair.next

        return hair.next

    def reverseListNode(self, head, length):
        """
        对指定长度的链表进行反转
        """
        con = length
        # 判断节点数量够不够反转
        # 不够反转
        pre = head
        length -= 1
        while length and pre:
            pre = pre.next
            length -= 1
        if pre is None:
            return head
        # 够反转
        pre = None
        cur = head
        while con:
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
            con -= 1
        head.next = cur
        return pre


class Node:
    def __init__(self, val, next):
        self.val = val if val else -1
        self.next = next if next else None
