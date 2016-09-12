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
