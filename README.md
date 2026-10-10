# 📚 Library Loan (Pencatatan Peminjaman Buku Perpustakaan) REST API

Layanan REST API sederhana untuk mengelola dan mencatat data transaksi peminjaman buku oleh anggota perpustakaan secara real-time.

## 🛠️ Tech Stack & Database
- **Backend Framework:** Node.js & Express.js
- **Database Cloud:** Supabase (PostgreSQL)
- **Deployment Platform:** Vercel

## 🗃️ Struktur Data / Skema Tabel (`loans`)

| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `id` | UUID (Primary Key) | Identifikasi unik setiap transaksi peminjaman |
| `borrower_name` | VARCHAR | Nama lengkap anggota perpustakaan |
| `book_title` | VARCHAR | Judul buku yang dipinjam |
| `borrow_date` | DATE | Tanggal peminjaman (Default: Hari Ini) |
| `return_date` | DATE | Tanggal target pengembalian buku |
| `status` | VARCHAR | Status buku (`Dipinjam`, `Kembali`, `Terlambat`) |

## 🚀 Endpoint REST API (Request & Response)
1. **Melihat Semua Peminjaman / Fitur Filter Query Status**
   - **Endpoint:** `GET /api/loans` atau `GET /api/loans?status=Terlambat`
   - **Response (200 OK):** Menampilkan data array JSON peminjaman buku.
2. **Menambah Peminjaman Baru**
   - **Endpoint:** `POST /api/loans`
   - **Body (JSON):** `{"borrower_name": "Rudi", "book_title": "Kancil", "status": "Dipinjam"}`
3. **Mengubah Data Peminjaman**
   - **Endpoint:** `PUT /api/loans/:id`
   - **Body (JSON):** `{"status": "Kembali"}`
4. **Menghapus Pencatatan Peminjaman**
   - **Endpoint:** `DELETE /api/loans/:id`

## 💻 Panduan Instalasi Lokal
1. Install semua dependensi menggunakan perintah: `npm install`.
2. Jalankan aplikasi lokal dengan perintah: `npm run dev`.
3. Akses API lokal melalui alamat: `http://localhost:3000`.
