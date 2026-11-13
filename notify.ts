import { SupabaseClient } from '@supabase/supabase-js';
export const notify = (sb: SupabaseClient, userId: string, actorId: string, type: string, postId?: string) =>
  sb.from('notifications').insert({ user_id: userId, actor_id: actorId, type, post_id: postId ?? null });
export const refreshCounts = () => window.dispatchEvent(new Event('counts:refresh'));
