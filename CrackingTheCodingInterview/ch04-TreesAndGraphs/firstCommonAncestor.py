# Design an algorithm to find the first common ancestor of two
# nodes in a binary tree
# Avoid storing additional nodes in a data structure


def first_common_ancestor(root, a, b):
    # if a or b not in tree
    if not is_descendant(root, a) or not is_descendant(root, b):
        return None

    def helper(node, a, b):
        if node == a or node == b:
            return node

        a_on_left = is_descendant(node.left, a)
        b_on_left = is_descendant(node.left, b)

        # if on different sides
        if a_on_left != b_on_left:
            return node
        elif a_on_left:
            return helper(node.left, a, b)
        else:
            return helper(node.right, a, b)

    return helper(root, a, b)


def is_descendant(ancestor, child):
    if ancestor == child:
        return True
    if not ancestor:
        return False

    return is_descendant(ancestor.left, child) or \
        is_descendant(ancestor.right, child)