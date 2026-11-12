/**
 * events.js — rare "special event" days.
 *
 * Each morning the game checks events in order and triggers at most one.
 *   id            unique key; letters with `event: "<id>"` arrive on that day
 *   minDay/maxDay the window the event can happen in
 *   chance        probability per eligible morning (it's forced on maxDay if it hasn't happened)
 *   condition     optional function (state) => boolean, for events driven by your stats
 *   repeatEvery   optional: in Endless mode the event can recur after this many days
 *   kicker/headline/article   the front-page story for that morning
 *   stats         optional immediate stat change when the event fires
 */
export const EVENTS = [
  {
    id: "editor",
    minDay: 3,
    maxDay: Infinity,
    chance: 1,
    // Marge only threatens you when things are going badly.
    condition: (s) => s.stats.readership < 28 || s.stats.reputation < 28,
    repeatEvery: 12,
    kicker: "Interoffice Memo · Leaked",
    headline: "EDITOR 'REVIEWING' ADVICE COLUMN",
    article:
      "Sources inside The Daily Shrug report that Editor-in-Chief Marge Crumb has been seen staring at the advice columnist's desk \"the way a cat stares at a cucumber.\" A meeting has been scheduled. The meeting is a letter. The letter is on your desk.",
  },
  {
    id: "festival",
    minDay: 5,
    maxDay: 8,
    chance: 0.35,
    repeatEvery: 15,
    kicker: "Special Festival Edition",
    headline: "GOURD FESTIVAL OPENS TO RECORD CROWDS, MILD GOURD INJURIES",
    article:
      "The 71st Annual Shrugsville Gourd Festival opened yesterday with a ribbon cutting, a pie table, and a gourd catapult that the committee \"definitely tested.\" Attendance is up. Gourd-related injuries are up slightly more. Readership is buzzing.",
    stats: { readership: 3, reputation: 0, chaos: 2 },
  },
  {
    id: "rival",
    minDay: 8,
    maxDay: 11,
    chance: 0.4,
    kicker: "Competition Watch",
    headline: "RIVAL PAPER 'THE DAILY SMIRK' LAUNCHES ACROSS THE STREET",
    article:
      "A glossy new paper, The Daily Smirk, opened yesterday with a free-tote-bag promotion and an advice columnist named \"Dr. Brad Truthington,\" whose credentials are \"a podcast.\" Several Shrug readers took tote bags. Marge Crumb called the tote bags \"flimsy\" and then went very quiet.",
    stats: { readership: -4, reputation: 0, chaos: 0 },
  },
  {
    id: "storm",
    minDay: 4,
    maxDay: 13,
    chance: 0.12,
    repeatEvery: 18,
    kicker: "Weather Alert",
    headline: "BIG STORM HEADED FOR SHRUGSVILLE; TOWN LOOKS TO ADVICE COLUMN FOR SOME REASON",
    article:
      "The National Weather Service has issued a storm warning. The town's emergency committee (Ron) has asked the advice column where everyone should go. Ron says people \"don't read the emergency texts, but they read that column.\" This is both flattering and alarming.",
  },
];

/** The very first morning's front page. */
export const WELCOME_ARTICLE = {
  kicker: "Staff Announcement",
  headline: "DAILY SHRUG HIRES NEW ADVICE COLUMNIST; EDITOR 'CAUTIOUSLY DESPERATE'",
  article:
    "The Daily Shrug welcomes {name}, our new advice columnist, after the previous one moved to a lighthouse \"on their own advice.\" Editor Marge Crumb says: \"Readers send letters. You answer them. Try not to burn the town down. Your desk is the one with the coffee stain. They all have a coffee stain. Pick one.\"",
};

/** The front page of the last edition in a 14-day game. */
export const FINAL_ARTICLE = {
  kicker: "Final Edition",
  headline: "COLUMNIST'S TRIAL PERIOD ENDS; ALL REMAINING READER UPDATES INSIDE",
  article:
    "Two weeks ago, {name} took over the advice column. Since then, the town has been through a lot, much of it {name}'s fault. Below are the last reports from readers. Then Marge would like a word.",
};
