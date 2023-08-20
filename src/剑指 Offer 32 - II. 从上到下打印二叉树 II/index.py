# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        self.layer_order(root, res, 0)

        return res

    def layer_order(self, root, res, k):
        if root is None:
            return
        if len(res) - 1 < k:
            res.append([])
        res[k].append(root.val)
        self.layer_order(root.left, res, k+1)
        self.layer_order(root.right, res, k+1)
