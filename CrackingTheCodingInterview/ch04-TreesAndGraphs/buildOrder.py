"""
Given list of projects and dependencies, find a valid build order

Input:
Projects: [a, b, c, d, e, f]
Dependencies: [(a, d), (f, b), (b, d), (f, a), (d, c)] (a is a dependency of f)
Output: f, e, a, b, d, c
"""


def build_order(projects, dependencies):
    build = []
    a = build_adjacency_list(projects, dependencies)

    def search(node):
        if a[node]['built']:
            return

        # If node does not have dep or the dep have already been built
        if len(a[node]['edges']) == 0 or all([a[edge]['built'] for edge in a[node]['edges']]):
            build.append(node)
            a[node]['built'] = True
        # Else DFS to find an edge that can be built
        else:
            for edge in a[node]['edges']:
                search(edge)

    # Driver
    i = 0
    while len(build) < len(projects):
        search(projects[i])
        # Reset if reached end without having built all
        if i == len(projects) - 1:
            i = 0
        else:
            i += 1

    return build[::-1]


def build_adjacency_list(projects, dependencies):
    a = {p: {'built': False, 'edges': []} for p in projects}
    for (k, v) in dependencies:
        a[k]['edges'].append(v)

    return a


p = ['a', 'b', 'c', 'd', 'e', 'f']
d = [('a', 'd'), ('f', 'b'), ('b', 'd'), ('f', 'a'), ('d', 'c')]

print(build_order(p, d))

