class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        if bills[0] != 5:
            return False
        five = 0
        ten = 0
        i = 0
        while i < bills.__len__():
            if bills[i] == 5:
                five += 1
            if bills[i] == 10:
                if five > 0:
                    five -= 1
                    ten += 1
                else:
                    return False
            if bills[i] == 20:
                if five > 0 and ten > 0:
                    five -= 1
                    ten -= 1
                elif five >= 3:
                    five -= 3
                else:
                    return False
            i += 1

        return True
