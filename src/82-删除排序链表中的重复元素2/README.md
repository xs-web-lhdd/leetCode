# 82、删除排序链表中的重复元素2

这题稍微麻烦一点，建议跑一个案例，按着代码画一下图就会明白了
主要都是让`cur`找到与自己下一位不相等的节点，然后把`pre`的下一位指向`cur`的下一位即可