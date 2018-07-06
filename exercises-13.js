function xo(str) {
var x = 0;
var o= 0;
  var jml = str.length ;
  var jmlh = jml - 1;
  while (jml > 0){
    if (str.charAt(jmlh) === 'x'){
      x += 1;
    } else {
      o += 1;
    }
    jml -= 1;
    jmlh -=1;
  }
  if (x === o){
    return true ;
  } else {
    return false ;
  }

}

// TEST CASES
console.log(xo('xo'));
// console.log(xo('xoxoxo')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true
