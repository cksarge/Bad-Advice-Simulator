/**
 * endings.js — how your career ends.
 *
 * When the game ends, endings are checked TOP TO BOTTOM and the first one whose
 * `check(state)` returns true is the one you get. Put rarer/special endings first.
 *
 *   id          unique key (stored in the Hall of Fame)
 *   title       the big headline
 *   icon        an emoji for the Hall of Fame card
 *   headline    the newspaper headline on the ending screen
 *   text        the ending story ({name}/{NAME} placeholders work here)
 *   hint        shown in the Hall of Fame while the ending is still locked
 *   check       (state) => boolean; `state.stats` and `state.flags` are the useful bits
 *
 * `forced: true` endings are only reached when a stat hits zero mid-game.
 */
export const ENDINGS = [
  {
    id: "mayor",
    title: "Accidentally Elected Mayor",
    icon: "🏛️",
    headline: "WRITE-IN LANDSLIDE: {NAME} IS SHRUGSVILLE'S NEW MAYOR",
    text: "Nobody remembers exactly when the write-in campaign started. Somewhere between the bake-offs, the ferrets and the goose, the town decided that the person giving all the advice should probably be in charge. {name} won with 61% of the vote. Gerald the goose came second. Your first act as mayor was to sell the water tower back to Dusty, out of respect for tradition.",
    hint: "Somebody has to run this town. Several people might suggest you.",
    check: (s) => s.flags.write_in_candidate && s.stats.readership >= 50 && s.stats.reputation >= 55,
  },
  {
    id: "llama",
    title: "Chancellor of the Llama Republic",
    icon: "🦙",
    headline: "LLAMA REPUBLIC APPOINTS {NAME} AS FIRST HUMAN AMBASSADOR",
    text: "The Llama Republic of Pettibone Woods has formally recognized only one human institution: your advice column. Dolores herself delivered your credentials, then stared at you for nine minutes. You've left the paper to serve full-time as ambassador. The pay is hay. The benefits are hay. You have never been happier, or more watched.",
    hint: "Help a nervous farmer's herd rise to its full potential.",
    check: (s) => s.flags.llama_republic && s.stats.chaos >= 35,
  },
  {
    id: "goose",
    title: "Press Secretary to a Goose",
    icon: "🪿",
    headline: "GERALD THE GOOSE WINS MAYORAL RACE; NAMES {NAME} PRESS SECRETARY",
    text: "Against every law of nature and several of the town charter, Gerald the goose is mayor. His only policy is menace. His only spokesperson is you. Each morning you stand at the podium and translate his hisses for reporters. The approval rating is, somehow, 74%.",
    hint: "Give a certain goose enough encouragement and he may go far.",
    check: (s) => s.flags.goose_mayor && s.stats.chaos >= 60,
  },
  {
    id: "chaos",
    title: "Agent of Chaos",
    icon: "🔥",
    headline: "SHRUGSVILLE DECLARED 'OFFICIALLY UNHINGED'; COLUMNIST BLAMED, CELEBRATED",
    text: "Llamas run the car wash. Grandmothers ride in gangs. The lighthouse is a sovereign nation. A goose has a campaign manager. The state sent an inspector, who read one week of your column and quietly moved to Portugal. The Daily Shrug has never sold more papers. Marge has never slept less. You are a legend, and a warning.",
    hint: "Let the town burn. Figuratively. Mostly.",
    check: (s) => s.stats.chaos >= 75,
  },
  {
    id: "fired",
    title: "Fired and Living in a Lighthouse",
    icon: "⚓",
    headline: "ADVICE COLUMNIST FIRED; MOVES INTO LIGHTHOUSE 'ON OWN ADVICE'",
    text: "Marge didn't even yell. She just handed you a box. With nowhere else to go, you followed the advice you gave so many others: you moved into the lighthouse. Walt gave you the room next to the chickens. Every night, the badly advised gather around you and ask for help. You can't seem to stop giving it.",
    hint: "Lose the town's trust completely.",
    check: (s) => s.stats.reputation < 25,
  },
  {
    id: "folded",
    title: "The Shrug Shrugs Its Last",
    icon: "📉",
    headline: "THE DAILY SHRUG CEASES PUBLICATION; NOBODY NOTICES FOR THREE DAYS",
    text: "With readership down to a handful of loyal subscribers (mostly Edna, and Harold, who doesn't pay), the owner pulled the plug. The last issue ran a correction about the previous issue. You keep writing the column anyway, by hand, and pinning it to the laundromat corkboard. Somebody always reads it. Probably Harold.",
    hint: "Bore the town so badly it stops reading.",
    check: (s) => s.stats.readership < 20,
  },
  {
    id: "sage",
    title: "Beloved Town Sage",
    icon: "🕯️",
    headline: "{NAME} NAMED 'MOST TRUSTED PERSON IN SHRUGSVILLE'; GOOSE A DISTANT SECOND",
    text: "Your advice was steady, kind and occasionally right. Gus sleeps through the night. Edna has made peace with Priya (mostly). Even the Mayor told the truth once. They've put a bench outside the newspaper office with your name on it. People sit there when they need to think. Gerald sits there too, but he's learning.",
    hint: "Be the voice of reason. Keep the town calm and trusting.",
    check: (s) => s.stats.reputation >= 70 && s.stats.chaos < 45,
  },
  {
    id: "tabloid",
    title: "Tabloid Royalty",
    icon: "📰",
    headline: "ADVICE COLUMN NOW MOST-READ FEATURE IN TRI-COUNTY AREA",
    text: "Nobody fully trusts your advice, but everybody reads it, usually out loud, usually in disbelief. The column is syndicated in four papers. Dr. Brad Truthington has filed for bankruptcy. You have a parking space with your name on it. It's next to the dumpster, but it's yours.",
    hint: "Get everyone reading, whether or not they trust you.",
    check: (s) => s.stats.readership >= 70,
  },
  {
    id: "adequate",
    title: "Perfectly Adequate Columnist",
    icon: "☕",
    headline: "LOCAL COLUMNIST CONTINUES TO EXIST",
    text: "Some advice worked. Some didn't. Most people read it, some of the time. Marge renewed your contract with a shrug, which at The Daily Shrug is the highest possible honor. Tomorrow there'll be more letters, more llamas, and more coffee. It's a living.",
    hint: "Just... do fine.",
    check: () => true,
  },
];
