import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vfrhmntvgqrenvgnhbvg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmcmhtbnR2Z3FyZW52Z25oYnZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNzYzNTMsImV4cCI6MjAzMjY1MjM1M30.mcOR0r-jm-4q3qc1mcfzrBLQmMK__kjTT3np3KmVLdw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
