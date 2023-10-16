# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        res = []
        queue = [root]
        while len(queue):
            length = len(queue)
            ans = -2**31
            for _ in range(length):
                cur = queue.pop(0)
                if cur:
                    ans = max(ans, cur.val)
                if cur.left:
                    queue.append(cur.left)
                if cur.right:
                    queue.append(cur.right)
            res.append(ans)

        return res
