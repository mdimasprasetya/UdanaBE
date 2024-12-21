Langkah-Langkah Menjalankan Backend
1. Clone Repository
  Clone repo ke komputer:

  -  git clone

     https://github.com/mdimasprasetya/UdanaBE.git
  
  -  masukan ke directory

     cd udana
  
2. Install Dependencies
  Install dependencies dengan npm:

   - Masukan Kode ini di terminal :
   
      npm install
  
4. Konfigurasi Database

   Jalankan:

   -  XAMPP, Apache dan MySQL.

   -  Buat database pekerjaan_harian di phpMyAdmin.

   -  Import file database.sql ke database pekerjaan_harian.

5.Edit file .env:
    
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=pekerjaan_harian
   
6. Menjalankan Server
   
   nodemon bin/www atau nodemon start (bisa liat di package.json)

8. Menguji Backend di Postman

   - Post Data

     http://localhost:3000/pekerjaan

   -  Get Data
  
     http://localhost:3000/pekerjaan/()  <= isi dengan id keberapa yang datanya ingin di ambil

   -  Put Data/Edit Data
  
     http://localhost:3000/pekerjaan/5 <= Contoh disini saya mengambil data id ke 5 dan siap untuk di edit dengan memasukan input baru

   -  Delete Data
  
     http://localhost:3000/pekerjaan/4 <= Contoh disini saya mengambik data ke 4 dan send makan data akan terhapus di database 
