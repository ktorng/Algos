# Given a sorted array with unique integer elements. Write an
# algorithm to create a BST with minimal height
import math


class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def assign_left(self, node):
        self.left = node

    def assign_right(self, node):
        self.right = node


def minimal_tree(arr):
    if len(arr) == 0:
        return None
    if len(arr) == 1:
        return Node(arr[0])

    # Find middle
    m = math.floor(len(arr) / 2)

    # Recursively build left and right
    root = Node(arr[m])
    root.assign_left(minimal_tree(arr[0:m]))
    root.assign_right(minimal_tree(arr[m+1:]))

    return root


