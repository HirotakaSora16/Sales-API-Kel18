import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://udpxukghrgmtyujjvaft.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkcHh1a2docmdtdHl1amp2YWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2MTQ3OTUsImV4cCI6MjEwNzE5MDc5NX0.RwWYmXLLlsjHm-hBmxZhXCIaBAJFeob9av4a9uqXER8";

export const supabase = createClient(supabaseUrl, supabaseKey);
