# implement a function to check if a binary tree is a BST


class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def __str__(self, level=0):
        ret = "\t"*level+repr(self.value)+"\n"
        for child in [self.left, self.right]:
            if child:
                ret += child.__str__(level+1)
        return ret

    def __repr__(self):
        return '<tree node representation>'

    def add(self, value):
        node = BinaryTreeNode(value)
        q = []
        q.append(self)

        while q:
            c = q.pop(0)

            if c.left is None:
                c.left = node
                return
            else:
                q.append(c.left)

            if c.right is None:
                c.right = node
                return
            else:
                q.append(c.right)


def validate_bst(root):
    return check_bst(root, float('-inf'), float('inf'))


def check_bst(root, low, high):
    if root is None:
        return True

    if root.value <= low or root.value >= high:
        return False

    if not check_bst(root.left, low, root.value) or not check_bst(root.right, root.value, high):
        return False

    return True


root = BinaryTreeNode(5)
root.add(3)
root.add(8)
root.add(1)
root.add(4)
root.add(6)
root.add(9)
print(str(root))
print(validate_bst(root))

root = BinaryTreeNode(5)
root.add(3)
root.add(8)
root.add(1)
root.add(4)
root.add(6)
root.add(0)
print(str(root))
print(validate_bst(root))
