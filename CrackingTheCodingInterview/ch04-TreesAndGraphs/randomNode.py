"""
In addition to insert, find, and delete methods for a binary
tree class, implement a get_random_node() method that returns
a random node from the tree
"""
from random import randrange


class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.size = 1

    def insert(self, value):
        # If value already in tree
        if value == self.value:
            return

        # Recursively insert
        if value < self.value:
            if not self.left:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if not self.right:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)

        # Bubble up size increment
        self.size += 1

    # Each node should have a 1/size chance of getting picked
    # |---------------|-------------------------------|-|
    #   <left.size      >=left.size and <size-1        ==size-1
    def get_random_node(self):
        r = randrange(self.size)

        if r < self.left.size:
            return self.left.get_random_node()
        elif self.left.size <= r < self.size - 1:
            return self.right.get_random_node()
        else:
            return self
