/**
 * state.js — the shape of a saved game, plus helpers for stats and flags.
 *
 * The whole game lives in one plain object so it can be saved as JSON.
 * Nothing in here touches the DOM.
 */
import { START_STATS } from "../data/balance.js";
import { clamp } from "./util.js";

export const SAVE_VERSION = 1;
export const STAT_KEYS = ["readership", "reputation", "chaos"];

/**
 * @param {string} name   the player's pen name
 * @param {"standard"|"endless"} mode
 */
export function createState(name, mode) {
  return {
    version: SAVE_VERSION,
    name,
    mode,
    day: 1,
    phase: "morning", // "morning" → "desk" → (publish) → "morning" … → "ending"
    stats: { ...START_STATS },
    flags: {}, // story flags, e.g. { gus_lighthouse: true }
    seen: {}, // letterId → day it was last on the desk
    resolved: {}, // letterId → day its outcome was revealed
    pending: [], // outcomes waiting to appear in a future morning paper
    eventsSeen: {}, // eventId → day it last happened
    desk: [], // today's letters: [{ letterId, choice: optionIndex | null }]
    morning: null, // the morning paper currently being shown
    history: [], // every revealed outcome, for the ending recap
    pendingEnding: null, // set when the game is about to end
    endingId: null,
  };
}

/**
 * Add a stat change, clamping each stat to 0–100.
 * Returns the change that actually happened (after clamping), for display.
 */
export function applyDelta(state, delta = {}) {
  const applied = {};
  for (const key of STAT_KEYS) {
    const before = state.stats[key];
    state.stats[key] = clamp(before + (delta[key] ?? 0), 0, 100);
    applied[key] = state.stats[key] - before;
  }
  return applied;
}

/** Add two deltas together (used to show one combined change). */
export function sumDeltas(...deltas) {
  const total = { readership: 0, reputation: 0, chaos: 0 };
  for (const d of deltas) for (const key of STAT_KEYS) total[key] += d?.[key] ?? 0;
  return total;
}

export const setFlags = (state, flags = []) => flags.forEach((f) => (state.flags[f] = true));
export const hasAll = (state, flags = []) => flags.every((f) => state.flags[f]);
export const hasAny = (state, flags = []) => flags.some((f) => state.flags[f]);

/** Is this a save file we know how to read? */
export const isValidSave = (s) =>
  !!s && s.version === SAVE_VERSION && typeof s.day === "number" && s.stats && Array.isArray(s.desk);
