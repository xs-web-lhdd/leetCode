"""
二叉排序树
"""


class TreeNode:
    """
    节点
    """

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Main:
    def getMidOrder(self, root):
        mid_order = []
        od = Order()
        od.mid_order(root, mid_order)

        return mid_order


class Order:
    def mid_order(self, root, arr):
        if root is None:
            return
        self.mid_order(root.left, arr)
        arr.append(root.val)
        self.mid_order(root.right, arr)


class TreeOperate:

    def getNewNode(self, key):
        """
        得到值是 key 的一个新的树节点
        """
        return TreeNode(val=key)

    def clear(self, root):
        """
        删除当前树
        """
        if root is None:
            return
        self.clear(root.left)
        self.clear(root.right)
        # 删除当前节点
        root = None
        return root

    def getPreNode(self, root):
        """
        获得当前节点的前驱节点，这里注意前驱节点不是父节点，而是中序遍历时当前节点的前面节点，注意是中序遍历
        """
        temp = root.left
        while temp.right:
            temp = temp.right

        return temp

    def insert(self, root, key):
        """
        插入值为 key 的节点，返回插入后的树的根节点的地址
        """
        if root is None:
            return self.getNewNode(key)
        # 防止重复插入
        if root.val == key:
            return root
        if root.val > key:
            root.left = self.insert(root.left, key)
        if root.val < key:
            root.right = self.insert(root.right, key)

        return root

    def erase(self, root, key):
        """
        二叉排序树的删除操作，删除单个节点
        """
        if root is None:
            return root
        if root.val > key:
            root.left = self.erase(root.left, key)
        elif root.val < key:
            root.right = self.erase(root.right, key)
        else:
            # 要删除的节点就是当前节点：
            if root.left is None and root.right is None:
                # 删除度为 0 的节点
                root = None
                return None
            elif root.left is None or root.right is None:
                # 删除度 为 1 的节点
                temp = root.left if root.left else root.right
                root = None
                return temp
            else:
                # 删除度为 2 的节点
                temp = self.getPreNode(root)
                root.val = temp.val
                root.left = self.erase(root.left, temp.val)
        return root


# test 程序:
tree = None  # 初始化空树
treeOp = TreeOperate()
m = Main()
while 1:
    op, val = (input('请输入操作符和节点值，注意用空格分开：').split())
    op = int(op)
    val = int(val)
    print(f'操作符：{op}，节点值：{val}')
    if op == 0:
        print('退出操作！')
        break
    if op == 1:
        # 执行插入操作
        tree = treeOp.insert(tree, val)
    if op == 2:
        # 执行删除操作
        tree = treeOp.erase(tree, val)

    arr = m.getMidOrder(tree)
    print('树的中序遍历：', arr)
