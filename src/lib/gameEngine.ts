import type { EvoPuzzle } from '../data/puzzles';

/**
 * Deterministic PRNG (Mulberry32) so every user worldwide gets
 * the exact same 5 Daily EvoGuess puzzles for a given UTC date,
 * with zero backend database required.
 */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function getUtcDateKey(date = new Date()): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getDailyPuzzleNumber(date = new Date()): number {
  const epoch = Date.UTC(2026, 0, 1);
  const current = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return Math.max(1, Math.floor((current - epoch) / 86400000) + 1);
}

export function hashDateKey(dateKey: string): number {
  let h = 2166136261;
  for (let i = 0; i < dateKey.length; i++) {
    h ^= dateKey.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pickDailyPuzzles(
  pool: EvoPuzzle[],
  count = 5,
  dateKey = getUtcDateKey(),
  salt = 'daily',
): EvoPuzzle[] {
  const rand = mulberry32(hashDateKey(`${dateKey}:${salt}`));
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

export function buildShareText(params: {
  puzzleNumber: number;
  results: boolean[];
  streak: number;
  modeTitle?: string;
}): string {
  const { puzzleNumber, results, streak, modeTitle } = params;
  const score = results.filter(Boolean).length;
  const grid = results.map((ok) => (ok ? '🌿' : '🦴')).join('');
  const header = modeTitle
    ? `🧬 EvoGuess (${modeTitle}) — ${score}/${results.length}`
    : `🧬 EvoGuess #${puzzleNumber} — ${score}/${results.length}`;
  return `${header}\n${grid}\n🔥 Streak: ${streak}\nhttps://evoguess.com`;
}
