function konversiMenit(menit) {
  var hh;
  var mm;

  hh = Math.floor(menit/60);
  mm = menit % 60 ;
  if (mm < 10){
    mm = '0' + mm ;
  }
  return  hh + ':' + mm ;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
