import { supabase } from "../config/supabaseClient.js";

// 1. Menambahkan Produk Baru
export const createProduct = async (req, res) => {
  const { name, price, stock, category_id } = req.body;
  try {
    const { data, error } = await supabase
      .from("products")
      .insert([{ name, price, stock, category_id }])
      .select();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 2. Mengambil Semua Data Produk
export const getProducts = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
