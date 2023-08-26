class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        arr = [0 for _ in range(len(cost))]

        arr[0] = cost[0]
        arr[1] = cost[1]

        for index in range(2, len(cost)):
            arr[index] = min(arr[index-1], arr[index-2]) + cost[index]

        return min(arr[len(cost)-1], arr[len(cost)-2])
