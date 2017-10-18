# Given a directed graph, design an algorithm to find out
# whether there is a route between two nodes


class Node:
    def __init__(self, value):
        self.value = value
        self.edges = []

    def __str__(self):
        return "Node: %d" % self.value


class Graph:
    def __init__(self, nodes=[]):
        self.nodes = nodes

    def add_node(self, value):
        node = Node(value)
        self.nodes.append(node)

        return node

    @staticmethod
    def add_edge(a, b):
        a.edges.append(b)

    @staticmethod
    def route_between_nodes(a, b):
        if a is b:
            return True

        q = []
        visited = set()
        q.append(a)

        while q:  # while non-empty
            curr = q.pop(0)
            for edge in curr.edges:
                if edge is b:
                    return True
                if edge not in visited:
                    q.append(edge)
            visited.add(curr)

        return False


g = Graph()
node_1 = g.add_node(1)
node_2 = g.add_node(2)
node_3 = g.add_node(3)
node_4 = g.add_node(4)
node_5 = g.add_node(5)
g.add_edge(node_1, node_2)
g.add_edge(node_1, node_3)
g.add_edge(node_1, node_4)
g.add_edge(node_2, node_3)
g.add_edge(node_3, node_4)
g.add_edge(node_4, node_5)

u = node_1
v = node_5
if g.route_between_nodes(u, v):
    print("There is a path from %s to %s" % (u, v))
else:
    print("There is no path from %s to %s" % (u, v))

u = node_5
v = node_1
if g.route_between_nodes(u, v):
    print("There is a path from %s to %s" % (u, v))
else:
    print("There is no path from %s to %s" % (u, v))