# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        queen = [root]
        res = []
        while len(queen):
            node = queen.pop(-1)
            res.append(node.val)
            if node.left:
                queen.append(node.left)
            if node.right:
                queen.append(node.right)

        return len(res)
