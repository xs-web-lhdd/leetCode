# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        """
        平衡的条件：
          1、左边的都小于根节点
          2、右边的都大于根节点
        """
        if root is None:
            return True
        if root.left:
            if root.left.val >= root.val:
                return False
            left_val = self.get_pre_node(root.left).val
            if left_val >= root.val:
                return False
            if self.isValidBST(root.left) == False:
                return False
        if root.right:
            if root.right.val <= root.val:
                return False
            right_val = self.get_next_node(root.right).val
            if right_val <= root.val:
                return False
            if self.isValidBST(root.right) == False:
                return False

        return True

    def get_pre_node(self, root):
        temp = root
        while temp.right:
            temp = temp.right

        return temp

    def get_next_node(self, root):
        temp = root
        while temp.left:
            temp = temp.left

        return temp
