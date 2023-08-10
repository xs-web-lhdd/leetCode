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
        # 将链表分为 左、右 两个链表
        slow = head
        fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        right = slow.next
        slow.next = None
        left = head

        l = self.sortList(left)
        r = self.sortList(right)

        # 将两个排序后的链表进行 排序合并 后返回
        hair = ListNode(-1)
        cur = hair
        while l and r:
            if l.val <= r.val:
                cur.next = l
                l = l.next
            else:
                cur.next = r
                r = r.next
            cur = cur.next
        cur.next = l if l else r

        return hair.next


# @lc code=end
