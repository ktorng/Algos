// implement a method to perform basic string compression using counts of
// repeated characters
// if "compressed" string would not become shorter than original string,
// return the original string
function stringCompression(str) {
  if (str === '') return str;

  const compressed = str.split('').reduce((res, e, i, arr) => {
    if (!res[res.length - 2] || e !== res[res.length - 2]) {
      res.push(e);
      res.push(1);
    } else {
      res[res.length - 1]++;
    }
    return res;
  }, []).join('');

  return compressed.length > str.length ? str : compressed;
}

console.log(stringCompression('aabcccccaaa')); //=> 'a2b1c5a3'
console.log(stringCompression('abcaa')); //=> 'abcaa'
