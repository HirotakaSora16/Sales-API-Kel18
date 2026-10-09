import { createClient } from "@supabase/supabase-js";

// ✅ SUDAH DIPERBAIKI: Menggunakan Project ID unik database Sales-API Anda
const supabaseUrl = "https://oyqakcgqkzrtyxaokbjo.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95cWFrY2dxa3pydHl4YW9rYmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyNzAwNDgsImV4cCI6MjEwNjg0NjA0OH0.QY9Z_KaC2CNLzrh1oWmddxJtXmIcjd6H8HD06-xSZZI";

export const supabase = createClient(supabaseUrl, supabaseKey);
