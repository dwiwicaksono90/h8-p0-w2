var nama = 'Dwi';
var peran = 'Penyihir';

if (nama === ''){
  console.log ('Nama harus diisi!');
} else if (peran === ''){
  console.log ('Pilih Peranmu untuk memulai game!');
} else if (peran === 'Ksatria' || peran === 'ksatria' || peran === 'KSATRIA'){
  console.log('Selamat datang di Dunia Proxytia, ' +nama);
  console.log('Hallo ' + peran + ' ' + nama +', kamu dapat menyerang dengan senjatamu!');
} else if (peran === 'Tabib' || peran === 'tabib' || peran === 'TABIB'){
  console.log('Selamat datang di Dunia Proxytia, ' +nama);
  console.log('Hallo ' + peran + ' '  + nama  +', kamu akan membantu temanmu yang terluka');
} else if (peran === 'Penyihir' || peran === 'penyihir' || peran === 'PENYIHIR'){
  console.log('Selamat datang di Dunia Proxytia, ' +nama);
  console.log('Hallo ' + peran  + ' ' + nama  +', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
  console.log ('Pilih Peranmu untuk memulai game!');
}
