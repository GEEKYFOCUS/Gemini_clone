import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://vfrhmntvgqrenvgnhbvg.supabase.co";
export const supabaseUrl = "https://jrowbsppmutfskwdxwla.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impyb3dic3BwbXV0ZnNrd2R4d2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3ODg1MDIsImV4cCI6MjA2ODM2NDUwMn0.urttxXcl3bg519VwBZ-V5khfVaCxoLy5aukUWg6MtAA";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmcmhtbnR2Z3FyZW52Z25oYnZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNzYzNTMsImV4cCI6MjAzMjY1MjM1M30.mcOR0r-jm-4q3qc1mcfzrBLQmMK__kjTT3np3KmVLdw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
