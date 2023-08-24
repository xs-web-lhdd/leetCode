class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        def diff(i, j):
            # 当没有左右子树时 i > j，当只有一个节点时 i == j
            if i >= j:
                return True
            p = i
            while postorder[p] < postorder[j]:
                p += 1
            m = p

            while postorder[p] > postorder[j]:
                p += 1
            # postorder[i:m-1] 是左子树
            # postorder[m:j-1] 是右子树
            return p == j and diff(i, m-1) and diff(m, j-1)

        return diff(0, len(postorder)-1)
