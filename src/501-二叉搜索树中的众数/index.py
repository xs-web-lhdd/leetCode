# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        lst = []
        self.mid_pre(root, lst)
        # 记录前一个元素值
        pre = lst[0]
        # 记录次数
        cnt = 1
        # 记录最大次数
        maxCnt = 1
        # 记录结果
        res = [lst[0]]

        for i in range(1, len(lst)):
            # 如果与前一个节点的值相等
            if pre == lst[i]:
                cnt += 1
            else:
                cnt = 1
            # 如果和最大次数相同，将值放入 res
            if cnt == maxCnt:
                res.append(lst[i])
            # 如果大于最大次数
            if cnt > maxCnt:
                # 更新最大次数
                maxCnt = cnt
                # 重新更新 res
                res = [lst[i]]
            pre = lst[i]

        return res

    def mid_pre(self, root, res):
        if root is None:
            return
        self.mid_pre(root.left, res)
        res.append(root.val)
        self.mid_pre(root.right, res)
