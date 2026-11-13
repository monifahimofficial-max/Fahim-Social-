export type Author = { id: string; full_name: string; username: string; avatar_url: string | null };
export type Me = Author;
export type Visibility = 'public' | 'friends' | 'private';
export type Post = {
  id: string; author_id: string; content: string | null; visibility: Visibility; created_at: string; edited_at: string | null;
  shared_post_id: string | null; author: Author; media: { url: string; media_type: 'image' | 'video'; position: number }[];
  shared: { id: string; content: string | null; author: { full_name: string; username: string } } | null;
};
export const REACTIONS = [
  { k: 'like', e: '👍' }, { k: 'love', e: '❤️' }, { k: 'haha', e: '😂' }, { k: 'wow', e: '😮' }, { k: 'sad', e: '😢' },
] as const;
export type RType = (typeof REACTIONS)[number]['k'];
export type Extra = { counts: Partial<Record<RType, number>>; mine: RType | null; comments: number };
