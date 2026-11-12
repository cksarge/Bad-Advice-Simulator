/**
 * letters/index.js — gathers every letter file into one list.
 *
 * ADDING A NEW LETTER FILE: create data/letters/<name>.js exporting an array,
 * then import it below and add it to the LETTERS array. That's it.
 *
 * ─────────────────────────────── LETTER FORMAT ───────────────────────────────
 * {
 *   id: "gus_2",                 // unique id (used for storyline links + saves)
 *   from: "gus",                 // character id from data/characters.js
 *   signature: "...",            // optional: overrides the character's sign-off
 *   subject: "...",              // short title shown on the envelope
 *   body: "...",                 // the letter itself ("Dear <you>," is added automatically)
 *
 *   // ── When can this letter show up? (all optional) ──
 *   minDay: 3,                   // not before this day
 *   after: "gus_1",              // only once that letter's outcome has been revealed
 *                                //   (an array means "after ANY of these")
 *   requires: ["flag_a"],        // only if ALL of these story flags are set
 *   excludes: ["flag_b"],        // never if ANY of these flags are set
 *   repeatable: true,            // Endless mode can reuse it after a cooldown
 *   event: "festival",           // only appears on that special event day
 *
 *   // Extra lines added to the end of the letter when flags are set.
 *   // This is the easy way to write crossovers between characters.
 *   postscripts: [{ requires: ["dolores_famous"], text: "P.S. ..." }],
 *
 *   options: [                   // 3–4 advice choices
 *     {
 *       text: "Move to a lighthouse.",
 *       tone: "chaotic",         // "sensible" | "odd" | "chaotic" (see data/balance.js)
 *       odds: 0.4,               // optional: chance of success (overrides the tone)
 *       stats: { readership: 3, reputation: -1, chaos: 3 },  // optional: on publish
 *       setFlags: ["gus_lighthouse"],                        // optional: on publish
 *       success:  { headline, text, setFlags?, stats?, delay? },
 *       backfire: { headline, text, setFlags?, stats?, delay? },
 *     },
 *   ],
 * }
 *
 * Text can use {name} (your pen name) or {NAME} (your pen name in CAPITALS).
 * ──────────────────────────────────────────────────────────────────────────────
 */
import gus from "./gus.js";
import edna from "./edna.js";
import priya from "./priya.js";
import riley from "./riley.js";
import mayor from "./mayor.js";
import doreen from "./doreen.js";
import harold from "./harold.js";
import kevin from "./kevin.js";
import walt from "./walt.js";
import townsfolk from "./townsfolk.js";
import events from "./events.js";

export const LETTERS = [
  ...gus,
  ...edna,
  ...priya,
  ...riley,
  ...mayor,
  ...doreen,
  ...harold,
  ...kevin,
  ...walt,
  ...townsfolk,
  ...events,
];
