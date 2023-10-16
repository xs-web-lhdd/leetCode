# test:
"""
asba-wsj1-9dkes-is-1sdnd1-us   ->    asbabcdefghijklmnopqrstuvwsj123456789dkes-is-1sdnd1-us
"""


# flag 为 1 2 3
# flag 是 1 的时候，填充小写字母
# flag 是 2 的时候，填充大写字母
# flag 是 3 的时候，填充 *


def func4(str1, flag):
    p1 = 'abcdefghijklmnopqrstuvwxyz'
    p2 = '0123456789'
    f1 = '**************************'
    f2 = '**********'

    i = 0
    while i < len(str1):
        if str1[i] == '-':
            left_char = str1[i-1]
            right_char = str1[i+1]

            if left_char in p1 and right_char in p1 and ord(left_char) < ord(right_char):
                l_index = p1.find(left_char)
                r_index = p1.find(right_char)
                fill = ''
                if flag == 1:
                    fill = p1[l_index: r_index+1]
                if flag == 2:
                    fill = p1[l_index: r_index+1].upper()
                if flag == 3:
                    fill = f1[l_index: r_index+1]
                str1 = str1[0: i-1] + fill + str1[i+2:]

            if left_char in p2 and right_char in p2 and ord(left_char) < ord(right_char):
                l_index = p2.find(left_char)
                r_index = p2.find(right_char)
                fill = p2[l_index: r_index+1]
                if flag == 3:
                    fill = f1[l_index: r_index+1]
                str1 = str1[0: i-1] + fill + str1[i+2:]
        i += 1

    print(str1)
    return str1


res = func4('asba-wsj1-9dkes-is-1sdnd1-us', 3)
# print("asbabcdefghijklmnopqrstuvwsj123456789dkes-is-1sdnd1-us" == res)
