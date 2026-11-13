export function timeAgo(iso: string, lang: string, justNow: string) {
  const s = Math.round((new Date(iso).getTime() - Date.now()) / 1000);
  if (Math.abs(s) < 45) return justNow;
  const rtf = new Intl.RelativeTimeFormat(lang === 'bn' ? 'bn' : 'en', { numeric: 'auto' });
  const units: [Intl.RelativeTimeFormatUnit, number][] = [['minute', 60], ['hour', 3600], ['day', 86400], ['week', 604800], ['month', 2592000], ['year', 31536000]];
  let best: [Intl.RelativeTimeFormatUnit, number] = units[0];
  for (const u of units) if (Math.abs(s) >= u[1]) best = u;
  return rtf.format(Math.round(s / best[1]), best[0]);
}
