// 1. Melakukan Looping Menggunakan While

var counter = 2;

console.log('LOOPING PERTAMA');
while (counter <= 20){
  console.log(counter + ' - ' + 'I love coding');
  counter += 2;
}

var counter2 = 20;

console.log('LOOPING KEDUA');
while (counter2 > 0){
  console.log(counter2 + ' - ' + 'I will become fullstack developer');
  counter2 -= 2;
}

// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
for (var counter3 = 1; counter3 <= 20; counter3++){
  console.log(counter3 + ' - ' + 'I love coding');
}

console.log ('LOOPING KEDUA');
for (var counter4 = 20; counter4 >= 1; counter4--){
  console.log(counter4 + ' - ' + 'I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap

var counter5 = 1;

while (counter5 <= 100){
  if (counter5 % 2 === 0){
    console.log('GENAP');
    counter5 +=1;
  } else {
    console.log('GANJIL');
    counter5 +=1;
  }
}

        // kelipatan 3 dengan pertambahan 2

var counter6 = 1;

while (counter6 <= 100){
  if (counter6 % 3 === 0){
    console.log(counter6 + ' KELIPATAN 3');
  }
  counter6 +=2 ;
}

      // kelipatan 6 dengan pertambahan 5

  var counter7 = 1;

  while (counter7 <=100){
    if (counter7 % 6 === 0){
      console.log(counter7 + ' KELIPATAN 6');
    }
    counter7 +=5 ;
  }

      // kelipatan 10 dengan pertambahan 9

    var counter8 = 1;

    while (counter8 <=100){
      if (counter8 % 10 === 0){
        console.log(counter8 + ' KELIPATAN 10');
      }
      counter8 +=9 ;
    }
