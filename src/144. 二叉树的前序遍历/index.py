# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        arr = []
        order = Order()
        order.pre_order(root, arr)

        return arr


class Order:
    def pre_order(self, root, arr):
        if root is None:
            return
        arr.append(root.val)
        self.pre_order(root.left, arr)
        self.pre_order(root.right, arr)
