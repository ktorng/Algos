"""
Implement an algorithm to delete a node in the middle of a singly linked list,
given only access to that node
"""


from LinkedList import *


def delete_node(node):
    """
    Delete a node given only access to that node

    Make that node a copy of next node, and delete next node
    O(1) time
    O(1) space

    :param node: A linked list node
    :type node: Node
    :return: None
    """

    if node.next is None:
        node.value = None  # Cannot delete if last node
    else:
        node.value = node.next.value
        node.next = node.next.next


a = LinkedList()
a.add(1)
a.add(2)
node = a.add(3)
a.add(4)
node_2 = a.add(5)
delete_node(node)
print(a)
delete_node(node_2)
print(a)
