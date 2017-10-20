# Given a binary tree, design an algorithm which creates
# a linked list of all the nodes at each depth
# (a tree with depth D will have D linked lists)


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def __str__(self):
        a = []
        c = self.head
        while c is not None:
            a.append(c.value)
            c = c.next

        return str(a)

    def add(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node


class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None


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

    def list_of_depths(self):
        a = []

        def build_list(node, depth):
            if len(a) - 1 < depth:
                a.append(LinkedList())

            a[depth].add(LinkedListNode(node.value))

            if node.left:
                build_list(node.left, depth + 1)
            if node.right:
                build_list(node.right, depth + 1)

        build_list(self, 0)

        return a


root = BinaryTreeNode(1)
root.add(2)
root.add(3)
root.add(4)
root.add(5)
root.add(6)
root.add(7)
root.add(8)
print(str(root))
list_of_depths = root.list_of_depths()
for ll in list_of_depths:
    print(ll)


