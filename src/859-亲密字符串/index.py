class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        if s.__len__() != goal.__len__():
            return False
        if s == goal:
            return s.__len__() > ''.join(set(goal)).__len__()
        a = ''
        b = ''
        i = 0
        while i < s.__len__():
            if s[i] != goal[i]:
                a += s[i]
                b += goal[i]
            i += 1

        return a.__len__() == 2 and a[0] == b[1] and a[1] == b[0]
