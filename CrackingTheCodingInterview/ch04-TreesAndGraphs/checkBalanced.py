# Check if a binary tree is balanced (i.e. the height of the
# two subtrees of any node never differ by more than one)
import math


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

    def set_unbalanced_node(self, dir, node):
        if dir == 'left':
            self.left = node
        elif dir == 'right':
            self.right = node


def check_balanced(root):
    return get_height(root) != float('-inf')


def get_height(root):
    if root.left is None and root.right is None:
        return 1

    height_left = get_height(root.left) if root.left else 0
    height_right = get_height(root.right) if root.right else 0

    if height_left == float('-inf') or height_right == float('-inf'):
        return float('-inf')

    if math.fabs(height_left - height_right) > 1:
        return float('-inf')

    return max(height_left, height_right) + 1


root_unbalanced = BinaryTreeNode(1)
node_left = BinaryTreeNode(2)
node_left.add(3)
root_unbalanced.set_unbalanced_node('left', node_left)
print(str(root_unbalanced))
print(check_balanced(root_unbalanced))

root_balanced = BinaryTreeNode(1)
root_balanced.add(2)
root_balanced.add(3)
print(str(root_balanced))
print(check_balanced(root_balanced))
