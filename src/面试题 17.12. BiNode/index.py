# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def convertBiNode(self, root: TreeNode) -> TreeNode:
        if root is None:
            return None
        lst = []
        self.mid_order(root, lst)

        return self.build_list(lst)

    def mid_order(self, root, arr):
        if root is None:
            return
        self.mid_order(root.left, arr)
        arr.append(root.val)
        self.mid_order(root.right, arr)

    def build_list(self, res):
        head = TreeNode(-999)
        p = head
        for i in res:
            node = TreeNode(i)
            p.right = node
            p = p.right

        return head.right
