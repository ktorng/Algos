/*
  Robot sitting on upper left corner of grid with r rows and c columns
  Robot can only move right or down, but certain cells are "off limits"
  Design an algorithm to find a valid path for the robot from top left
  to bottom right
*/

const grid = [
  [ true, true, true, true ],
  [ true, false, true, true ],
  [ false, true, true, false ],
  [ true, true, true, false ],
  [ true, true, true, true ]
]

// recursive
function robotPath(r, c, grid) {
  let result;

  const findWays = (currRow, currCol, path) => {
    if (currRow === r-1 && currCol === c-1) {
      result = path;
    } else {
      if (grid[currRow+1] && grid[currRow+1][currCol]) {
        const pathDown = path.slice();
        pathDown.push('D');
        findWays(currRow+1, currCol, pathDown);
      }
      if (grid[currRow][currCol+1]) {
        const pathRight = path.slice();
        pathRight.push('R');
        findWays(currRow, currCol+1, pathRight);
      }
    }
  }

  findWays(0, 0, []);
  return result;
}

console.time('recursive');
console.log(robotPath(5, 4, grid))
console.timeEnd('recursive');

// DP
function robotPathDP(grid) {
  if (!grid || grid.length === 0) return null;

  const rows = grid.length;
  const cols = grid[0].length;
  const path = [];
  const failedPoints = new Array(rows);

  for (let i = 0; i < rows; i++) {
    failedPoints[i] = new Array(cols).fill(false);
  }

  if (findPath(grid, rows - 1, cols - 1, path, failedPoints)) {
    return path;
  }

  return null;
}

function findPath(grid, row, col, path, failedPoints) {
  // if out of bounds or not available, return
  if (col < 0 || row < 0 || !grid[row][col]) {
    return false;
  }

  // if we've already visited this point, return
  if (failedPoints[row][col]) {
    return false;
  }

  const isAtOrigin = (row === 0) && (col === 0);

  // if there's a path from start to my curr location, add my location
  if (isAtOrigin ||
    findPath(grid, row, col - 1, path, failedPoints) ||
    findPath(grid, row - 1, col, path, failedPoints)) {
      path.push([row, col]);
      return true;
    }

  // cache result
  failedPoints[row] = failedPoints[row] || {};
  failedPoints[row][col] = true;
  return false;
}

console.time('DP');
console.log(robotPathDP(grid))
console.timeEnd('DP');
