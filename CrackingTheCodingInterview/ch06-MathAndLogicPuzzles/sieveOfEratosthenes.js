// return list of primes up to a given number
function sieve(n) {
  const array = [];
  const upperLimit = Math.sqrt(n);
  const output = [];

  // make an array from 0 to (n-1)
  for (let i = 0; i < n; i++) {
    array.push(true);
  }

  // remove multiplies of primes starting from 2, 3, 5
  for (let i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  // all array[i] set to true are primes
  for (let i = 2; i < n; i++) {
    if (array[i]) output.push(i);
  }

  return output;
}

console.log(sieve(100))
