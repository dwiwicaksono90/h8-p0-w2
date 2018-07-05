function bandingkanAngka(angka1, angka2) {
  var nilai;
  if (angka1 > angka2){
    nilai = false;
  }
  else if (angka1 < angka2){
    nilai = true;
  }
  else {
    nilai = -1;
  }
  return nilai;
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
