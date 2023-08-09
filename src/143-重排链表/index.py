# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        # 拿到中间节点
        middleNode = self.getMiddleNode(head)
        # 拿到中间节点右边的链表
        rightList = self.reverseList(middleNode.next)
        # 将左右两个链表断开
        middleNode.next = None
        # 将左右两个链表进行交叉合并
        self.mergeCrossList(head, rightList)

    def getMiddleNode(self, head):
        slow = head
        fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

        return slow

    def reverseList(self, head):
        pre = None
        cur = head
        while cur:
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next

        return pre

    def mergeCrossList(self, l1, l2):
        hair = ListNode()
        p1 = l1
        p2 = l2
        cur = hair
        while p1 and p2:
            cur.next = p1
            p1 = p1.next
            cur = cur.next
            cur.next = p2
            p2 = p2.next
            cur = cur.next
        # 当链表总长度为奇数时，左边链表长度大于右边链表长度（多出一个中间节点）
        # 当链表总长度为偶数时，左边链表和右边链表长度相等
        if p1:
            cur.next = p1

        return hair.next
