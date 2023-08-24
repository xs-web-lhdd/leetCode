class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.parent = None
        self.color = 'red'


class RedBlackTree:
    def __init__(self):
        self.root = None

    def height(self, node):
        if node is None:
            return 0
        return 1 + max(self.height(node.left), self.height(node.right))

    def get_color(self, node):
        return node.color

    def set_color(self, node, color):
        node.color = color

    def get_parent(self, node):
        return node.parent

    def set_parent(self, node, parent):
        node.parent = parent

    def rotate_left(self, node):
        new_root = node.right
        node.right = new_root.left
        new_root.left = node
        self.set_color(new_root, node.color)
        self.set_color(node, new_root.color)

    def rotate_right(self, node):
        new_root = node.left
        node.left = new_root.right
        new_root.right = node
        self.set_color(new_root, node.color)
        self.set_color(node, new_root.color)

    def insert(self, node, key):
        if node is None:
            return Node(key)
        if key < node.key:
            node.left = self.insert(node.left, key)
        elif key > node.key:
            node.right = self.insert(node.right, key)
        else:
            return node

        node.key = key

        self.set_color(node, 'red')

        # Set the root's parent if it's a new root
        if self.get_parent(node) is None:
            self.root = node

        # Make sure the tree remains a valid binary search tree
        self._fix_up(node)

        self.set_color(node, 'black')

        return node

    def _fix_up(self, node):
        while node.parent and node.parent.color == 'red':
            # Case 1: The parent is the left child of its parent
            if node.parent == node.parent.parent.left:
                uncle = node.parent.parent.right
                if uncle and uncle.color == 'red':
                    node.parent.color = 'black'
                    uncle.color = 'black'
                    node.parent.parent.color = 'red'
                    node = node.parent.parent
                else:
                    if node == node.parent.right:
                        node = node.parent
                        self.rotate_left(node)
                    node.parent.color = 'black'
                    node.parent.parent.color = 'red'
                    self.rotate_right(node.parent.parent)
            # Case 2: The parent is the right child of its parent
            else:
                uncle = node.parent.parent.left
                if uncle and uncle.color == 'red':
                    node.parent.color = 'black'
                    uncle.color = 'black'
                    node.parent.parent.color = 'red'
                    node = node.parent.parent
                else:
                    if node == node.parent.left:
                        node = node.parent
                        self.rotate_right(node)
                    node.parent.color = 'black'
                    node.parent.parent.color = 'red'
                    self.rotate_left(node.parent.parent)
            self.height(node.parent.parent)

        self.set_color(node.parent.parent, 'black')
