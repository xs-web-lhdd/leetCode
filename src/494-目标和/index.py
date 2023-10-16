class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        dir = {}

        def dfs(i, target, nums):
            if i == len(nums):
                if target == 0:
                    return 1
                else:
                    return 0
            if dir.get(str(i)+'-'+str(target), 0):
                return dir.get(str(i)+'-'+str(target))
            ans = 0
            ans = ans + dfs(i+1, target-nums[i], nums)
            ans = ans + dfs(i+1, target+nums[i], nums)
            dir[str(i)+'-'+str(target)] = ans

            return ans

        return dfs(0, target, nums)
