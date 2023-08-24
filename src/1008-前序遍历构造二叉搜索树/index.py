# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        def build_avl_tree(i, j):
            # 没有节点：
            if i > j:
                return None
            # 叶子节点：
            if i == j:
                return TreeNode(preorder[i])
            root = TreeNode(preorder[i])
            m = j
            while preorder[m] > preorder[i]:
                m -= 1

            root.left = build_avl_tree(i+1, m)
            root.right = build_avl_tree(m+1, j)

            return root

        return build_avl_tree(0, len(preorder)-1)
