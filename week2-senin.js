1. Newton second law
  Algoritma
  ---------
    1. simpan massa = 600
    2. simpan percepatan = 2
    3. resultan didapat dari nilai massa dikali nilai percepatan

  Pseudocode
  ----------
    STORE 'massa' = 600
    STORE  'percepatan' = 2
    STORE 'resultan' without any value

    CALCULATE 'massa' times 'percepatan'
    SET 'resultan' value with calculation result

    DISPLAY 'resultan'


2. Tahun Kabisat
  algoritma
  ---------
    1. simpan tahun with any value
    2. - jika tahun habis dibagi 4 dan tahun tidak habis dibagi 100 maka tampilkan 'TAHUN KABISAT'
       - Namun jika tahun habis dibagi 4 dan tahun habis dibagi 100 dan tahun habis dibagi 400 maka tampilkan 'TAHUN KABISAT'
       - selain itu tampilkan 'BUKAN TAHUN KABISAT'

  Pseudocode
  ----------
    STORE 'tahun' with any value number

    IF CALCULATE 'tahun' mod 4 equals to 0
      IF CALCULATE 'tahun' mod 100 not equals to 0
        DISPLAY 'TAHUN KABISAT'
      ELSE
        IF CALCULATE 'tahun' mod 400 equals to 0
          DISPLAY 'TAHUN KABISAT'
        ELSE
          DISPLAY 'BUKAN TAHUN KABISAT'
      END IF
    ELSE
      DISPLAY 'BUKAN TAHUN KABISAT'
    END IF


3. Laundry day
  algoritma
  ---------
    1. simpan jumlahpakaian = 20
    2. simpan nilai counter dimulai dari 0
    3. lakukan selama counter lebih kecil dibanding jumlahpakaian
      3a. - counter ditambah 1
      3b. - lanjut ke step 4
    4. tampilkan 'NYALAKAN MESIN'
    5. program selesai

  Pseudocode
  -----------
  STORE 'jumlahpakaian' with 20
  STORE 'counter' with 0

  WHILE 'counter' < 'jumlahpakaian' DO
    SET 'counter' = 'counter' +1

    DISPLAY 'NYALAKAN MESIN'

4. Periksa Kuku
  algoritma
  ---------
    1. simpan jumlahsiswa = 40
    2. simpan nilai counter dimulai dari 0
    3. lakukan selama counter lebih kecil dibanding jummlahsiswa
      3a. - masukan nilai kukupanjang
          - simpan nilai kukupanjang
          3aa. - jika kukupanjang = yes tampilkan 'hukum siswa'
               - counter ditambah 1
          3ab. - jika tidak tampilkan 'puji siswa'
               - counter ditambah 1
      3b. lanjut ke step 4
    4. program selesai

  Pseudocode
  ----------
  STORE 'jumlahsiswa' with 40
  STORE 'counter' with 0

  WHILE 'counter' < 'jumlahsiswa'
    INPUT 'kukupanjang' (yes or no)
    STORE 'kukupanjang' with input result
    IF 'kukupanjang' = yes DO
      DISPLAY 'hukum siswa'
      SET 'counter' = 'counter' +1
    ELSE
      DISPLAY 'puji siswa'
      SET 'counter' = 'counter' +1
    END IF
