import { createClient } from '@/lib/supabase/server';
import { Me } from '@/lib/types';
export async function getMe(): Promise<Me> {
  const sb = createClient();
  const { data: { user } } = await sb.auth.getUser();
  const { data } = await sb.from('profiles').select('id,full_name,username,avatar_url').eq('id', user!.id).single();
  return data as Me;
}
