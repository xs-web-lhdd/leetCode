#
# @lc app=leetcode.cn id=148 lang=python3
#
# [148] 排序链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        """
        使用 n ** 2 的时间复杂度进行排序
        """
        if not head or not head.next:
            return head
        hair = ListNode(-99999, head)
        pre = head
        cur = head.next
        while cur:
            if cur.val >= pre.val:
                cur = cur.next
                pre = pre.next
            else:
                now = cur
                cur = cur.next
                pre.next = cur
                p = hair
                while p:
                    if now.val < p.next.val:
                        now.next = p.next
                        p.next = now
                        break
                    else:
                        p = p.next

        return hair.next


# @lc code=end
