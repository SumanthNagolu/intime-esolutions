import { createClient } from './server';

/**
 * Temporary wrapper for CRM tables until types are regenerated
 * This bypasses TypeScript errors for tables not yet in the generated types
 */
export async function getCRMClient() {
  const supabase = await createClient();
  return supabase as any;
}
