class Solution:
    def minimumTotal(self, triangle) -> int:
        length = len(triangle)
        arr = [
            [0 for _ in range(l)] for l in range(1, length)
        ]

        last_layer = triangle[length-1][0:]
        arr.append(last_layer)

        i = length - 1
        while i >= 0:
            # 当前层的长度
            l = len(triangle[i])
            for index in range(l-1):
                # 当前层上一层的每一个值
                arr[i-1][index] = min(arr[i][index], arr[i]
                                      [index+1]) + triangle[i-1][index]
            i -= 1

        return arr[0][0]
