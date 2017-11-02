"""
Implement an algorithm to find the kth to last element of a singly linked list
"""


from LinkedList import *


def kth_to_last_element(list, k):
    """
    2 pointers a and b at head
    Increment a k times
    Then increment a and b until a reaches end
    Return b

    O(n) time
    O(1) space
    """
    if list.head is None:
        return None

    a = list.head
    b = list.head
    i = 0

    while i < k:
        if a is None:  # k out of bounds
            return None
        else:
            a = a.next
            i += 1

    while a is not None:
        a = a.next
        b = b.next

    return b


a = LinkedList()
a.add(5)
a.add(3)
a.add(3)
a.add(8)
a.add(2)
a.add(5)
a.add(8)
print(kth_to_last_element(a, 3))  # should be 2
print(kth_to_last_element(a, 7))  # should be 5
print(kth_to_last_element(a, 8))  # should be out of bounds
