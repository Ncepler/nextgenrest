import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client for the `contact_submissions` insert in
 * app/contact/actions.ts. Uses the anon key — the table has an
 * insert-only RLS policy for the `anon` role (no service-role key is
 * available in this environment), so this is safe to use from a Server
 * Action without ever shipping a key to the browser bundle.
 */
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}
