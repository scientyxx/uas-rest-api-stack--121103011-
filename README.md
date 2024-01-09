# Menjalankan Docker Compose untuk REST API dan Database

## Persyaratan

Pastikan Anda telah menginstal Docker dan Docker Compose di mesin Anda.

## Langkah-langkah

### 1. Unduh Repositori:

Clone atau unduh repositori proyek dari [URL Repositori].

### 2. Masuk ke Direktori Proyek:

Pindah ke direktori proyek menggunakan terminal atau command prompt.

```bash
cd path/to/project
```
# Atur Konfigurasi Database:
## Buka file docker-compose.yml dan pastikan konfigurasi database sesuai dengan preferensi Anda.

# Jalankan Docker Compose:
# Gunakan perintah berikut untuk menjalankan kontainer.

```bash
Copy code
docker-compose up --build
#Ini akan membuat dan menjalankan kontainer Docker untuk layanan database dan REST API.
# Tunggu Hingga Selesai:
# Docker Compose akan membuat dan mengkonfigurasi kontainer. Tunggu hingga proses selesai.
```


# Akses REST API:

## Akses REST API dari dalam kontainer:
```bash
Copy code
curl http://localhost:3000/users
```
## Akses REST API dari luar kontainer:
## Buka browser atau gunakan alat seperti Postman untuk mengakses 

```bash
http://localhost:3000/users
```

# Operasi CRUD pada REST API
## Setelah menjalankan Docker Compose, Anda dapat melakukan operasi CRUD pada REST API.

## Tambah Data (Create):
```bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}' http://localhost:3000/users
```

## Dapatkan Data (Read):
```bash
Copy code
curl http://localhost:3000/users
```

## Perbarui Data (Update):
```bash
Copy code
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name", "email": "updated.email@example.com"}' http://localhost:3000/users/1
```

## Hapus Data (Delete):
```bash
Copy code
curl -X DELETE http://localhost:3000/users/1
```

# Memberhentikan dan Membersihkan
## Untuk memberhentikan dan membersihkan kontainer:

```bash
Copy code
docker-compose down
```

## Ini akan menghentikan dan menghapus kontainer yang telah dibuat. Jika Anda ingin menyimpan volume data, tambahkan opsi -v:
```bash
Copy code
docker-compose down -v
```