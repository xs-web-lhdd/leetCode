class Solution:
    def pancakeSort(self, arr: List[int]) -> List[int]:
        ans = []
        # 从len(arr)（数组arr的长度）开始递减到1（不包括1），步长为-1的整数序列
        for n in range(len(arr), 1, -1):
            # 找到最大值下标
            index = 0
            for i in range(n):
                if arr[i] > arr[index]:
                    index = i
            # 如果找到的最大值下标就是当前目标数组范围内最后一个就不需要后续的反转操作了
            if index == n - 1:
                continue
            # 对数组进行反转
            m = index
            # 此时反转完最大值在最前面
            for i in range((m + 1) // 2):
                arr[i], arr[m - i] = arr[m - i], arr[i]  # 原地反转
            # 在进行反转最大值就在最后面了
            for i in range(n // 2):
                arr[i], arr[n - 1 - i] = arr[n - 1 - i], arr[i]  # 原地反转
            ans.append(index + 1)
            ans.append(n)
        return ans
