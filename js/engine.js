/**
 * engine.js — the rules of the game. No DOM in here, so it can be tested in Node.
 *
 * The daily loop:
 *   buildMorning()   reveal due outcomes, maybe trigger an event, deal today's letters
 *   chooseAdvice()   the player picks an option for each letter on the desk
 *   publishColumn()  lock in choices, roll each outcome + its delay, advance the day
 *   …and around again until the game ends.
 */
import {
  LETTERS_PER_DAY,
  FINITE_DAYS,
  DAILY_READERSHIP_DECAY,
  REPEAT_COOLDOWN_DAYS,
  MAX_TOWNSFOLK_PER_DAY,
  TONES,
  DELAY_WEIGHTS,
} from "../data/balance.js";
import { FILLER } from "../data/filler.js";
import { WELCOME_ARTICLE, FINAL_ARTICLE } from "../data/events.js";
import { LETTERS, LETTER_BY_ID, EVENTS } from "./content.js";
import { createState, applyDelta, sumDeltas, setFlags, hasAll, hasAny } from "./state.js";
import { determineEnding } from "./endings.js";
import { chance, weightedPick, shuffle } from "./util.js";

// ─────────────────────────────────────────────────────────────────────────────
// Starting and ending
// ─────────────────────────────────────────────────────────────────────────────

/** Start a brand-new game and prepare the first morning. */
export function newGame(name, mode) {
  const state = createState(name, mode);
  buildMorning(state);
  return state;
}

export const isEndless = (state) => state.mode === "endless";

/** Total days in this game, or Infinity for endless mode. */
export const totalDays = (state) => (isEndless(state) ? Infinity : FINITE_DAYS);

/** Lock in the ending (called when the player clicks through to it). */
export function finishGame(state) {
  state.endingId = state.pendingEnding ?? determineEnding(state);
  state.phase = "ending";
  return state.endingId;
}

/** Endless mode: retire whenever you like and see which ending you earned. */
export function retire(state) {
  state.pendingEnding = determineEnding(state);
  return finishGame(state);
}

// ─────────────────────────────────────────────────────────────────────────────
// The desk
// ─────────────────────────────────────────────────────────────────────────────

/** Record (or change) the player's answer to a letter on today's desk. */
export function chooseAdvice(state, letterId, optionIndex) {
  const slot = state.desk.find((d) => d.letterId === letterId);
  if (slot) slot.choice = optionIndex;
}

export const answeredCount = (state) => state.desk.filter((d) => d.choice !== null).length;
export const isDeskComplete = (state) => state.desk.length > 0 && answeredCount(state) === state.desk.length;

/**
 * Publish today's column: apply each choice's immediate effect, roll its outcome
 * (success/backfire) and when it will be reported, then move to the next morning.
 * Returns a summary of what was published (for the "stamp" animation).
 */
export function publishColumn(state) {
  const published = [];
  let totalDelta = {};

  for (const { letterId, choice } of state.desk) {
    const letter = LETTER_BY_ID[letterId];
    const option = letter.options[choice];
    const tone = TONES[option.tone];

    // Immediate effect of printing this advice.
    const delta = applyDelta(state, option.stats ?? tone.choice);
    totalDelta = sumDeltas(totalDelta, delta);
    setFlags(state, option.setFlags);

    // Decide now how it will turn out (stored, so reloading can't re-roll it).
    const odds = option.odds ?? tone.odds;
    const kind = chance(odds) ? "success" : "backfire";
    const delay = option[kind].delay ?? weightedPick(DELAY_WEIGHTS, ([, w]) => w)[0];

    state.pending.push({ letterId, optionIndex: choice, kind, answeredDay: state.day, dueDay: state.day + delay });
    state.seen[letterId] = state.day;
    published.push({ letterId, optionIndex: choice });
  }

  state.desk = [];
  state.day += 1;
  buildMorning(state);
  return { published, delta: totalDelta };
}

// ─────────────────────────────────────────────────────────────────────────────
// The morning paper
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build the morning paper for `state.day`: overnight readership decay, reader
 * updates that are due, a possible special event, filler briefs, and the new
 * letters for the desk. Also detects game over.
 */
export function buildMorning(state) {
  const isFinal = !isEndless(state) && state.day > FINITE_DAYS;
  const morning = {
    day: state.day,
    isFinal,
    articles: [],
    updates: [],
    filler: shuffle(FILLER).slice(0, 2),
    overnight: null,
    eventId: null,
  };

  if (state.day === 1) morning.articles.push({ ...WELCOME_ARTICLE });
  if (isFinal) morning.articles.push({ ...FINAL_ARTICLE });

  // People forget you a little overnight.
  if (state.day > 1) {
    morning.overnight = applyDelta(state, { readership: -DAILY_READERSHIP_DECAY });
  }

  // Reveal outcomes that are due (or all of them, in the final edition).
  const due = state.pending.filter((p) => isFinal || p.dueDay <= state.day);
  state.pending = state.pending.filter((p) => !due.includes(p));
  due.sort((a, b) => a.answeredDay - b.answeredDay);
  for (const p of due) morning.updates.push(revealOutcome(state, p));

  // Game over?
  state.pendingEnding = null;
  if (state.stats.reputation <= 0) state.pendingEnding = "fired";
  else if (state.stats.readership <= 0) state.pendingEnding = "folded";
  else if (isFinal) state.pendingEnding = determineEnding(state);

  // If the game continues: maybe an event, then deal today's letters.
  state.desk = [];
  if (!state.pendingEnding) {
    const event = rollEvent(state);
    if (event) {
      morning.eventId = event.id;
      morning.articles.push({ kicker: event.kicker, headline: event.headline, article: event.article, event: true });
      if (event.stats) morning.eventDelta = applyDelta(state, event.stats);
    }
    const letters = drawLetters(state, LETTERS_PER_DAY);
    if (event) {
      const eventLetter = LETTERS.find((l) => l.event === event.id);
      if (eventLetter) letters.unshift(eventLetter);
    }
    state.desk = letters.map((l) => ({ letterId: l.id, choice: null }));
    for (const l of letters) state.seen[l.id] = state.day;
  }

  state.morning = morning;
  state.phase = "morning";
  return morning;
}

/** Apply a pending outcome and return the clipping to show in the paper. */
function revealOutcome(state, pending) {
  const letter = LETTER_BY_ID[pending.letterId];
  const option = letter.options[pending.optionIndex];
  const outcome = option[pending.kind];
  const delta = applyDelta(state, outcome.stats ?? TONES[option.tone][pending.kind]);
  setFlags(state, outcome.setFlags);
  state.resolved[letter.id] = state.day;

  const clipping = {
    letterId: letter.id,
    optionIndex: pending.optionIndex,
    kind: pending.kind,
    tone: option.tone,
    daysLater: state.day - pending.answeredDay,
    delta,
  };
  state.history.push({ day: state.day, ...clipping });
  return clipping;
}

// ─────────────────────────────────────────────────────────────────────────────
// Choosing letters and events
// ─────────────────────────────────────────────────────────────────────────────

/** Can this letter be dealt today? */
export function isEligible(state, letter, { allowRepeats = false } = {}) {
  if (letter.event) return false; // event letters only arrive with their event
  if (state.day < (letter.minDay ?? 1)) return false;

  const lastSeen = state.seen[letter.id];
  if (lastSeen !== undefined) {
    if (!allowRepeats || !letter.repeatable) return false;
    if (state.day - lastSeen < REPEAT_COOLDOWN_DAYS) return false;
  }

  const after = [].concat(letter.after ?? []);
  if (after.length && !after.some((id) => state.resolved[id] !== undefined)) return false;
  if (letter.requires && !hasAll(state, letter.requires)) return false;
  if (letter.excludes && hasAny(state, letter.excludes)) return false;

  // Don't send a character's next letter while their previous one is still unresolved.
  if (letter.from !== "townsfolk" && hasOpenThread(state, letter.from)) return false;
  return true;
}

/** Does this character have a letter whose outcome hasn't been revealed yet? */
function hasOpenThread(state, characterId) {
  return state.pending.some((p) => LETTER_BY_ID[p.letterId].from === characterId);
}

/** How strongly to prefer a letter: ongoing storylines first, one-offs last. */
function letterWeight(letter, day) {
  if (letter.from === "townsfolk") return day <= 3 ? 0.1 : 1.5; // meet the regulars first
  return letter.after ? 6 : 3;
}

/**
 * Deal `count` letters: at most one per recurring character, and a limited
 * number of one-off townsfolk letters so storylines get room to breathe.
 */
export function drawLetters(state, count) {
  let pool = LETTERS.filter((l) => isEligible(state, l));
  // Endless mode (or a very unlucky standard game): allow repeatable letters back in.
  if (pool.length < count) {
    const repeats = LETTERS.filter((l) => !pool.includes(l) && isEligible(state, l, { allowRepeats: true }));
    pool = pool.concat(repeats);
  }
  // Last resort for very long endless games: the least-recently-seen repeatables.
  if (pool.length < count) {
    const oldest = LETTERS.filter((l) => l.repeatable && !l.event && !pool.includes(l)).sort(
      (a, b) => (state.seen[a.id] ?? 0) - (state.seen[b.id] ?? 0),
    );
    pool = pool.concat(oldest.slice(0, count - pool.length));
  }

  const picks = [];
  const usedCharacters = new Set();
  let townsfolk = 0;
  let candidates = [...pool];

  while (picks.length < count && candidates.length) {
    const letter = weightedPick(candidates, (l) => letterWeight(l, state.day));
    candidates = candidates.filter((l) => l !== letter);
    if (letter.from === "townsfolk") {
      if (townsfolk >= MAX_TOWNSFOLK_PER_DAY && candidates.some((l) => l.from !== "townsfolk")) continue;
      townsfolk++;
    } else {
      if (usedCharacters.has(letter.from)) continue;
      usedCharacters.add(letter.from);
    }
    picks.push(letter);
  }
  return picks;
}

/** Check special events in order and trigger at most one. */
function rollEvent(state) {
  for (const event of EVENTS) {
    const last = state.eventsSeen[event.id];
    let eligible;
    let forced = false;
    if (last === undefined) {
      eligible = state.day >= event.minDay && state.day <= event.maxDay;
      forced = state.day === event.maxDay;
    } else {
      // Already happened: only some events recur, and only after a cooldown.
      eligible = !!event.repeatEvery && state.day - last >= event.repeatEvery;
    }
    if (!eligible) continue;
    if (event.condition && !event.condition(state)) continue;
    if (!forced && !chance(event.chance)) continue;

    state.eventsSeen[event.id] = state.day;
    return event;
  }
  return null;
}
