// Letters that only appear on special event days (see data/events.js).
// `event: "<eventId>"` keeps them out of the normal daily mailbag.
export default [
  {
    id: "event_festival",
    from: "townsfolk",
    signature: "The Gourd Festival Committee (Est. 1952)",
    event: "festival",
    repeatable: true,
    subject: "URGENT: We Need a Grand Marshal",
    body: "Our Gourd Festival Grand Marshal, a local weatherman, has canceled after \"a disagreement with a gourd.\" The parade is TOMORROW. The committee has voted to let your column decide who leads it. Please choose wisely. Or don't. Honestly, we're tired.",
    options: [
      {
        text: "Edna Voss. Experienced, beloved, terrifying.",
        tone: "sensible",
        success: { headline: "EDNA LEADS FLAWLESS PARADE; NOT ONE FLOAT LATE", text: "Edna ran the parade like a military operation. Floats left at 30-second intervals. A tuba player who fell out of step has not been seen since. Best parade in years." },
        backfire: { headline: "GRAND MARSHAL EDNA RE-ROUTES PARADE PAST RIVAL'S BAKERY, SHOUTING", text: "The parade stopped for 20 minutes outside Crumb & Fury while Edna delivered remarks through a megaphone. The marching band played under her." },
      },
      {
        text: "Dolores the llama. She has the presence.",
        tone: "odd",
        success: { headline: "LLAMA GRAND MARSHAL 'REGAL, UNBLINKING'", text: "Dolores walked the full route without breaking eye contact with the crowd. Children were mesmerized. Adults were unsettled. Everyone agreed it was unforgettable." },
        backfire: { headline: "LLAMA GRAND MARSHAL EATS JUDGES' TABLE", text: "Dolores stopped at the reviewing stand and ate the tablecloth, the scorecards, and a judge's hat. The judge was still wearing it." },
      },
      {
        text: "Gerald the goose. Let the people's bird lead.",
        tone: "chaotic",
        setFlags: ["goose_mayor"],
        success: { headline: "GOOSE GRAND MARSHAL DRAWS RECORD CROWD", text: "Gerald waddled the route hissing at everyone. The crowd chanted his name. A campaign button appeared on his chest. Nobody admits pinning it there." },
        backfire: { headline: "GOOSE ATTACKS PARADE; PARADE FLEES", text: "Gerald turned on the marching band at the first corner. The parade ran the rest of the route in about four minutes. Several floats were abandoned." },
      },
      {
        text: "Me. The advice columnist. I'll do it myself.",
        tone: "chaotic",
        setFlags: ["write_in_candidate"],
        success: { headline: "COLUMNIST {NAME} LEADS PARADE; CROWD CHANTS NAME", text: "Somebody in the crowd yelled \"{NAME} FOR MAYOR!\" and it caught on. Signs appeared. Nobody knows who printed them so fast." },
        backfire: { headline: "COLUMNIST PELTED WITH GOURDS BY READERS WITH GRIEVANCES", text: "Several readers you advised were in the crowd. Several had gourds. {name} finished the route under a tarp." },
      },
    ],
  },

  {
    id: "event_rival",
    from: "marge",
    event: "rival",
    subject: "The Daily Smirk Has Launched. We Need a Response.",
    body: "A new paper called The Daily Smirk opened across the street. Their advice columnist, \"Dr. Brad Truthington,\" has a podcast, veneers, and gives advice like \"believe in yourself\" and \"buy crypto.\" Our readers are curious. I am not. How do we respond? Your column, your call. Don't make me regret it.",
    options: [
      {
        text: "Ignore him. Just keep giving better advice.",
        tone: "sensible",
        success: { headline: "READERS RETURN TO THE DAILY SHRUG: 'AT LEAST IT'S HONEST'", text: "Dr. Brad told a reader with a leaky roof to \"manifest a dry ceiling.\" Our readers noticed. The Smirk's subscriptions are down 40%." },
        backfire: { headline: "BRAD'S VENEERS PROVE MORE POPULAR THAN YOUR ADVICE", text: "The Smirk ran a full-page photo of Brad smiling. Circulation tripled. Our readers say we \"seem tired.\"", stats: { readership: -4, reputation: 0, chaos: 0 } },
      },
      {
        text: "Challenge Dr. Brad to a public advice duel. Live, at the gazebo.",
        tone: "odd",
        success: { headline: "COLUMNIST DEFEATS DR. BRAD IN ADVICE DUEL", text: "Asked how to handle a goose problem, Brad said \"crypto.\" The crowd turned on him. He left the gazebo in a rented convertible.", stats: { readership: 4, reputation: 3, chaos: 0 } },
        backfire: { headline: "DR. BRAD WINS DUEL ON VENEERS ALONE", text: "Brad said nothing useful for 45 minutes, but he smiled the whole time. The audience gave him a standing ovation." },
      },
      {
        text: "Run a column about his hairline. Every week.",
        tone: "chaotic",
        success: { headline: "'BRAD'S HAIRLINE: A WEEKLY UPDATE' IS THE MOST-READ FEATURE IN THE COUNTY", text: "Brad has started wearing hats. The Smirk has started losing readers. Marge says this is \"beneath us\" and also \"keep going.\"", stats: { readership: 6, reputation: -1, chaos: 1 } },
        backfire: { headline: "BRAD SUES OVER HAIRLINE COLUMN; WINS", text: "It turns out the hairline is legally protected (it's a transplant, and the surgeon is litigious). The Shrug owes $3,000. Marge is not speaking to you." },
      },
      {
        text: "Secretly become Dr. Brad's ghostwriter. Control both papers.",
        tone: "chaotic",
        success: { headline: "SAME ADVICE APPEARS IN BOTH PAPERS; NOBODY NOTICES", text: "You are now the town's only advice-giver, under two names. Readers say both columns have \"a similar chaotic energy.\" Brad has no idea what he writes." },
        backfire: { headline: "MARGE DISCOVERS COLUMNIST WORKING FOR RIVAL", text: "Marge found your Smirk drafts in the shared printer. She has written you up. The write-up is 11 pages and includes diagrams.", stats: { readership: 0, reputation: -5, chaos: 2 } },
      },
    ],
  },

  {
    id: "event_editor",
    from: "marge",
    event: "editor",
    subject: "We Need to Talk.",
    body: "I've looked at the numbers. I don't like the numbers. The owner doesn't like the numbers. The numbers don't like themselves. Give me one good reason I shouldn't fire you by Friday and replace you with my nephew, who is fourteen and has a blog.",
    options: [
      {
        text: "Promise to give real, responsible advice from now on.",
        tone: "sensible",
        success: { headline: "EDITOR GRANTS COLUMNIST 'ONE LAST CHANCE'", text: "Marge put a sticky note on your monitor that says LAST CHANCE in red pen. It's not much of a vote of confidence. But you're still here.", stats: { readership: 2, reputation: 8, chaos: -3 } },
        backfire: { headline: "EDITOR UNMOVED BY PROMISES", text: "\"Everyone promises,\" Marge said, lighting a cigarette she does not smoke, just holds. You're on probation." },
      },
      {
        text: "Promise a huge stunt. Something that'll get the whole county reading.",
        tone: "odd",
        success: { headline: "COLUMNIST'S LIVE TELEVISED ADVICE MARATHON DRAWS 6,000 VIEWERS", text: "Twelve hours of live advice on public access. You told a man to divorce his boat. Readership spiked. Marge called it \"embarrassing but profitable.\"", stats: { readership: 10, reputation: 0, chaos: 3 } },
        backfire: { headline: "STUNT FAILS; COLUMNIST STUCK ON WATER TOWER", text: "The plan involved the water tower and a banner. The fire department needed six hours. Dusty sold lemonade.", stats: { readership: 3, reputation: -3, chaos: 3 } },
      },
      {
        text: "Bribe Marge with one of Edna Voss's pies.",
        tone: "odd",
        success: { headline: "EDITOR ACCEPTS PIE, SPARES COLUMNIST", text: "Marge ate the entire pie in silence, standing at the window. Then she said, \"Fine. One more month.\" Then she asked where to get another.", stats: { readership: 2, reputation: 6, chaos: 0 } },
        backfire: { headline: "PIE TURNS OUT TO BE PRIYA'S; EDITOR ALLERGIC TO ALMONDS", text: "Marge was fine after a short hospital visit. She has written you up. From the hospital bed." },
      },
      {
        text: "Threaten to quit and move into a lighthouse.",
        tone: "chaotic",
        setFlags: ["lighthouse_tenant"],
        success: { headline: "EDITOR CALLS COLUMNIST'S BLUFF, THEN BLINKS", text: "\"You wouldn't,\" Marge said. You showed her the lighthouse rental agreement. She went pale and gave you a raise.", stats: { readership: 3, reputation: 5, chaos: 2 } },
        backfire: { headline: "EDITOR HELPS COLUMNIST PACK", text: "Marge said, \"Great, I'll get you a box.\" She came back with three. You've unpacked them, but the threat is noted." },
      },
    ],
  },

  {
    id: "event_storm",
    from: "townsfolk",
    signature: "Shrugsville Emergency Committee (It's Just Ron)",
    event: "storm",
    repeatable: true,
    subject: "Big Storm Coming. Where Should Everyone Shelter?",
    body: "The weather service says a big storm hits tomorrow night. The high school gym roof has \"opinions.\" I'm the emergency committee. Well, I'm Ron. People read your column more than they read the emergency texts, so... where should the town go?",
    options: [
      {
        text: "The high school gym. Bring flashlights. Follow the official plan.",
        tone: "sensible",
        success: { headline: "STORM PASSES; GYM HOLDS; TOWN PLAYS BOARD GAMES ALL NIGHT", text: "300 residents sheltered safely. Edna Voss won 14 straight games of Monopoly. Nobody has played with her since." },
        backfire: { headline: "GYM ROOF 'EXPRESSES ITS OPINIONS'", text: "The roof leaked onto the basketball court. Residents sheltered under the bleachers. Everyone is fine, damp, and a bit annoyed." },
      },
      {
        text: "The lighthouse. It's literally built for storms.",
        tone: "odd",
        setFlags: ["lighthouse_tenant"],
        success: { headline: "200 RESIDENTS RIDE OUT STORM IN LIGHTHOUSE; WALT MAKES SOUP", text: "Packed shoulder to shoulder up the spiral stairs, the town sang sea shanties all night. Walt says it was the best night of his life." },
        backfire: { headline: "LIGHTHOUSE STAIRS TOO NARROW FOR 200 PEOPLE", text: "The line went down the stairs, out the door, and along the beach. Most people sheltered in their cars in the parking lot, listening to Walt's stories on a megaphone." },
      },
      {
        text: "The Suds-n-Duds laundromat. Ghost included. It's cozy.",
        tone: "odd",
        success: { headline: "LAUNDROMAT STORM SHELTER 'WARM, HAUNTED, LOVELY'", text: "Harold the ghost kept the dryers running all night for warmth. Everyone's clothes are clean. Several people now believe in ghosts." },
        backfire: { headline: "STORM KNOCKS OUT POWER; GHOST STORIES GET OUT OF HAND", text: "In the dark, Harold tried to help by telling ghost stories. Thirty people fled into the storm. Harold feels awful." },
      },
      {
        text: "The Mayor's private hot tub. It's 'municipal,' isn't it?",
        tone: "chaotic",
        setFlags: ["mayor_suspicious"],
        success: { headline: "TOWN WEATHERS STORM IN MAYOR'S BACKYARD HOT TUB", text: "Seventy people in a heated tub under a tarp. It was warm. It was strangely joyful. Nobody asked why the Mayor has a $90,000 hot tub. Yet." },
        backfire: { headline: "HUNDREDS DISCOVER MAYOR'S SECRET HOT TUB DURING STORM", text: "The questions started immediately. \"Municipal?\" someone asked. The Mayor said \"Yes.\" It was the wrong answer." },
      },
    ],
  },
];
