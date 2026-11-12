/**
 * balance.js — all the tuning knobs in one place.
 *
 * Every advice option has a `tone`: "sensible", "odd", or "chaotic".
 * The tone decides, unless the option overrides it:
 *   odds      chance (0–1) that the advice ends in its `success` outcome instead of `backfire`
 *   choice    stat change applied the moment the column is published
 *   success   stat change applied when a success outcome is revealed
 *   backfire  stat change applied when a backfire outcome is revealed
 *
 * Stats are Readership, Reputation and Chaos, each clamped to 0–100.
 * Letters can override any of this per option (`odds`, `stats`) or per outcome (`stats`).
 */
export const START_STATS = { readership: 35, reputation: 50, chaos: 10 };

/** Number of normal letters that land on the desk each day (event letters are extra). */
export const LETTERS_PER_DAY = 3;

/** Length of a standard game. "Endless" mode ignores this. */
export const FINITE_DAYS = 14;

/** Readers forget you a little every morning. Keeps things moving. */
export const DAILY_READERSHIP_DECAY = 2;

/** In endless mode a repeatable letter can come back after this many days. */
export const REPEAT_COOLDOWN_DAYS = 10;

/** At most this many one-off "townsfolk" letters per day, so storylines get room. */
export const MAX_TOWNSFOLK_PER_DAY = 2;

export const TONES = {
  sensible: {
    odds: 0.75,
    choice: { readership: 0, reputation: 1, chaos: -1 },
    success: { readership: 1, reputation: 2, chaos: 0 },
    backfire: { readership: 0, reputation: -2, chaos: 1 },
  },
  odd: {
    odds: 0.5,
    choice: { readership: 1, reputation: 0, chaos: 0 },
    success: { readership: 0, reputation: 1, chaos: 0 },
    backfire: { readership: 0, reputation: -1, chaos: 1 },
  },
  chaotic: {
    odds: 0.3,
    choice: { readership: 1, reputation: -1, chaos: 2 },
    success: { readership: 1, reputation: 3, chaos: 0 },
    backfire: { readership: 1, reputation: -2, chaos: 1 },
  },
};

/**
 * How many days later an outcome shows up in "Reader Updates", as [days, weight] pairs.
 * Most results arrive the next morning; some take 2–3 days for a surprise.
 * An outcome can force its own timing with `delay: <days>`.
 */
export const DELAY_WEIGHTS = [
  [1, 62],
  [2, 26],
  [3, 12],
];
