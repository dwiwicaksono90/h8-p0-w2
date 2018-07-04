// 1. Menyusun Barisan Bintang

var rows1 = 5;

while (rows1){
  console.log('*');
  rows1 -= 1;
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;

var bintang ='';
var counter = rows2;
while (rows2){
  while (counter){
  bintang = bintang + '*' ;
  counter -= 1;
  }
  console.log(bintang);
  rows2 -= 1;
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5 ;

var bintang2 = '' ;
while (rows3 > 0){
  bintang2 = bintang2 + '*';
  console.log(bintang2);
  rows3 -= 1;
}
