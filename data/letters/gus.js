// Gus Pettibone, nervous llama farmer, and Dolores, the llama who is plotting.
// See data/letters/index.js for the full letter format.
export default [
  {
    id: "gus_1",
    from: "gus",
    minDay: 1,
    subject: "The Llamas Are Watching Me",
    body: "I own a small llama farm out on Route 9. Forty-one llamas. Lately they've started standing in a semicircle outside my bedroom window at night, just staring. The ringleader is a llama named Dolores. She has never once blinked in my presence. I think she wants the farmhouse. I'm a nervous man by nature and this is not helping. What do I do?",
    options: [
      {
        text: "Set firm boundaries. Llamas respect a calm, confident \"no.\"",
        tone: "sensible",
        success: {
          headline: "LOCAL MAN TELLS LLAMA 'NO'; LLAMA, SURPRISINGLY, LISTENS",
          text: "After a firm conversation, Dolores has retreated to the barn. \"She still stares,\" Gus admits, \"but from a respectful distance now.\"",
        },
        backfire: {
          headline: "DOLORES SPITS; GUS LOSES EYEBROW",
          text: "Gus attempted a confident \"no.\" It came out as a squeak. Dolores responded with what witnesses call \"a projectile of unusual volume.\" Gus is recovering. His left eyebrow is not.",
        },
      },
      {
        text: "Hold a family meeting. Bring snacks. Listen to their needs.",
        tone: "odd",
        success: {
          headline: "LLAMA SUMMIT ENDS IN HISTORIC 'CARROT ACCORD'",
          text: "Gus held a candlelit meeting with all 41 llamas. Terms: two carrots per llama per day, and Gus may keep the farmhouse. Dolores signed with a hoof.",
        },
        backfire: {
          headline: "SNACK-BASED DIPLOMACY COLLAPSES",
          text: "The llamas ate every snack, then the table, then the minutes of the meeting. Dolores now sleeps in Gus's recliner.",
          setFlags: ["dolores_inside"],
        },
      },
      {
        text: "Move to a lighthouse. Let the llamas have the farm.",
        tone: "chaotic",
        setFlags: ["gus_lighthouse", "lighthouse_tenant"],
        success: {
          headline: "FARMER FINDS PEACE IN LIGHTHOUSE; LLAMAS FIND PEACE IN FARMHOUSE",
          text: "Gus now rents a room from retired keeper Walt Brickman. \"For the first time in years, nothing is staring at me,\" he writes. \"Except the sea. But the sea doesn't want my house.\"",
        },
        backfire: {
          headline: "41 LLAMAS FOLLOW MAN TO LIGHTHOUSE",
          text: "Gus moved into the lighthouse. The llamas followed, single file, down Route 9. Traffic stopped for three hours. Dolores is now on the observation deck. She can see everything.",
          setFlags: ["llamas_loose"],
        },
      },
      {
        text: "Enter Dolores in the county fair beauty pageant. Give her a purpose.",
        tone: "chaotic",
        success: {
          headline: "DOLORES THE LLAMA CROWNED MISS COUNTY FAIR",
          text: "In a stunning upset, Dolores beat a prize hog and two humans who entered by mistake. She now has an agent. Gus has slept through the night for the first time in months.",
          setFlags: ["dolores_famous"],
        },
        backfire: {
          headline: "PAGEANT JUDGE BITTEN; LLAMA 'NOT SORRY'",
          text: "Dolores bit Judge Arliss Fenn during the talent portion. Her listed talent was \"menace.\" She is banned from the fairgrounds and possibly the county.",
          setFlags: ["dolores_wanted"],
        },
      },
    ],
  },

  {
    id: "gus_2",
    from: "gus",
    after: "gus_1",
    minDay: 3,
    subject: "Dolores Has Learned to Open Gates",
    body: "Update from the farm. Dolores has figured out the gate latch. She lets the whole herd out at 2 a.m. and they wander into town. Last night they were found in the Piggly Wiggly cereal aisle, standing in an orderly line. The sheriff says I have a week to \"get my llamas under control\" before he does something. He didn't say what. He just looked sad.",
    postscripts: [
      { requires: ["gus_lighthouse"], text: "P.S. I'm still living at the lighthouse, so I hear about all this secondhand. Walt reads me the police scanner at breakfast." },
      { requires: ["dolores_famous"], text: "P.S. Fame has gone to her head. She signs autographs now. In hoofprint." },
      { requires: ["mayor_blamed_llamas"], text: "P.S. Ever since the Mayor blamed my llamas for the water tower thing, people glare at us at the feed store." },
      { requires: ["dolores_inside"], text: "P.S. She still has the recliner. I sleep on the porch." },
    ],
    options: [
      {
        text: "Build a better fence. A tall one. With a combination lock.",
        tone: "sensible",
        success: {
          headline: "GUS BUILDS FENCE; FENCE HOLDS; TOWN EXHALES",
          text: "Gus installed an eight-foot fence with a four-digit lock. Dolores spent three nights glaring at it and has since taken up sulking as a hobby.",
        },
        backfire: {
          headline: "LLAMA CRACKS COMBINATION LOCK IN 40 MINUTES",
          text: "The combination was 1-2-3-4. Dolores watched Gus set it. \"I'm not a security person,\" Gus wrote. \"I'm a llama person. Barely.\"",
          setFlags: ["llamas_loose"],
        },
      },
      {
        text: "Hire Edna Voss's bridge club as overnight llama guards.",
        tone: "odd",
        setFlags: ["edna_llamas"],
        success: {
          headline: "GRANDMAS ON GUARD: LLAMA ESCAPES DROP TO ZERO",
          text: "The Tuesday Bridge Club now patrols the farm in lawn chairs with flashlights and thermoses. Edna Voss reports she's \"never felt more alive\" and refers to Dolores exclusively as \"the prisoner.\"",
        },
        backfire: {
          headline: "BRIDGE CLUB DEFECTS TO LLAMAS",
          text: "After three nights the grandmas got attached. They now take the llamas on \"supervised strolls\" to the casino. Dolores won $300 on a slot machine.",
          setFlags: ["llamas_loose"],
        },
      },
      {
        text: "Let them roam. It's their town too.",
        tone: "chaotic",
        setFlags: ["llamas_loose"],
        success: {
          headline: "FREE-RANGE LLAMAS BOOST TOURISM 400%",
          text: "Visitors from three counties have come to see the \"Llama Town\" phenomenon. A gift shop has opened. Gus gets a cut. He is, for the first time in his life, slightly rich.",
        },
        backfire: {
          headline: "LLAMAS SEIZE BUBBLES CAR WASH",
          text: "The herd has occupied Bubbles Car Wash and refuses to leave. They enjoy the brushes. Owner Ray Delgado says he's \"losing money but also losing the will to fight.\"",
        },
      },
      {
        text: "Teach them a trade. Idle hooves are the devil's workshop.",
        tone: "odd",
        success: {
          headline: "LLAMAS NOW DELIVER MAIL ON ROUTE 9",
          text: "Gus trained the herd to carry mail satchels. Delivery is now faster than the actual post office. The postmaster filed a complaint, which a llama delivered.",
        },
        backfire: {
          headline: "LLAMA ACCOUNTING FIRM AUDITED",
          text: "Gus tried teaching the llamas bookkeeping. Results were \"abstract.\" The IRS has questions about why the farm's tax return is mostly hay.",
        },
      },
    ],
  },

  {
    id: "gus_3",
    from: "gus",
    after: "gus_2",
    minDay: 5,
    subject: "I'm In Love, But the Llamas Disapprove",
    body: "There's a woman at the feed store named Marisol. She laughs at my jokes, which nobody has done since 1998. I want to ask her to dinner. Problem: every time she visits the farm, Dolores stands between us and makes a low humming noise, like a refrigerator full of hatred. Do I listen to my heart or my llama?",
    options: [
      {
        text: "Ask her to dinner. Somewhere far, far away from the llamas.",
        tone: "sensible",
        success: {
          headline: "FEED STORE ROMANCE BLOSSOMS",
          text: "Gus and Marisol dined at an Olive Garden two towns over. \"She ordered the same breadsticks as me,\" Gus writes. \"I think this is love.\" Dolores was informed by postcard.",
          setFlags: ["gus_love"],
        },
        backfire: {
          headline: "DATE INTERRUPTED BY UNINVITED LLAMA",
          text: "Dolores walked eleven miles to the Olive Garden and stood at the window, humming. Marisol says she \"needs some time,\" and also a restraining order (against the llama).",
        },
      },
      {
        text: "Let Dolores choose. Llamas are excellent judges of character.",
        tone: "odd",
        success: {
          headline: "LLAMA APPROVES; WEDDING BELLS?",
          text: "Dolores sniffed Marisol for nine full minutes, then laid her head gently on Marisol's shoulder. Gus wept. Marisol wept. A nearby goat wept, possibly for unrelated reasons.",
          setFlags: ["gus_love"],
        },
        backfire: {
          headline: "LLAMA PICKS MAILMAN INSTEAD",
          text: "Dolores rejected Marisol and nudged Gus toward Terry the mailman. Gus and Terry are now \"just two guys who get dinner.\" Marisol is dating a farrier.",
        },
      },
      {
        text: "Have Riley Okafor's band write her a power ballad.",
        tone: "odd",
        setFlags: ["riley_ballad"],
        success: {
          headline: "TEEN BAND'S BALLAD WINS HEART OF FEED STORE CLERK",
          text: "\"Marisol (Of the Feed)\" is four minutes of feedback and one lyric. It worked. Marisol says nobody ever wrote her a song before, \"even a bad one, which this was.\"",
          setFlags: ["gus_love"],
        },
        backfire: {
          headline: "POWER BALLAD SHATTERS FEED STORE WINDOW",
          text: "The band's amplifier was too powerful. The feed store windows are being replaced. Marisol is fine, but is now partially deaf in the ear that faced the bass.",
        },
      },
      {
        text: "Fake your own death. Women love a man with mystery.",
        tone: "chaotic",
        success: {
          headline: "'DEAD' FARMER RETURNS; ROMANCE ENSUES",
          text: "Gus vanished for three days, then reappeared at the feed store in a long coat saying \"I've seen things.\" Marisol was so relieved she kissed him. Nobody has told her the truth. The funeral had a good turnout.",
          setFlags: ["gus_love"],
        },
        backfire: {
          headline: "FARMER'S FAKE DEATH GOES TOO WELL",
          text: "The town held a lovely funeral. His relatives split up his belongings. Dolores inherited the farmhouse. Gus is now legally deceased and living in his own barn.",
          setFlags: ["gus_dead_legally"],
        },
      },
    ],
  },

  {
    id: "gus_4",
    from: "gus",
    after: "gus_3",
    minDay: 8,
    subject: "A Man in a Suit Wants My Llamas",
    body: "A man in a gray suit from \"NovaFiber Industries\" offered me $200,000 for the herd. He wouldn't say what they'd be used for, only that it's \"cutting edge\" and \"mostly legal.\" Dolores bit his briefcase. I could retire. But they're my llamas. Even the mean one. Especially the mean one.",
    postscripts: [
      { requires: ["gus_dead_legally"], text: "P.S. Being legally dead complicates the paperwork. The man in the suit said that \"happens all the time.\" That worried me more than anything." },
      { requires: ["gus_love"], text: "P.S. Marisol says it's my decision. Dolores says nothing, aggressively." },
    ],
    options: [
      {
        text: "Politely refuse. Some things aren't for sale.",
        tone: "sensible",
        success: {
          headline: "FARMER KEEPS LLAMAS; TOWN APPLAUDS",
          text: "Gus turned NovaFiber down. Dolores followed the man's car to the county line to make sure he left. Gus has started a llama sweater business instead, and it's doing fine.",
          setFlags: ["llama_legend"],
        },
        backfire: {
          headline: "SPURNED CORPORATION OPENS ROBOT LLAMA FACTORY NEXT DOOR",
          text: "NovaFiber retaliated by building robotic llamas. They do not spit. They do not stare. Customers love them. Dolores has been seen kicking one, repeatedly.",
        },
      },
      {
        text: "Take the money. Retire to Florida. Never look back.",
        tone: "sensible",
        success: {
          headline: "LLAMA FARMER RETIRES; SENDS POSTCARD OF HIMSELF RELAXED",
          text: "Gus is in Boca Raton. He hasn't been nervous in weeks. NovaFiber reports the llamas are \"doing well\" in a \"mostly legal program.\"",
        },
        backfire: {
          headline: "SOLD LLAMAS ESCAPE, WALK 900 MILES TO FLORIDA",
          text: "Dolores led the herd out of the NovaFiber facility and across four states. They arrived at Gus's condo on a Tuesday. The condo board is involved. Gus has never been more nervous, or more loved.",
          setFlags: ["llama_legend"],
        },
      },
      {
        text: "Demand a seat on the board. For Dolores.",
        tone: "chaotic",
        success: {
          headline: "LLAMA APPOINTED TO CORPORATE BOARD; STOCK SOARS",
          text: "Dolores attends quarterly meetings and stares at executives until they make ethical decisions. NovaFiber stock is up 30%. Analysts call it \"the Dolores Effect.\"",
          setFlags: ["llama_legend", "llama_republic"],
        },
        backfire: {
          headline: "BOARDROOM LLAMA EATS MERGER DOCUMENTS",
          text: "Dolores ate a $40 million merger agreement in her first meeting. NovaFiber is suing. Gus's lawyer bills in hay.",
        },
      },
      {
        text: "Free the herd into the woods. Let them found their own society.",
        tone: "chaotic",
        setFlags: ["llamas_loose"],
        success: {
          headline: "LLAMA REPUBLIC DECLARED IN PETTIBONE WOODS",
          text: "The herd has set up a self-governing colony with Dolores as Supreme Chancellor. They have a flag. It's a picture of Gus, crossed out. Gus is honored.",
          setFlags: ["llama_legend", "llama_republic"],
        },
        backfire: {
          headline: "FERAL LLAMAS TERRORIZE CAMPGROUND",
          text: "The freed herd has become \"a wild band of spitting outlaws.\" Scout Troop 12 fled camp. Gus was sent to reason with them. They no longer recognize his authority.",
        },
      },
    ],
  },
];
