"""
Write an algorithm to find the "next" node
(i.e. in-order successor) of a given node in a BST

Assume each node has a link to its parent
"""


class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.parent = None

    def __str__(self, level=0):
        ret = "\t"*level+repr(self.value)+"\n"
        for child in [self.left, self.right]:
            if child:
                ret += child.__str__(level+1)
        return ret

    def __repr__(self):
        return '<tree node representation>'

    def add(self, value):
        node = BSTNode(value)

        curr = self

        while curr:
            if value == curr.value:
                return

            if value < curr.value:
                if curr.left is None:
                    curr.left = node
                    node.parent = curr
                    return node
                else:
                    curr = curr.left
            else:
                if curr.right is None:
                    curr.right = node
                    node.parent = curr
                    return node
                else:
                    curr = curr.right


def successor(node):
    """
    if right exists, return leftmost node of right subtree
    else find closest parent to the right of node
    if node is already rightmost, return None
    """
    if node.right:
        curr = node.right
        while curr.left:
            curr = curr.left
        return curr
    else:
        curr = node.parent
        while curr:
            if curr.left == node:
                return curr
            else:
                node = curr
                curr = curr.parent
        return None


root = BSTNode(5)
successor_should_be_5 = root.add(3)
successor_should_be_8 = root.add(7)
successor_should_be_none = root.add(9)
successor_should_be_7 = root.add(6)
successor_should_be_2 = root.add(1)
successor_should_be_9 = root.add(8)
successor_should_be_3 = root.add(2)
print(str(root))
print(successor(successor_should_be_none))
print(successor(successor_should_be_2).value)
print(successor(successor_should_be_3).value)
print(successor(successor_should_be_5).value)
print(successor(successor_should_be_7).value)
print(successor(successor_should_be_8).value)
print(successor(successor_should_be_9).value)
