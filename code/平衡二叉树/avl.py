"""
平衡二叉树
"""


class TreeNode:
    """
    节点
    """

    def __init__(self, val, h, left, right,):
        """
        树中节点的值，节点的树高，节点的左孩子和有孩子
        """
        self.val = val
        self.h = h
        self.left = left
        self.right = right


class Node:
    """
    虚拟节点，替代空节点，将值为 -999 的节点设置为虚拟节点
    """

    def __init__(self, val=-999, h=0):
        self.val = val
        self.h = h


class Main:
    def getPreOrder(self, root):
        pre_order = []
        od = Order()
        od.pre_order(root, pre_order)

        return pre_order

    def getMidOrder(self, root):
        mid_order = []
        od = Order()
        od.mid_order(root, mid_order)

        return mid_order


class Order:
    def pre_order(self, root, arr):
        if root.val == -999:
            return
        self.my_print(root)
        arr.append(root.val)
        self.pre_order(root.left, arr)
        self.pre_order(root.right, arr)

    def mid_order(self, root, arr):
        if root.val == -999:
            return
        self.mid_order(root.left, arr)
        arr.append(root.val)
        self.mid_order(root.right, arr)

    def my_print(self, root):
        print(f"({root.val}[{root.h}] | {root.left.val}, {root.right.val})\n")
        return


class TreeOperate:

    def getNewNode(self, key):
        """
        得到值是 key 的一个新的树节点
        """
        return TreeNode(val=key, h=1, left=Node(), right=Node())

    def clear(self, root):
        """
        删除当前树
        """
        if root.val == -999:
            return
        self.clear(root.left)
        self.clear(root.right)
        # 删除当前节点
        print(f"节点 {root.val} 被删除！")
        # TODO: 删除当前节点
        # root = Node()
        root = None
        return root

    def getPreNode(self, root):
        """
        获得当前节点的前驱节点，这里注意前驱节点不是父节点，而是中序遍历时当前节点的前面节点，注意是中序遍历
        """
        temp = root.left
        while temp.right.val != -999:
            temp = temp.right

        return temp

    def update_height(self, root):
        if root.left is None and root.right is None:
            return
        if root.left is None:
            root.h = root.right.h + 1
        elif root.right is None:
            root.h = root.left.h + 1
        else:
            root.h = max(root.left.h, root.right.h) + 1

    def maintain(self, root):
        """
        对从 root 节点出发的不平衡的树进行调整，返回调整平衡后的二叉树
        """
        if abs(root.left.h - root.right.h) < 2:
            return root
        """
        四种失衡状态：LL 1、LR 2、RL 3、RR 4
        LR：先小左旋，后大右旋
        RL：先小右旋，后大左旋
        """
        type = -1
        if root.left.h > root.right.h:
            # 第一个字母是 L
            if root.left.right.h > root.left.left.h:
                # 第二个字母是 R，失衡类型是 LR，先小左旋，再大右旋
                # 小左旋
                if type == -1:
                    type = 2
                root.left = self.left_rotate(root.left)
            # 对根节点大右旋
            if type == -1:
                type = 1
            root = self.right_rotate(root)
        else:
            if root.right.left.h > root.right.right.h:
                # RL 类型，先小右旋，再大左旋
                if type == -1:
                    type = 3
                root.right = self.right_rotate(root.right)
            # 对根节点大左旋
            if type == -1:
                type = 4
            root = self.left_rotate(root)

        # 输入当前树失衡类型
        str = ''
        if type == 1:
            str = 'LL'
        elif type == 2:
            str = 'LR'
        elif type == 3:
            str = 'RL'
        else:
            str = 'RR'
        print(f'\033[32m当前树不平衡的类型为：{str}！\033[0m')

        return root

    def left_rotate(self, root):
        new_root = root.right
        root.right = new_root.left
        new_root.left = root
        self.update_height(root)
        self.update_height(new_root)
        return new_root

    def right_rotate(self, root):
        new_root = root.left
        root.left = new_root.right
        new_root.right = root
        self.update_height(root)
        self.update_height(new_root)
        return new_root

    def insert(self, root, key):
        """
        插入值为 key 的节点，返回插入后的树的根节点的地址
        """
        if root.val == -999:
            return self.getNewNode(key)
        # 防止重复插入
        if root.val == key:
            return root
        if root.val > key:
            root.left = self.insert(root.left, key)
        if root.val < key:
            root.right = self.insert(root.right, key)

        # 更新当前节点的高度
        self.update_height(root)

        return self.maintain(root)

    def erase(self, root, key):
        """
        二叉排序树的删除操作，删除单个节点
        """
        if root.val == -999:
            return root
        if root.val > key:
            root.left = self.erase(root.left, key)
        elif root.val < key:
            root.right = self.erase(root.right, key)
        else:
            # 要删除的节点就是当前节点：
            # if root.left is None and root.right is None:
            #     # 删除度为 0 的节点
            #     root = None
            #     return None
            if root.left.val == -999 or root.right.val == -999:
                # 删除度 为 0 和 1 的节点
                temp = root.right if root.left.val == -999 else root.left
                # TODO: 删除当前节点
                # root = Node()
                root = None
                return temp
            else:
                # 删除度为 2 的节点
                temp = self.getPreNode(root)
                root.val = temp.val
                root.left = self.erase(root.left, temp.val)
        self.update_height(root)

        return self.maintain(root)


# test 程序:
tree = Node()  # 初始化空树
treeOp = TreeOperate()
m = Main()
while 1:
    op, val = (input('请输入操作符和节点值，注意用空格分开：').split())
    op = int(op)
    val = int(val)
    print(f'操作符：{op}，节点值：{val}')
    if op == -1:
        print('退出操作！')
        break
    if op == 0:
        # 执行插入操作
        tree = treeOp.insert(tree, val)
    if op == 1:
        # 执行删除操作
        tree = treeOp.erase(tree, val)

    print("\033[34m====== AVL Tree Print =======\n\033[0m")
    print("格式：树值[树高] | 左子树的值，右子树的值")
    m.getPreOrder(tree)
    # print(f'树的中序遍历：{arr}\n')
    print("\033[34m====== Tree Print Down =======\n\033[0m")
