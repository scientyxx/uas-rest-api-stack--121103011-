# Menggunakan base image Node.js versi 14
FROM node:lts-alpine

# Membuat direktori
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Mengatur direktori kerja
WORKDIR /home/node/app

# Menyalin package.json dan package-lock.json ke dalam container
COPY ["package.json", "package-lock.json*", "./"]

# Menginstal dependensi yang diperlukan
RUN npm install

# Menambahkan MySQL client ke dalam gambar
RUN apk add --no-cache mysql-client

# Menyalin seluruh kode sumber aplikasi ke dalam container
COPY --chown=node:node . .

# Menetapkan PORT yang akan digunakan oleh aplikasi
ENV PORT=3000

# Menambahkan path /usr/bin ke dalam variabel lingkungan PATH
ENV PATH=$PATH:/usr/bin

# Menjalankan aplikasi saat container dijalankan
CMD [ "npm", "start" ]
