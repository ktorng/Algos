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

//console.log(numScoreCombinations(1000, [2, 3, 7,]));

// with DP
function numScoreCombinationsDP(score, options) {
  console.time('DP')
  var combinations = new Array(options.length);

  // row is the options, column is the score from 0 to score
  for(var i = 0; i < combinations.length; i++) {
    combinations[i] = new Array(score+1).fill(0);
  }

  for(var option = 0; option < options.length; option++) {
    combinations[option][0] = 1;
    for(var currentScore = 1; currentScore <= score; currentScore++) {
      var withoutPlay, withPlay;
      if(option - 1 >= 0) {
        withoutPlay = combinations[option-1][currentScore];
      } else {
        withoutPlay = 0;
      }

      if(currentScore >= options[option]) {
        withPlay = combinations[option][currentScore - options[option]];
      } else {
        withPlay = 0;
      }

      combinations[option][currentScore] = withoutPlay + withPlay;
    }
  }

  console.timeEnd('DP')
  return combinations[options.length-1][score];
}

console.log(numScoreCombinationsDP(10000, [2, 3, 7, 15, 20]));
