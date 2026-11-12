// Priya Lindqvist, perfectionist baker at Crumb & Fury. Her story branches on whether a bake-off happens.
export default [
  {
    id: "priya_1",
    from: "priya",
    minDay: 2,
    subject: "Nobody Buys My Croissants",
    body: "I trained in Paris for six years. My croissants have 81 layers. I counted. But this town keeps buying pie from an elderly woman who uses Crisco and spite. My bakery, Crumb & Fury, is losing money. How do I win over Shrugsville?",
    postscripts: [
      { requires: ["bakeoff"], text: "P.S. That woman has challenged me to a bake-off. I accepted. I'm going to destroy her. Respectfully." },
      { requires: ["edna_sabotage"], text: "P.S. Someone replaced all my sugar with salt. I have a suspect. She is 81." },
      { requires: ["edna_priya_friends"], text: "P.S. Edna brought me a pie. It was... annoyingly good." },
    ],
    options: [
      {
        text: "Offer free samples. Let the croissants speak for themselves.",
        tone: "sensible",
        success: {
          headline: "FREE SAMPLE DAY CONVERTS TOWN TO CROISSANTS",
          text: "Crumb & Fury had a line around the block. Even Monsignor Dale had four. Priya reports that profits are up and her blood pressure is down.",
        },
        backfire: {
          headline: "FREE SAMPLES CONSUMED ENTIRELY BY ONE MAN",
          text: "Local man Dennis Krupke arrived at 6 a.m. and ate every sample. Sales: zero. Dennis has been asked to leave. Dennis has not left.",
        },
      },
      {
        text: "Make a croissant shaped like the Mayor's face. Politics sells.",
        tone: "odd",
        success: {
          headline: "MAYOR CROISSANT GOES VIRAL",
          text: "The \"Plumssant\" sold out in an hour. Mayor Plum ate one on camera and called it \"flattering.\" Priya has a waiting list of 300.",
        },
        backfire: {
          headline: "MAYOR CROISSANT DEEMED 'TOO ACCURATE'",
          text: "It captured the Mayor's expression so precisely that customers grew uneasy. \"It looks like it's hiding something,\" said one. The Mayor's office has requested the mold be destroyed.",
          setFlags: ["mayor_suspicious"],
        },
      },
      {
        text: "Publish an open letter calling the town 'uncultured pie peasants.'",
        tone: "chaotic",
        success: {
          headline: "INSULTED TOWN FLOCKS TO BAKERY TO PROVE IT'S CULTURED",
          text: "Stung residents lined up to buy croissants and pronounce them \"kwah-SAHN\" very loudly. Sales are up 300%. Priya now insults the town weekly. It keeps working.",
        },
        backfire: {
          headline: "'PIE PEASANT' T-SHIRTS OUTSELL CROISSANTS",
          text: "The town embraced the insult. PIE PEASANT shirts are everywhere. Edna Voss wears hers to church. Priya's sales dropped further.",
        },
      },
      {
        text: "Team up with Edna. Invent a croissant-pie hybrid. The Crois-pie.",
        tone: "odd",
        success: {
          headline: "THE CROIS-PIE IS HERE AND IT IS PERFECT",
          text: "After a nine-hour argument about butter temperature, Edna and Priya created the Crois-pie. It won Best Thing at the Tri-County Fair. They still don't like each other. They're now inseparable.",
          setFlags: ["edna_priya_friends"],
        },
        backfire: {
          headline: "CROIS-PIE COLLABORATION ENDS IN FLOUR FIGHT",
          text: "Witnesses say it started over lard. Both bakers were found coated in flour, glaring, at 2 a.m. The Crois-pie remains theoretical.",
        },
      },
    ],
  },

  {
    // Branch A: the bake-off is on.
    id: "priya_2",
    from: "priya",
    after: "priya_1",
    requires: ["bakeoff"],
    minDay: 4,
    subject: "Bake-Off Strategy, URGENT",
    body: "The bake-off against Edna Voss is Saturday. The judge is Mayor Plum. Edna has been seen jogging at 5 a.m. carrying a rolling pin. I need a strategy.",
    options: [
      {
        text: "Bake your best croissant. Trust your training.",
        tone: "sensible",
        success: {
          headline: "PRIYA WINS BAKE-OFF BY A FLAKE",
          text: "Mayor Plum called her croissant \"transcendent.\" Edna demanded a recount. You can't recount a croissant. Edna has announced a rematch \"in the afterlife if necessary.\"",
        },
        backfire: {
          headline: "EDNA WINS; CROISSANT 'TOO FANCY'",
          text: "The Mayor said the croissant was \"great, but confusing.\" Edna's pie won. Priya has started jogging at 4:30 a.m.",
        },
      },
      {
        text: "Bake a cake shaped like Dolores the llama. Appeal to local pride.",
        tone: "odd",
        success: {
          headline: "LLAMA CAKE WINS; LLAMA ATTENDS",
          text: "Dolores herself showed up and stood next to the cake. The resemblance was so uncanny the Mayor awarded first place to \"both of them.\"",
        },
        backfire: {
          headline: "REAL LLAMA EATS LLAMA CAKE",
          text: "Dolores arrived uninvited and ate the cake, which raised philosophical questions nobody was ready for. Edna won by default.",
        },
      },
      {
        text: "Bribe the judge. Everyone knows Plum has a price.",
        tone: "chaotic",
        setFlags: ["mayor_bribed"],
        success: {
          headline: "PRIYA WINS; MAYOR SEEN WITH SUSPICIOUSLY LARGE DANISH",
          text: "Priya won. The Mayor was seen leaving with a danish the size of a car tire. Nobody can prove anything. Everybody suspects everything.",
        },
        backfire: {
          headline: "MAYOR TAKES BRIBES FROM BOTH BAKERS, DECLARES TIE",
          text: "It emerged that Edna had also bribed the Mayor, with a casserole. He declared a tie and then a \"personal leave of absence.\"",
          setFlags: ["mayor_suspicious"],
        },
      },
      {
        text: "Lose on purpose. Win her respect instead.",
        tone: "odd",
        success: {
          headline: "EDNA SPOTS THE THROW, BECOMES PRIYA'S FURIOUS MENTOR",
          text: "Edna was livid she'd \"won\" against a deliberately burnt croissant. She now visits daily to make Priya \"bake properly.\" They are, against all odds, friends.",
          setFlags: ["edna_priya_friends"],
        },
        backfire: {
          headline: "EDNA GLOATS FOR SIX HOURS",
          text: "Edna's victory speech ran so long the fire marshal had to clear the building. Priya regrets everything.",
        },
      },
    ],
  },

  {
    // Branch B: no bake-off, so the bakery has... other problems.
    id: "priya_2b",
    from: "priya",
    after: "priya_1",
    excludes: ["bakeoff"],
    minDay: 4,
    subject: "There Is a Raccoon in My Oven",
    body: "The health inspector found a raccoon living in my industrial oven. He's been there for weeks. He's not hurting anything. He's very clean. His name is Kenneth (I named him). The inspector says I must \"resolve the Kenneth situation\" by Monday.",
    options: [
      {
        text: "Call animal control. Kenneth deserves a forest, not an oven.",
        tone: "sensible",
        success: {
          headline: "RACCOON RELOCATED; BAKERY PASSES INSPECTION",
          text: "Kenneth lives in Pettibone Woods now. Priya visits on Sundays with a croissant. He seems happy.",
        },
        backfire: {
          headline: "KENNETH RETURNS WITH FAMILY",
          text: "Kenneth was relocated. He came back four days later with a wife and seven kits. The oven is now a raccoon condominium.",
        },
      },
      {
        text: "Make Kenneth Employee of the Month. Raccoons have tiny, skilled hands.",
        tone: "chaotic",
        success: {
          headline: "RACCOON PASTRY CHEF DRAWS NATIONAL ATTENTION",
          text: "Kenneth's tiny hands do the best lattice work Priya has ever seen. A food network crew is coming. The health inspector has been \"persuaded\" with a tart.",
        },
        backfire: {
          headline: "EMPLOYEE OF THE MONTH STEALS CASH REGISTER",
          text: "Kenneth was given the keys. Kenneth took the register, the espresso machine, and Priya's car. He was last seen heading for the state line.",
        },
      },
      {
        text: "Quietly move Kenneth into Edna Voss's oven. Problem solved.",
        tone: "chaotic",
        success: {
          headline: "GRANDMA FINDS RACCOON IN OVEN, ADOPTS HIM, RENAMES HIM 'BRUISER'",
          text: "Edna was delighted. Kenneth now wears a tiny apron and has won two pie contests as her sous-chef.",
        },
        backfire: {
          headline: "OVEN RACCOON TRACED BACK TO BAKERY",
          text: "Edna found Kenneth, and also the trail of croissant crumbs leading back to Crumb & Fury. A bake-off has been declared. Possibly a war.",
          setFlags: ["bakeoff"],
        },
      },
      {
        text: "Tell the inspector Kenneth is a dog. Commit to it.",
        tone: "odd",
        success: {
          headline: "INSPECTOR ACCEPTS RACCOON IS 'A SMALL DOG'",
          text: "The inspector, who is 70 and refuses to wear glasses, agreed Kenneth is \"a very small bandit dog.\" Kenneth now has a dog license.",
        },
        backfire: {
          headline: "INSPECTOR NOT FOOLED; RACCOON BARKS UNCONVINCINGLY",
          text: "Kenneth was asked to bark. Kenneth hissed. The bakery is closed for a week. Kenneth is not.",
        },
      },
    ],
  },

  {
    id: "priya_3",
    from: "priya",
    after: ["priya_2", "priya_2b"],
    minDay: 8,
    subject: "I Think I'm Burning Out",
    body: "I work 19-hour days. I dream in laminated dough. Last night I tried to fold my bedsheets into a croissant. My mother says I need balance. My accountant says I need a second location. My cat says nothing, but judgmentally.",
    postscripts: [
      { requires: ["edna_priya_friends"], text: "P.S. Edna says burnout is \"for quitters.\" She is 81 and has never slept past 4 a.m." },
    ],
    options: [
      {
        text: "Take a vacation. A real one. No pastries.",
        tone: "sensible",
        success: {
          headline: "BAKER RETURNS FROM VACATION 'A NEW WOMAN'",
          text: "Priya went to Maine and did nothing for a week. She came back rested, cheerful, and with a lobster croissant recipe that is, frankly, incredible.",
        },
        backfire: {
          headline: "VACATIONING BAKER OPENS POP-UP BAKERY ANYWAY",
          text: "Priya lasted 38 hours before taking over a beachside snack shack. She now runs two bakeries and is more tired than ever.",
        },
      },
      {
        text: "Open a second location. In the lighthouse.",
        tone: "odd",
        setFlags: ["lighthouse_bakery"],
        success: {
          headline: "LIGHTHOUSE BAKERY NAMED 'MOST ROMANTIC SPOT IN THE STATE'",
          text: "Crumb & Fury: Coastal opened on the lighthouse's ground floor. Walt Brickman works the register in a cardigan. The line stretches to the parking lot.",
        },
        backfire: {
          headline: "LIGHTHOUSE BAKERY'S OVEN GLOW STEERS BOAT ONTO BEACH",
          text: "The oven glow plus the lamp confused a fishing boat. Nobody was hurt. Sixty pounds of cod are on the beach. The seagulls have never been happier.",
        },
      },
      {
        text: "Hire Kevin the magician to make your workload disappear.",
        tone: "chaotic",
        setFlags: ["kevin_bakery"],
        success: {
          headline: "MAGICIAN'S TRICK SOMEHOW CUTS BAKER'S HOURS IN HALF",
          text: "Nobody understands what Kevin did. He waved a scarf. Priya now finishes by 2 p.m. \"I don't ask questions,\" she said. \"The croissants are fine.\"",
        },
        backfire: {
          headline: "MAGICIAN MAKES ENTIRE BAKERY DISAPPEAR",
          text: "Kevin made the bakery vanish. The building. He's \"working on getting it back.\" Priya is baking out of a food truck. Kevin owes her a lot of money.",
        },
      },
      {
        text: "Burn it all down and become a llama farmer.",
        tone: "chaotic",
        success: {
          headline: "BAKER TRADES OVENS FOR LLAMAS, FINDS INNER PEACE",
          text: "Priya apprenticed with Gus Pettibone. Dolores likes her, which Gus calls \"unprecedented.\" She hasn't dreamed about dough in a week.",
        },
        backfire: {
          headline: "BAKER'S FIRST DAY ON LLAMA FARM GOES 'POORLY'",
          text: "Priya lasted four hours. Dolores spat on her. Twice. In the eyes. She has returned to her bakery and now describes croissants as \"safe.\"",
        },
      },
    ],
  },
];
