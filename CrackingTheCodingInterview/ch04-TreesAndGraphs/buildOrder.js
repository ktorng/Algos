/*
  given list of projects and dependencies, find a valid build order

  input:
    projects: a, b, c, d, e, f
    dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
  output: f, e, a, b, d, c
*/

function buildOrder(projects, dependencies) {
  const adjacencyList = buildAdjacencyList(projects, dependencies);
  const buildOrder = [];


  const DFS = (node) => {
    const edges = adjacencyList[node].edges;
    if (edges.length === 0 || edges.every(e => adjacencyList[e].built)) {
      if (!adjacencyList[node].built) {
        buildOrder.push(node);
        adjacencyList[node].built = true;
      }
    } else {
      edges.forEach(e => {
        if (!adjacencyList[e].built) DFS(e);
      })
    }
  };

  let i = 0;
  while (buildOrder.length < projects.length) {
    DFS(projects[i]);

    if (i === projects.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }

  return buildOrder.reverse();
}

function buildAdjacencyList(projects, dependencies) {
  const list = {};
  projects.forEach(proj => {
    list[proj] = {
      built: false,
      edges: []
    };
  });

  dependencies.forEach(dep => {
    list[dep[0]].edges.push(dep[1]);
  });

  return list;
}

const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects, dependencies));
