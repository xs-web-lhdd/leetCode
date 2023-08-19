# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        arr = []
        self.mid_order(root, arr)

        return arr

    def mid_order(self, root, arr):
        if root is None:
            return
        self.mid_order(root.left, arr)
        arr.append(root.val)
        self.mid_order(root.right, arr)
