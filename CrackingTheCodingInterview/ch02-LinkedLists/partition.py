"""
Write code to partition a linked list around a value x, such that all nodes
less than x come before all nodes greater than or equal to x
"""


from LinkedList import *


def partition(list, x):
    if list.head is None:
        return None

    # Start 2 pointers
    # a keeps track of node before b used for removing b
    # b traverses list and finds values less than x
    a = list.head
    b = list.head.next

    while b is not None:
        # Move to start of list
        if b.value < x:
            a.next = b.next
            b.next = list.head
            list.head = b  # Update head location
            b = a.next
        else:
            a = a.next
            b = b.next
            list.tail = a  # Update tail location


a = LinkedList()
a.add(4)
a.add(1)
a.add(5)
a.add(2)
a.add(6)
partition(a, 3)
print(a)  # [2, 1, 4, 5, 6]
print(a.head.value)  # 1
print(a.tail.value)  # 6

