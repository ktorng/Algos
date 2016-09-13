/*
  Write a recursive function to multiply 2 positive integers without using
  the * operator. Try to minimize the number of operations
*/

// runs in O(log smaller) time
function minProduct(a, b) {
  const bigger = a > b ? a : b;
  const smaller = a > b ? b : a;
  return minProductHelper(smaller, bigger);
}

function minProductHelper(smaller, bigger) {
  if (smaller === 0) return 0;
  if (smaller === 1) return bigger;

  const s = smaller >> 1; // shift right by 1 (divide by 2)
  const halfProd = minProductHelper(s, bigger);

  if (smaller % 2 === 0) {
    return halfProd + halfProd;
  } else {
    return halfProd + halfProd + bigger;
  }
}

console.log(minProduct(8, 5));
