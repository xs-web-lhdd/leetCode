# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        if B is None:
            return False
        arr = []
        self.pre_order(A, arr)
        i = 0
        while i < len(arr):
            if self.a_contain_b(arr[i], B):
                return True
            i += 1

        return False

    def pre_order(self, root, arr):
        if root is None:
            return
        arr.append(root)
        self.pre_order(root.left, arr)
        self.pre_order(root.right, arr)

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
