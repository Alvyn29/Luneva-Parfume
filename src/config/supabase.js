import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  'https://xfknidjphbpuuzqixnkt.supabase.co';

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhma25pZGpwaGJwdXV6cWl4bmt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMDQzMTIsImV4cCI6MjA5NTg4MDMxMn0.b8Y-GDEJnX6048nnQeNxA5SY1JQiklgRdZTNWWQLggI';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);