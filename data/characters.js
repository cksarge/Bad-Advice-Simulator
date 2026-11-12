/**
 * characters.js — the recurring readers of Shrugsville.
 *
 * Each character is referenced from a letter's `from` field by its `id`.
 *   id         unique key used by letters
 *   name       display name shown on the envelope
 *   icon       an emoji used as the little "postmark" on their letters
 *   signature  how they sign off (a letter can override this with its own `signature`)
 *   blurb      one-line description (shown in the How to Play "Who's Who")
 *
 * To add a character: add an object here, then write letters with `from: "<id>"`.
 */
export const CHARACTERS = [
  {
    id: "gus",
    name: "Gus Pettibone",
    icon: "🦙",
    signature: "Nervous on Route 9",
    blurb: "A deeply anxious llama farmer. Forty-one llamas. One of them, Dolores, is plotting.",
  },
  {
    id: "edna",
    name: "Edna Voss",
    icon: "🥧",
    signature: "Undefeated Since 1962",
    blurb: "81 years old. 34 pie ribbons. Treats bingo like a blood sport.",
  },
  {
    id: "priya",
    name: "Priya Lindqvist",
    icon: "🥐",
    signature: "Flaky (The Pastry, Not the Person)",
    blurb: "Paris-trained baker whose croissants have 81 layers and zero local customers.",
  },
  {
    id: "riley",
    name: "Riley Okafor",
    icon: "🎸",
    signature: "Future Rock Legend (Probably)",
    blurb: "16-year-old frontperson of Feral Tax Return. One song. One bucket.",
  },
  {
    id: "mayor",
    name: "Mayor Thaddeus Plum",
    icon: "🏛️",
    signature: "Definitely Not Hiding Anything",
    blurb: "The mayor. Asks only 'hypothetical' questions. Has many, many secrets.",
  },
  {
    id: "doreen",
    name: "Doreen Fitch",
    icon: "📋",
    signature: "President, Maple Court HOA",
    blurb: "HOA president locked in a forever war with a goose named Gerald.",
  },
  {
    id: "harold",
    name: "Harold",
    icon: "👻",
    signature: "Harold (Deceased, 1974)",
    blurb: "Has haunted the Suds-n-Duds laundromat for 50 years. Nobody notices.",
  },
  {
    id: "kevin",
    name: "The Astonishing Kevin",
    icon: "🎩",
    signature: "The Astonishing Kevin (Magician)",
    blurb: "A stage magician whose assistant vanished. To Portugal. On purpose.",
  },
  {
    id: "walt",
    name: "Walt Brickman",
    icon: "⚓",
    signature: "Retired, Shrugsville Point Lighthouse",
    blurb: "Retired lighthouse keeper. Owns the lighthouse your worst advice keeps sending people to.",
  },
  {
    id: "marge",
    name: "Marge Crumb",
    icon: "📰",
    signature: "Marge Crumb, Editor-in-Chief",
    blurb: "Your editor. Chain-drinks coffee. Holds your job in her hands, loosely.",
  },
  {
    // A catch-all "character" for one-off letters. Each townsfolk letter sets its own signature.
    id: "townsfolk",
    name: "A Concerned Reader",
    icon: "✉️",
    signature: "A Concerned Reader",
    blurb: "Everyone else in Shrugsville. There are a lot of them, and they all have problems.",
  },
];
