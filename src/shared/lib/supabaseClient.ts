import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://osqtkctjmjufuguuxmtl.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcXRrY3RqbWp1ZnVndXV4bXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MTc0NjMsImV4cCI6MjA1ODk5MzQ2M30.kCIKZD_we17Aq_tiKE-UuO6U6pNK14vdRmYI0Y6T7F4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
