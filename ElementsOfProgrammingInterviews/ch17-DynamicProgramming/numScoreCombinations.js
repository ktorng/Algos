// count number of combinations that yield a given score
// ex: 4 combinations to yield a score of 12 given possibly point values of 2, 3, 7 in football

// without DP
function numScoreCombinations(score, pointsArray) {
  console.time("withoutDP")
  let count = 0;

  const buildCombos = (total, pointsIdx) => {
    if (total === score) {
      count++;
    } else if (total < score) {
      for (let i = pointsIdx; i < pointsArray.length; i++) {
        buildCombos(total + pointsArray[i], i);
      }
    }
  }

  buildCombos(0, 0);
  console.timeEnd("withoutDP")
  return count;
}

console.log(numScoreCombinations(1000, [2, 3, 7]));

// with DP
function numScoreCombinationsDP(score, pointsArray) {
  console.time("withDP")
  const cache = new Map();

  const buildCombos = (curr, arr) => {
    const key = `${curr} ${arr}`;
    if (cache[curr] && cache[curr][arr]) return cache[curr][arr];
    if (!cache[curr]) cache[curr] = new Map();

    if (curr === score) {
      cache[curr][arr] = 1;
    } else if (curr < score) {
      cache[curr][arr] = arr
        .map((e, i) => buildCombos(curr + e, arr.slice(i)))
        .reduce((sum, e) => sum += e);
    } else {
      cache[curr][arr] = 0;
    }
    return cache[curr][arr];
  }

  console.timeEnd("withDP")
  return buildCombos(0, pointsArray);
}

console.log(numScoreCombinationsDP(1000, [2, 3, 7]));
