# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    """
    利用二叉搜索树得特性：左子树的值都比根节点小，右子树的值都比根节点大
    """

    def kthLargest(self, root: TreeNode, k: int) -> int:
        res = []
        self.mid_order(root, res)

        return res[len(res)-k]

    def mid_order(self, root, res):
        if root is None:
            return False
        self.mid_order(root.left, res)
        res.append(root.val)
        self.mid_order(root.right, res)
