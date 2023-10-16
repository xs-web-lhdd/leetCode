class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sorted()

        arr = []

    def dfs(self, candidates, target, ans, ret):
        arr = ans[0:]
        for item in range(candidates):
            if target < item:
                return
            if target == item:
                pass
