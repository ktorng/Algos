"""
Implement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.

Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

Your MyCalendar object will be instantiated and called as such:
    obj = MyCalendar()
    param_1 = obj.book(start,end)
"""


class Node:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.left = None
        self.right = None


class MyCalendar(object):
    def __init__(self):
        # BST
        self.bookings = None

    def book(self, start, end):
        """
        If bookings are empty, insert new booking

        Otherwise, check that there are no collisions in start and end times
        before inserting

        :param start: int
        :param end: int
        :rtype: bool
        """
        if self.bookings is None:
            self.bookings = Node(start, end)
            return True

        return self.book_helper(start, end, self.bookings)

    def book_helper(self, start, end, c):
        """
        Recursively search to insert given times into bookings BST
        Return false if there is collision

        :param start: int
        :param end: int
        :param c: Node
        :rtype: bool
        """
        if start >= c.end:
            if c.right is None:
                c.right = Node(start, end)
                return True
            else:
                return self.book_helper(start, end, c.right)
        elif end <= c.start:
            if c.left is None:
                c.left = Node(start, end)
                return True
            else:
                return self.book_helper(start, end, c.left)
        else:
            return False
