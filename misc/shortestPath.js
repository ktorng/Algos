// Shortest path
// You can update the value of a key thats already in a heap
function dijkstras(G, src) {
    // Starting with src. Add to minHeap
    var minHeap = new Heap();
    var distance = new Array(G.vertices.length);
    var previous = new Array(G.vertices.length);

    distance[src] = 0;
    for(var i = 1; i < G.vertices.length; i++) {
        distance[i] = Infinity;
        prev[i] = null;
        minHeap.add(G.vertices[i], distance[i]);
    }

    minHeap.add(G.vertices[src], 0); // key, value - theya re minheaped compared by the value 

    while(!minHeap.isEmpty()) {
        var node = minHeap.poll();
        for(var adjNode of node.adjacent) {
            var dist = distance[node] + node.getWeight(adjNode)
            if(alt < distance[adjNode]) {
                distance[adjNode] = dist;
                previous[distanceNode] = node;
                minHeap.decrease_key(adjNode, dist);
            } 
        }
    }

    return {
        distance: distance,
        previous: previous
    }
}

function dijkstraAlternative(G, src) {
    // Create Distance Array and MinHeap(priority queue)
    // Add src to heap
    // While Heap is not empty, poll
        // For all edges to adjacent nodes of the polled node, calculate the new distance
        // If the new distance is smaller than whats currently recorded, update the heap or add to the heap 
    var minHeap = new Heap();
    var distance = new Array(G.vertices.length).fill(Infinity);
    minHeap.add({
        node: G.vertices[src],
        weight: 0
    }, 0);
    distance[src] = 0;
    while(!minHeap.isEmpty()) {
        var u = minHeap.poll();
        for(var v of u.node.adjacent) {
            var dist = u.node.weight + u.node.getWeight(v);

            if(dist < distance[v]) {
                if(dist[v] !== Infinity) {
                    minHeap.decreaseKey(v, dist);
                }
                distance[v] = dist;
                minHeap.add({
                    node:v,
                    weight:dist
                }, dist);
            }
        }
    }

    return distance;
}

function dijkstraSrcTarget(G, src, tgt) {
    var minHeap = new Heap();
    var distances = [];
    var path = [];

    minHeap.add(G.vertices[src], 0);
    while(!minHeap.isEmpty()) {
        var u = minHeap.poll();
        if(u === tgt) {
            return path;
        } else {
            path.push(u.label);
        }
        for(var v of u.adjacent) {
            var dist = u.weight + u.getWeight(v);

            if(dist < distances[v.label]) {
                distances[v.label] !== Infinity ? minHeap.decreaseKey(v, dist) : minHeap.add(v, dist);
                distances[v.label] = dist;
            }
        }
    }
}
