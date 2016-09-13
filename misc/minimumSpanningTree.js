// Prim's Algorithm (Greedy) - Finds minimum spanning tree

function Graph() { // adjacency list
    this.vertices = [];  // Key is node value, value is GraphNode with more information
}

function GraphNode(index) {
    this.index = index;
    this.adjacent = []; // should be linked list of GraphEdges
}

function GraphEdge(w, node) {
    this.weight = w;
    this.target = node;
}

function MSTPrims(G) {
    // 1. Add start edge to Heap (heap will have vertices and compared by the distance to get to that vertex)
    // 2. While heap is NOT empty, 
        // Pop() removes cheapest vertex u
        // 3. For all edges in u, look to see if target vertex v is not seen AND edge weight is smaller than current recordeddistance
        // 4. Set new distance, add that vertex to the minheap and set the parent
    var distance = new Array(G.vertices.length).fill(Infinity);
    var parent = new Array(G.vertices.length).fill(null);
    var inMST = new Array(G.vertices.length).fill(false);

    var minHeap = new Heap();   // Min-Heap will compare using the weight of the vertex. Weight is how much it costs to travel
    distance[0] = 0; // recording the graph distances
    minHeap.add(Graph.vertices[0]);
    while(!minHeap.isEmpty()) {
        var v = minHeap.pop();
        inMST[v.index] = true;
        for(u, w of v.adjacent) {   // u is the next node, w is the weight to travel to that node
            if(!inMST[u.index] && w < distance[u.index]) {
                distance[u.index] = w;
                minHeap.add(u);
                parent[u.index] = v;
            }
        }
    }

    for(var i = 0; i < parent.length; i++)
        console.log(i, " - ", parent[i]);
}

// Kruskal's Algorithm
// 1. Sort edges
// 2. Starting with minimum weight edge, add to MST if there is no cycle (using union-find)
// 3. Continue until there are E = V-1 in the MST
function kruskal(G) {
    var result = new Array(G.vertices.length);
    var sortedEdges = G.edges.sort(); // in order of incrasing weight;
    var subsets = new Array(G.vertices.length).fill(new SubSet());
    for(var i = 0; i < subsets.length; i++) {
        subsets[i].parent = i;
        subsets[i].rank = 0;
    }

    var e = 0, i = 0; // e is edge count, is i index on sorted edges
    while (e < V - 1) {
        var next = sortedEdges[i++];
        var x = findRank(subsets, next.src);
        var y = findRank(subsets, next.dest);

        if(x !== y) {  // Add to result
            result[e++] = next;
            unionRank(subsets, x, y);
        }
    }
}

// Union Find Algorithm
function find(parent, i) {
    if(parent[i] === -1) return i;
    return find(parent, parent[i]);
}

function union(parent, a, b) {
    var aParent = find(parent, a);
    var bParent = find(parent, b);
    parent[aParent] = bParent;
}

function findRank(subsets, i) {
    if(subsets[i].parent !== i) subsets[i].parent = find(subsets, subsets[i].parent);
    return subsets[i].parent;
}

function unionRank(subsets, a, b) {
    var aRoot = findRank(subsets, a);
    var bRoot = findRank(subsets, b);

    if(subsets[aRoot].rank < subsets[bRoot].rank) { // If root of a's rank is less than b's root rank, set parent to b
        subsets[aRoot].parent = bRoot;
    } else if(subsets[aRoot].rank > subsets[bRoot].rank) { // case where b root rank is lower than a root rank
        subsets[bRoot].parent = aRoot;
    } else {
        subsets[bRoot].parent = aRoot; // if a root and b root rank are both equal, arbitrarily make aroot the higher rank
        subsets[aRoot].rank++;
    }
}
