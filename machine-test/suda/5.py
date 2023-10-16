def func5(str1):
    str1 = str1.upper()
    s1 = 'abcdefghijklmnopqrstuvwxyz'
    s2 = '0123456789'
    arr1 = [
        0 for i in range(27)
    ]

    arr2 = [
        0 for i in range(10)
    ]

    for i in range(len(str1)):
        if str1[i] in s1:
            arr1[ord(str1[i])-97] += 1
        if str1[i] in s2:
            arr2[ord(int(str1[i]))] += 1

    char_1 = ''
    char_2 = ''
    num = ''
    flag1 = 0
    flag2 = 0
    flag3 = 0

    maxVal = 0

    for i in range(len(str1)):
        if arr1[i] > maxVal:
            char_1 = ind(arr1[i]+97)
            flag1 = 1

    maxVal = 0
    for i in range(len(str1)):
        if arr1[i] > maxVal:
            if ind(arr1[i]+97) != char_1:
                char_1 = ind(arr1[i]+97)
                flag2 = 1

    maxVal = 0


res = func5('afhfhsid%&9fc013400&')
print(res)
