Langkah-Langkah Menjalankan Backend
1. Clone Repository
  Clone repo ke komputer:

  git clone https://github.com/username/repository-name.git
  cd repository-name
  
2. Install Dependencies
  Install dependencies dengan npm:
  
  Salin kode
  npm install
  
3. Konfigurasi Database
    Jalankan XAMPP, aktifkan Apache dan MySQL.
    Buat database pekerjaan_harian di phpMyAdmin.
    Import file database.sql ke database pekerjaan_harian.
    Edit file .env:
    
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=pekerjaan_harian
   
4. Menjalankan Server
   nodemon bin/www

5. Menguji Backend di Postman
