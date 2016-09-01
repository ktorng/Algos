// URLify a string, replacing spaces in the string with %20
function urlify(str) {
  return str.trim().replace(/\s/g, '%20');
}

console.log(urlify('Mr John Smith     ') === 'Mr%20John%20Smith' ); //=> true
