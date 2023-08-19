# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        self.layerOrder(res, root, 0)
        res.reverse()
        return res

    def layerOrder(self, arr, root, k):
        if root is None:
            return
        if len(arr) - 1 < k:
            arr.append([])
        arr[k].append(root.val)
        self.layerOrder(arr, root.left, k+1)
        self.layerOrder(arr, root.right, k+1)
