"""
Given a binary tree, count the number of paths that sum
to a given value

Path doesn't need to start at root or leaf, but must go
downwards traveling only from parent nodes to children
"""


def paths_with_sum(root, target):
    count = 0

    def count_paths(node, total):
        nonlocal count

        if not node:
            return

        if total + node.value == target:
            count += 1

        # Recurse left and right with updated total
        count_paths(node.left, total + node.value)
        count_paths(node.right, total + node.value)

        # Start new counts with left and right as new starting nodes
        count_paths(node.left, 0)
        count_paths(node.right, 0)

    count_paths(root, 0)

    return count
