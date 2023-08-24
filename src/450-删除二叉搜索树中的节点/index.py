# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        if root is None:
            return None
        if root.val > key:
            root.left = self.deleteNode(root.left, key)
        if root.val < key:
            root.right = self.deleteNode(root.right, key)
        if root.val == key:
            if root.left is None and root.right is None:
                root = None
                return None
            elif root.left is None or root.right is None:
                temp = root.left if root.left else root.right
                root = None
                return temp
            else:
                # 删除前驱节点的方式：
                # temp = self.getPreNode(root)
                # root.val = temp.val
                # root.left = self.deleteNode(root.left, temp.val)

                # 删除后继节点的方式:
                temp = self.getNextNode(root)
                root.val = temp.val
                root.right = self.deleteNode(root.right, temp.val)

        return root

    def getPreNode(self, root):
        temp = root.left
        while temp.right:
            temp = temp.right

        return temp

    def getNextNode(self, root):
        temp = root.right
        while temp.left:
            temp = temp.left

        return temp
