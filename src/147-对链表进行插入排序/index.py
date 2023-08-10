#
# @lc app=leetcode.cn id=147 lang=python3
#
# [147] 对链表进行插入排序
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        hair = ListNode(-5001, head)
        cur = head.next
        pre = head
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
