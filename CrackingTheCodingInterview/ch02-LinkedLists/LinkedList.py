class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return str(self.value)


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def __str__(self):
        arr = []
        curr = self.head

        while curr:
            arr.append(curr.value)
            curr = curr.next

        return str(arr)

    def add(self, value):
        node = Node(value)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node

        self.tail = node

        return node

    # Remove first node that matches value
    def remove(self, value):
        curr = self.head

        if curr.value == value:
            self.head = self.head.next
        else:
            while curr.next:
                if curr.next.value == value:
                    curr.next = curr.next.next
                    break
                else:
                    curr = curr.next
