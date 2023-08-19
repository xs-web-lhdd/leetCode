class KMP:
    def build_next(self, patt):
        """
        计算 next 数组
        """
        # next 数组（初值元素一个 0）
        next = [0]
        # 当前共同前后缀的长度
        prefix_len = 0
        i = 1
        while i < len(patt):
            if patt[prefix_len] == patt[i]:
                prefix_len += 1
                next.append(prefix_len)
                i += 1
            else:
                if prefix_len == 0:
                    next.append(0)
                    i += 1
                else:
                    prefix_len = next[prefix_len - 1]

        return next

    def kmp_search(self, string, patt):
        next = self.build_next(patt)

        # 主串中的指针
        i = 0
        # 字串中的指针
        j = 0
        while i < len(string):
            # 指针匹配，指针后移
            if string[i] == patt[j]:
                i += 1
                j += 1
            # 字符失配，根据 next 跳过字串前面的一些字符
            elif j > 0:
                j = next[j - 1]
            # 字符第一个字符就失配
            else:
                i += 1
            # 匹配成功，返回第一个匹配字符的下标
            if j == len(patt):
                return i - j
        # 没有匹配成功返回 -1
        return -1


string = 'ababaabacc'
patt = 'abacc'

kmp = KMP()
# print(kmp.kmp_search(string=string, patt=patt))
# ts = 'ababaaababaa'
ts = 'ababaabab'
print(kmp.build_next(ts))


# https://blog.csdn.net/s189416/article/details/126771312
