/**
 * content.js — loads all the data files and builds quick lookup tables.
 * Also sanity-checks the data at startup and warns in the console about typos
 * (unknown character ids, broken `after` links, missing outcomes…), which is
 * handy when you're writing new letters.
 */
import { CHARACTERS } from "../data/characters.js";
import { LETTERS } from "../data/letters/index.js";
import { EVENTS } from "../data/events.js";
import { ENDINGS } from "../data/endings.js";
import { TONES } from "../data/balance.js";

export { CHARACTERS, LETTERS, EVENTS, ENDINGS };

export const CHARACTER_BY_ID = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));
export const LETTER_BY_ID = Object.fromEntries(LETTERS.map((l) => [l.id, l]));
export const EVENT_BY_ID = Object.fromEntries(EVENTS.map((e) => [e.id, e]));
export const ENDING_BY_ID = Object.fromEntries(ENDINGS.map((e) => [e.id, e]));

/** Returns a list of human-readable problems with the data (empty = all good). */
export function validateContent() {
  const problems = [];
  const seen = new Set();
  for (const letter of LETTERS) {
    const where = `letter "${letter.id}"`;
    if (seen.has(letter.id)) problems.push(`${where}: duplicate id`);
    seen.add(letter.id);
    if (!CHARACTER_BY_ID[letter.from]) problems.push(`${where}: unknown character "${letter.from}"`);
    for (const dep of [].concat(letter.after ?? [])) {
      if (!LETTER_BY_ID[dep]) problems.push(`${where}: "after" points to missing letter "${dep}"`);
    }
    if (letter.event && !EVENT_BY_ID[letter.event]) problems.push(`${where}: unknown event "${letter.event}"`);
    if (!letter.options?.length) problems.push(`${where}: has no options`);
    letter.options?.forEach((opt, i) => {
      if (!TONES[opt.tone]) problems.push(`${where} option ${i + 1}: unknown tone "${opt.tone}"`);
      for (const kind of ["success", "backfire"]) {
        if (!opt[kind]?.headline || !opt[kind]?.text) {
          problems.push(`${where} option ${i + 1}: missing ${kind} headline/text`);
        }
      }
    });
  }
  return problems;
}
