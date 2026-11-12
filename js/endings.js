/**
 * endings.js — picks which ending you earned, and gathers a short recap.
 * The ending list itself (and the rules for each) lives in data/endings.js.
 */
import { ENDINGS } from "./content.js";

/** First ending (top to bottom) whose check passes. The last one always passes. */
export function determineEnding(state) {
  const ending = ENDINGS.find((e) => !e.forced && e.check(state));
  return ending ? ending.id : ENDINGS[ENDINGS.length - 1].id;
}

/**
 * Pick a few memorable moments from the game for the ending screen.
 * Chaotic successes and big backfires are the most memorable.
 */
export function highlights(state, max = 3) {
  const score = (h) => (h.tone === "chaotic" ? 2 : h.tone === "odd" ? 1 : 0) + (h.kind === "backfire" ? 1 : 0) + Math.random();
  return [...state.history].sort((a, b) => score(b) - score(a)).slice(0, max);
}
