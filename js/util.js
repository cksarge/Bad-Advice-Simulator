/**
 * util.js — small helpers shared by the rest of the game.
 */

/** Keep a number between min and max. */
export const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

/** True with probability p (0–1). */
export const chance = (p) => Math.random() < p;

/**
 * Pick one item from a list using weights.
 * @param {Array} items
 * @param {(item) => number} weightOf  returns a weight >= 0 for each item
 */
export function weightedPick(items, weightOf) {
  const total = items.reduce((sum, item) => sum + Math.max(0, weightOf(item)), 0);
  if (total <= 0) return items[Math.floor(Math.random() * items.length)];
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= Math.max(0, weightOf(item));
    if (roll < 0) return item;
  }
  return items[items.length - 1];
}

/** Return a shuffled copy of an array (Fisher–Yates). */
export function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Escape text before inserting it into HTML. All game text goes through this. */
export function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Replace {name} / {NAME} placeholders with the player's pen name. */
export function fillTemplate(text, name) {
  return String(text)
    .replace(/\{NAME\}/g, name.toUpperCase())
    .replace(/\{name\}/g, name);
}

/** Format a stat change like "+3" or "−2". */
export const signed = (n) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : "±0");
