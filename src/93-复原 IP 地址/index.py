class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        length = len(s)
        if length < 4 or length > 12:
            return []
        ans = []

        self.dfs(0, 0, '', s, length, ans)

        return ans

    def dfs(self, start, p, path, s, length, ans):
        """
        start 开始字符串的下标
        p 当前是 ip 的第几部分
        path ip字符串
        s 输入的字符串
        length 输入字符串的长度
        ans 是最终的结果数组
        """
        if p == 4:
            if start == length:
                ans.append(path)
            return

        cur_s = ''
        for index in range(start, start+3):
            if index >= length:
                return
            cur_s = cur_s + s[index]
            if int(cur_s) > 255:
                break
            self.dfs(index+1, p+1, path+cur_s +
                     ('' if p == 3 else '.'), s, length, ans)
            if s[start] == '0':
                break
