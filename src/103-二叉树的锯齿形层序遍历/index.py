# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        self.layerOrderTraversal(root, res, 0)

        return res

    def layerOrderTraversal(self, root, arr, k):
        if root is None:
            return
        if len(arr) - 1 < k:
            arr.append([])
        if k % 2 == 0:
            arr[k].append(root.val)
        else:
            arr[k] = [root.val] + arr[k]
        self.layerOrderTraversal(root.left, arr, k+1)
        self.layerOrderTraversal(root.right, arr, k+1)
