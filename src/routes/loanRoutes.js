import express from "express";
import { supabase } from "../config/supabaseClient.js";

const router = express.Router();

// 1. GET /api/loans (Menampilkan semua data & FITUR FILTER QUERY STATUS)
router.get("/", async (req, res) => {
  try {
    const { status } = req.query;
    let query = supabase.from("loans").select("*");

    // Fitur filter query sesuai instruksi soal (Contoh: ?status=Terlambat)
    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. POST /api/loans (Tambah Peminjaman Buku Baru)
router.post("/", async (req, res) => {
  try {
    const { borrower_name, book_title, return_date, status } = req.body;
    const { data, error } = await supabase
      .from("loans")
      .insert([{ borrower_name, book_title, return_date, status }])
      .select();

    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 3. PUT /api/loans/:id (Perbarui Data / Mengubah Status)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("loans")
      .update(req.body)
      .eq("id", id)
      .select();

    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 4. DELETE /api/loans/:id (Hapus Pencatatan Peminjaman)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from("loans").delete().eq("id", id);
    if (error) throw error;
    res.status(200).json({ message: "Data peminjaman berhasil dihapus" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
