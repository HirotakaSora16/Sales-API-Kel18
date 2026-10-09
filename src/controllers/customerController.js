import { supabase } from "../config/supabaseClient.js";

// 1. Menambahkan Customer Baru
export const createCustomer = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const { data, error } = await supabase
      .from("customers")
      .insert([{ name, email, phone }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 2. Mengambil Semua Data Customer
export const getCustomers = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("customers")
      .select("*");

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
