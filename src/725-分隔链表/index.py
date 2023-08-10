# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        # 链表长度
        l = 0
        cur = head
        while cur:
            l += 1
            cur = cur.next

        list = None
        cur = head
        if l <= k:
            list = [None for _ in range(l)]
            i = 0
            while i < l:
                pre = cur
                cur = cur.next
                pre.next = None
                list[i] = pre
                i += 1
            if i == k:
                return list
            if i < k:
                p = k - i
                while p:
                    p -= 1
                    list.append(None)
        else:
            # 余数
            remainder = l % k
            # 间隔
            interval = l // k
            # 组数
            group = 0
            list = [None for _ in range(k)]
            while group < k:
                item_length = interval
                if remainder > 0:
                    item_length += 1
                    remainder -= 1
                # 进行分组
                i = 0
                start = cur
                pre = None
                while i < item_length:
                    i += 1
                    pre = cur
                    if cur.next:
                        cur = cur.next
                pre.next = None
                list[group] = start
                group += 1

        return list
