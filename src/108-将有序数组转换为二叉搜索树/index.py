# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        tree = self.build_avl_tree(nums)

        return tree

    def build_avl_tree(self, arr):
        if len(arr) == 0:
            return None
        root_val_index = len(arr) // 2
        left_val = arr[0:root_val_index]
        right_val = arr[root_val_index+1:]
        root = TreeNode(arr[root_val_index])
        root.left = self.build_avl_tree(left_val)
        root.right = self.build_avl_tree(right_val)

        return root
