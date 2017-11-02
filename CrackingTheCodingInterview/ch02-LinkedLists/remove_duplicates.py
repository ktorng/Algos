"""
Write code to remove duplicates from an unsorted linked list.
"""


from LinkedList import *


# O(n) time
# O(n) space
def remove_duplicates(ll):
    curr = ll.head
    visited = set()

    while curr.next:
        visited.add(curr.value)
        if curr.next.value in visited:
            curr.next = curr.next.next
        else:
            curr = curr.next

    return ll


a = LinkedList()
a.add(5)
a.add(3)
a.add(3)
a.add(8)
a.add(2)
a.add(5)
a.add(8)
print(a)
remove_duplicates(a)
print(a)
