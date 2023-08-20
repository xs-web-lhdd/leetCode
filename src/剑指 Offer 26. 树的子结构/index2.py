# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        if B is None or A is None:
            return False
        if self.a_contain_b(A, B):
            return True

        return self.isSubStructure(A.left, B) or self.isSubStructure(A.right, B)

    def a_contain_b(self, a, b):
        if a is None and b is None:
            return True
        if (a is None and b is not None):
            return False
        if (a is not None and b is None):
            return True
        if a.val != b.val:
            return False

        return self.a_contain_b(a.left, b.left) and self.a_contain_b(a.right, b.right)
