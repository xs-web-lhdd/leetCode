# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        if self.check(root.left, root.right):
            return True
        return False

    def check(self, A, B):
        if A is None or B is None:
            return A == B
        if A.val != B.val:
            return False

        return self.check(A.left, B.right) and self.check(A.right, B.left)
