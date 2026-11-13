import { SupabaseClient } from '@supabase/supabase-js';
import { Extra, Post, RType } from './types';
export const SELECT = '*, author:profiles!author_id(id,full_name,username,avatar_url), media:post_media(url,media_type,position), shared:posts!shared_post_id(id,content,author:profiles!author_id(full_name,username))';
export async function loadExtras(sb: SupabaseClient, rows: Post[], meId: string) {
  const ex: Record<string, Extra> = {}; const ids = rows.map((p) => p.id);
  rows.forEach((p) => (ex[p.id] = { counts: {}, mine: null, comments: 0 }));
  if (ids.length) {
    const [r, c] = await Promise.all([sb.from('reactions').select('post_id,type,user_id').in('post_id', ids), sb.from('comments').select('post_id').in('post_id', ids)]);
    r.data?.forEach((x: any) => { const e = ex[x.post_id]; e.counts[x.type as RType] = (e.counts[x.type as RType] ?? 0) + 1; if (x.user_id === meId) e.mine = x.type as RType; });
    c.data?.forEach((x: any) => { ex[x.post_id].comments++; });
  }
  return ex;
}
