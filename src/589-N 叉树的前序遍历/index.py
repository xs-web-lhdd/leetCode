"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""


class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        res = []
        self.pre_order(root, res)

        return res

    def pre_order(self, root, arr):
        if root is None:
            return
        arr.append(root.val)
        l = len(root.children)
        i = 0
        while i < l:
            self.pre_order(root.children[i], arr)
            i += 1
