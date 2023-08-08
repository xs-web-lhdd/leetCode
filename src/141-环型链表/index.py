class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head or head.next:
            return False
        slow = head
        fast = head.next

        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

            if slow == fast:
                return True

        return False
