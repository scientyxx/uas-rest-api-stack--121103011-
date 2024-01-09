# UAS Docker REST API STACK 

## Membuat Repositori Lokal

### 1. Membuat Repositori:

Clone repository yang sudah dibuat

```bash
git clone https://github.com/scientyxx/uas-rest-api-stack--121103011-.git
```

### 2. Masuk ke Direktori Proyek:

Pindah ke direktori proyek menggunakan terminal atau command prompt.

```bash
cd uas-rest-api-stack--121103011-
```
## Mengatur REST API dan Database

### Atur API

Memasukkan file Dockerfile yang sudah dibuat sebelumnya

### Atur Konfigurasi Database:

Membuat docker-compose.yaml

## Jalankan Docker Compose:

Gunakan perintah berikut untuk menjalankan kontainer.

```bash
docker-compose up --build
```
Ini akan membuat dan menjalankan kontainer Docker untuk layanan database dan REST API.
Tunggu Hingga Selesai:
Docker Compose akan membuat dan mengkonfigurasi kontainer. Tunggu hingga proses selesai.


## Akses REST API:

### Akses REST API dari dalam kontainer:

```bash
curl http://localhost:3000/users
```

### Akses REST API dari luar kontainer:

 Buka browser atau gunakan alat seperti Postman untuk mengakses 

```bash
http://localhost:3000/users
```

## Operasi CRUD pada REST API
Setelah menjalankan Docker Compose, Anda dapat melakukan operasi CRUD pada REST API.

### Tambah Data (Create):

```bash
curl -X POST http://localhost:3000/users
```

### Dapatkan Data (Read):

```bash
curl http://localhost:3000/users
```

### Perbarui Data (Update):

```bash
curl  http://localhost:3000/users/:id
```

### Hapus Data (Delete):

```bash
curl -X DELETE http://localhost:3000/users/:id
```

### Memberhentikan dan Membersihkan

Untuk memberhentikan dan membersihkan kontainer:

```bash
docker-compose down
```

Ini akan menghentikan dan menghapus kontainer yang telah dibuat. Jika Anda ingin menyimpan volume data, tambahkan opsi -v:

```bash
docker-compose down -v
```