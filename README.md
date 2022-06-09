# 刷 LeetCode 提高算法

鬼知道我能坚持多久......<br/>
更新！2022.6.3 期末考试后继续开刷！！！<br/>
更新！2022.6.5 集成单元测试环境开始写测试以及将项目源代码移入 src 项目文件夹中<br/>


#### 仓库目录介绍：
```shell
.vscode  # vscode 配置
code     # 一些模板代码
src      # 源代码 里面是 leetcode 每一题
    20-有效的括号   # leetcode 里面的题目
          index.js          # js 代码，里面可能有多种解法就新建了 index1.js 这种文件，也有解法在同一个 index.js 中
          index.spec.js     # 写的单元测试
          README.md         # 题解
test    # 想着写单元测试重新写一个文件夹，后觉得不方便就都写在 src 里面的题目文件夹里面了
weekly-race  # leetcode 周赛 ，卑微的写个签到题每次
README  # 写的项目介绍以及题目还有更新的细节
.babelrc # 让 jest 中支持 esm 语法
```

### 刷题顺序：
#### 链表：
141-环形链表
142-环形链表2
202-快乐数
206-反转链表
92-反转链表2
25-K个一组反转链表
61-旋转链表
24-两两交换链表中的节点
19-删除链表的倒数第N个结点
83-删除排序链表中的重复元素
82-删除排序链表中的重复元素2
138-复制带随机指针的链表
86-分隔链表
2-两数相加
160-相交链表
328-奇偶链表
234-回文链表
143-重排链表
21-合并两个有序链表
148-排序链表
剑指 Offer 18. 删除链表的节点
剑指 Offer 06. 从尾到头打印链表
725-分隔链表
剑指 Offer 25. 合并两个排序的链表
203-移除链表元素
237-删除链表中的节点
23-合并K个升序链表

单链表的套路：https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492022&idx=1&sn=35f6cb8ab60794f8f52338fab3e5cda5&scene=21#wechat_redirect

#### 队列:
622-设计循环队列
933-最近的请求次数
面试题 17.09. 第 k 个数
859-亲密字符串
860-柠檬水找零
969-煎饼排序
621-任务调度器
429-N 叉树的层序遍历 （数的广度优先用队列）

#### 栈：
682-棒球比赛
844-比较含退格的字符串
946-验证栈序列
20-有效的括号
1249-移除无效的括号
1021-删除最外层的括号
145-二叉树的后序遍历
331-验证二叉树的前序序列化
227-基本计算器 II
636-函数的独占时间
1124-表现良好的最长时间段
445-两数相加 II
71-简化路径

#### 二叉树：应用递归思想
112-路径总和
144-二叉树的前序遍历
94-二叉树的中序遍历
589-N 叉树的前序遍历
226-翻转二叉树
剑指 Offer 32 - II. 从上到下打印二叉树 II
107-二叉树的层序遍历 II
103-二叉树的锯齿形层序遍历
110-平衡二叉树
105-从前序与中序遍历序列构造二叉树
222-完全二叉树的节点个数
剑指 Offer 54. 二叉搜索树的第k大节点
100-相同的树
剑指 Offer 26. 树的子结构
230-二叉搜索树中第K小的元素
101-对称二叉树
104-二叉树的最大深度
111-二叉树的最小深度
236-二叉树的最近公共祖先
108-将有序数组转换为二叉搜索树
450-删除二叉搜索树中的节点
98-验证二叉搜索树
102-二叉树的层序遍历
235-二叉搜索树的最近公共祖先
257-二叉树的所有路径
404-左叶子之和
113-路径总和 II<DFS>
114-二叉树展开为链表<DFS>
116-填充每个节点的下一个右侧节点指针<BFS>
117-填充每个节点的下一个右侧节点指针 II<BFS>
129-求根节点到叶节点数字之和<DFS>
199-二叉树的右视图<BFS>
437-路径总和 III
993-二叉树的堂兄弟节点<DFS>
1367-二叉树中的列表<DFS>
958-二叉树的完全性检验<BFS>

#### 双指针：
16-最接近的三数之和
167-两数之和 II - 输入有序数组
455-分发饼干
392-判断子序列
524-通过删除字母匹配到字典里最长单词
415-字符串相加
15-三数之和
18-四数之和
面试题 01.05. 一次编辑

#### 递归：
70-爬楼梯

#### 随机：
1768-交替合并字符串
67-二进制求和
88-合并两个有序数组
125-验证回文串
163-缺失的区间
150-逆波兰表达式求值
171-Excel 表列序号
205-同构字符串
217-存在重复元素
219-存在重复元素 II
228-汇总区间
240-搜索二维矩阵 II
744-寻找比目标字母大的最小字母
242-有效的字母异位词
258-各位相加
762-二进制表示中质数个计算置位
263-丑数
268-丢失的数字
278-第一个错误的版本
283-移动零
290-单词规律
169-多数元素
796-旋转字符串
292-Nim 游戏
326-3 的幂
338-比特位计数
342-4的幂
344-反转字符串
345-反转字符串中的元音字母
349-两个数组的交集
367-有效的完全平方数
374-猜数字大小
383-赎金信
387-字符串中的第一个唯一字符
5-最长回文子串
409-最长回文串
806-写字符串需要的行数
412-Fizz Buzz
434-字符串中的单词数
441-排列硬币
448-找到所有数组中消失的数字
128-最长连续序列
501-二叉搜索树中的众数
461-汉明距离
476-数字的补数
386-字典序排数<深度优先>
821-字符的最短距离
824-山羊拉丁文
17-电话号码的字母组合
43-字符串相乘
56-合并区间
57-插入区间
75-颜色分类
395-至少有 K 个重复字符的最长子串<分治 + 递归>

#### 堆排序：
剑指 Offer 40. 最小的k个数
1046-最后一块石头的重量
215-数组中的第K个最大元素

#### 数学：
172-阶乘后的零

#### 哈希表：
705-设计哈希集合
706-设计哈希映射
442-数组中重复的数据

### 跟着某位佬刷：
https://github.com/vortesnail/leetcode
- [x] 二分查找 已刷完<br/>
- [x] 查找表 已刷完<br/>
- [x] 滑动窗口<br/>
- [x] 链表 已刷完<br/>
- [ ] LRU 缓存机制<br/>
- [X] 前缀和<br/>
- [x] 二叉树 已刷完<br/>
- [x] DFS 已刷完<br/>
- [x] BFS 已刷完<除去前三题是用动态规划><br/>
- [X] 双指针<br/>
- [ ] 递归与回溯<br/>
- [ ] 子集 组合<br/>
- [ ] 全排列<br/>
- [ ] 搜索<br/>
- [ ] 分割<br/>
- [ ] 动态规划<br/>
- [x] 栈 已刷完<br/>
- [x] 排序 已刷完<br/>

##### 深（广）度优先遍历：
542-01 矩阵<BFS>
1091-二进制矩阵中的最短路径<BFS>
752-打开转盘锁<BFS>
剑指 Offer 13. 机器人的运动范围<BFS>
130-被围绕的区域<DFS>
494-目标和<DFS>
473-火柴拼正方形<DFS>
39-组合总和

##### 单调栈：
155-最小栈
503-下一个更大元素 II
901-股票价格跨度
739-每日温度
84-柱状图中最大的矩形
1856-子数组最小乘积的最大值
496-下一个更大元素 I
456-132 模式 !!!bug
42-接雨水！！！不理解

##### 递归与回溯:
面试题 16.11. 跳水板
1291-顺次数
22-括号生成

##### 二分查找：
50-Pow(x, n)
69-x 的平方根
704-二分查找
33-搜索旋转排序数组
4-寻找两个正序数组的中位数
34-在排序数组中查找元素的第一个和最后一个位置
74-搜索二维矩阵
1-两数之和（二分法）
1658-将 x 减到 0 的最小操作数
475-供暖器
81-搜索旋转排序数组 II(不排序的二分)

##### 查找表：
1-两数之和
389-找不同
350-两个数组的交集 II

##### 滑动窗口：
教程: https://www.bilibili.com/video/BV14Q4y1P7Np?from=search&seid=17523386858009450182&spm_id_from=333.337.0.0
239-滑动窗口最大值
438-找到字符串中所有字母异位词
76-最小覆盖子串
3-无重复字符的最长子串
209-长度最小的子数组
剑指 Offer 59 - I. 滑动窗口的最大值
剑指 Offer 59 - II. 队列的最大值
713-乘积小于 K 的子数组
220-存在重复元素 III
187-重复的DNA序列
30-串联所有单词的子串 --- 没过！

##### 剑指Offer：
剑指 Offer 24. 反转链表
剑指 Offer 05. 替换空格
剑指 Offer 58 - II. 左旋转字符串
剑指 Offer 03. 数组中重复的数字
剑指 Offer 53 - I. 在排序数组中查找数字 I
剑指 Offer 53 - II. 0～n-1中缺失的数字
剑指 Offer 11. 旋转数组的最小数字
面试题50. 第一个只出现一次的字符
面试题32 - I. 从上到下打印二叉树
剑指 Offer 32 - III. 从上到下打印二叉树 III
剑指 Offer 27. 二叉树的镜像
剑指 Offer 28. 对称的二叉树
剑指 Offer 17. 打印从1到最大的n位数
剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
剑指 Offer 22. 链表中倒数第k个节点
剑指 Offer 39. 数组中出现次数超过一半的数字
剑指 Offer 57. 和为s的两个数字
剑指 Offer 57 - II. 和为s的连续正数序列
剑指 Offer 58 - I. 翻转单词顺序
剑指 Offer 61. 扑克牌中的顺子
剑指 Offer 07. 重建二叉树
剑指 Offer II 029. 排序的循环链表
剑指 Offer II 012. 左右两边子数组的和相等
剑指 Offer II 019. 最多删除一个字符得到回文
剑指 Offer II 052. 展平二叉搜索树
剑指 Offer II 056. 二叉搜索树中两个节点之和
剑指 Offer 67. 把字符串转换成整数
剑指 Offer 55 - II. 平衡二叉树
剑指 Offer 34. 二叉树中和为某一值的路径
剑指 Offer II 037. 小行星碰撞
剑指 Offer II 074. 合并区间
剑指 Offer II 045. 二叉树最底层最左边的值<BFS>

##### 动态规划：哎！
300-最长递增子序列<vue3源码中快速diff算法又涉及到>

##### 递推：有动态规划那味了，哎！
746-使用最小花费爬楼梯