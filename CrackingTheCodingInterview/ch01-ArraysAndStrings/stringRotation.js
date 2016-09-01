// determine if strB is a rotation of strA using only one call to isSubString
// used String method includes
function stringRotation(strA, strB) {
  return (strA + strA).includes(strB);
}

console.log(stringRotation('waterbottle', 'erbottlewat')); //=> true
