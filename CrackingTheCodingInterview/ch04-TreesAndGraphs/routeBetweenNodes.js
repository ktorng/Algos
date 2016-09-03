/*
  given a directed graph, design an algorithm to find out
  whether there is a route between two nodes
*/


function routeBetweenNodes(graph, a, b) {
  if (a === b) return true;
  // BFS search using queue
  const q = new Queue();

  // add start node to queue
  q.enqueue(start);
  let curr;

  // while there are nodes left to search through
  while (!q.isEmpty()) {
    // dequeue one node and check its adjacencies
    curr = q.dequeue();
    curr.getAdjacent().forEach(v => {
      // if adjacent node has not been visited
      // check to see if end
      // else add it to the queue
      if (!v.visited) {
        if (v === end) {
          return true;
        } else {
          q.enqueue(v);
        }
      }
    })
    // mark the current node as visited to prevent cycles
    curr.visited = true;
  }

  return false;
}
