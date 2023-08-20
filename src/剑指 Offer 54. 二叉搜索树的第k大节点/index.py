# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def kthLargest(self, root: TreeNode, k: int) -> int:
        queen = [root]
        res = []
        while queen:
            node = queen.pop(-1)
            res.append(node.val)
            if node.left:
                queen.append(node.left)
            if node.right:
                queen.append(node.right)
        res.sort(reverse=True)

        return res[k-1]
