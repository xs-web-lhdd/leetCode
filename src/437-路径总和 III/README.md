# 题解:
时隔多天我又来写题解了,想法就是从每一个节点出发去遍历,如果有结果与 targetSum 一致,那么就往 arr 里面 push 1,
最后统计 arr 的长度就知道从该节点出发有几条路径是等于 targetSum 了,最后返回路径和 count 即可