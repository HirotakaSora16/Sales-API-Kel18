import express from "express";
import loanRoutes from "./routes/loanRoutes.js"; // 👈 Mengarah ke rute perpus yang baru

const app = express();
app.use(express.json());

// Daftarkan Endpoint Utama Peminjaman Buku
app.use("/api/loans", loanRoutes);

// Halaman utama agar Vercel tidak memunculkan "Cannot GET /"
app.get("/", (req, res) => {
  res.send("REST API Sistem Peminjaman Perpustakaan Aktif 🟢");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server responsi berjalan di port ${PORT}`);
});
