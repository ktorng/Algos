// n is number of eggs
// k is number of floors
function eggDropBottomUp(eggs, floors) {
  const drops = new Array(eggs+1);
  for (let i = 0; i <= eggs; i++) {
    drops[i] = new Array(floors+1).fill(0);
  }

  for(var i = 0; i <= floors; i++) {
    drops[1][i] = i;
  }

  for(var egg = 2; egg <= eggs; egg++) {
    drops[egg][1] = 1;
    for(var floor = 2; floor <= floors; floor++) {

      min = Infinity;

      for (let i = 1; i <= floor; i++) {
        const noBreak = drops[egg][floor-i];
        const yesBreak = drops[egg-1][i-1];
        min = Math.min(Math.max(noBreak, yesBreak) + 1, min);
      }

      drops[egg][floor] = min;
    }
  }

  return drops[eggs][floors];
}

console.time('eggDropBottomUp')
console.log(eggDropBottomUp(2, 1000))
console.timeEnd('eggDropBottomUp')

const cache = {};
function eggDropTopDown(n, k) {
  const key = `${n},${k}`;
  if (cache[key]) return cache[key];
  if (k === 1 || k === 0) return k;
  if (n === 1) return k;

  let min = Infinity;

  for (let i = 1; i <= k; i++) {
    min = Math.min(Math.max(eggDropTopDown(n, k-i), eggDropTopDown(n-1, i-1)), min);
  }

  return cache[key] = min + 1;
}

console.time('eggDropTopDown')
console.log(eggDropTopDown(2, 1000))
console.timeEnd('eggDropTopDown')
