"""
T1 and T2 are two very large binary trees, with T1 much bigger
than T2 - create an algorithm to determine if T2 is a subtree
of T1
"""


# Traverse t1 until find value equal to t2, then check match_trees
def is_subtree(t1, t2):
    if not t2:
        return True

    if not t1:
        return False

    if match_trees(t1, t2):
        return True

    return is_subtree(t1.left, t2) or \
        is_subtree(t1.right, t2)


# Check if trees match exactly
def match_trees(t1, t2):
    # Both subtrees empty
    if not t1 and not t2:
        return True

    # One subtree empty
    if not t1 or not t2:
        return False

    # Values don't match
    if t1.value !== t2.value:
        return False

    # Check both sides
    return match_trees(t1.left, t2.left) and \
        match_trees(t1.right, t2.right)

