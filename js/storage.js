/**
 * storage.js — saving and loading, wrapped so the game still works when
 * localStorage is unavailable (private browsing, blocked cookies, file:// quirks…).
 *
 * If storage fails, everything falls back to an in-memory object: the game is
 * fully playable, it just won't remember anything after the tab closes.
 */

const SAVE_KEY = "bad-advice-simulator:save:v1";
const HALL_KEY = "bad-advice-simulator:hall-of-fame:v1";

const memoryFallback = {};
let storageWorks = true;

function rawGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    storageWorks = false;
    return memoryFallback[key] ?? null;
  }
}

function rawSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    storageWorks = false;
    memoryFallback[key] = value;
  }
}

function rawRemove(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    storageWorks = false;
  }
  delete memoryFallback[key];
}

function readJson(key) {
  const raw = rawGet(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null; // corrupted save: treat as missing
  }
}

/** Is browser storage actually persisting? (Checked with a test write.) */
export function isStorageAvailable() {
  rawSet("bad-advice-simulator:probe", "1");
  rawRemove("bad-advice-simulator:probe");
  return storageWorks;
}

// ── Current game ────────────────────────────────────────────────────────────
export const saveGame = (state) => rawSet(SAVE_KEY, JSON.stringify(state));
export const loadGame = () => readJson(SAVE_KEY);
export const clearGame = () => rawRemove(SAVE_KEY);

// ── Hall of Fame (survives across games) ────────────────────────────────────
/** @returns {{ [endingId]: { count: number, first: string, name: string, day: number } }} */
export const loadHallOfFame = () => readJson(HALL_KEY) ?? {};

/**
 * Record an ending. Returns true if this is the first time it was unlocked.
 */
export function unlockEnding(endingId, { name, day }) {
  const hall = loadHallOfFame();
  const isNew = !hall[endingId];
  const entry = hall[endingId] ?? { count: 0, first: new Date().toISOString(), name, day };
  entry.count += 1;
  hall[endingId] = entry;
  rawSet(HALL_KEY, JSON.stringify(hall));
  return isNew;
}
