// Walt Brickman, retired lighthouse keeper. His lighthouse is where the town's worst advice ends up.
export default [
  {
    id: "walt_1",
    from: "walt",
    minDay: 4,
    subject: "Too Quiet at the Lighthouse",
    body: "I kept the Shrugsville Point lighthouse for 42 years. Now it's automated, I'm retired, I still live here, and it's very quiet. Just me, the gulls, and a lamp that doesn't need me anymore. My daughter says I should get out more. I'd rather people came in. What do I do with a lighthouse and too much time?",
    postscripts: [
      { requires: ["lighthouse_tenant"], text: "P.S. People keep turning up saying \"the advice columnist told me to move to a lighthouse.\" I assume that's you." },
      { requires: ["gus_lighthouse"], text: "P.S. Gus Pettibone is in the spare room. Nice fellow. Jumps at sounds." },
      { requires: ["lighthouse_visit"], text: "P.S. Someone has been using my lighthouse for stunts. I found an umbrella in the compost." },
    ],
    options: [
      {
        text: "Rent out rooms. A bed & breakfast. The views sell themselves.",
        tone: "sensible",
        success: {
          headline: "LIGHTHOUSE B&B BOOKED SOLID THROUGH SUMMER",
          text: "Walt's \"Keeper's Rest\" has 4.9 stars. Guests praise the views, the breakfast, and Walt's stories, which are \"long but worth it.\"",
        },
        backfire: {
          headline: "B&B GUEST REFUSES TO LEAVE; MAY BE A PIRATE",
          text: "\"Captain Lou\" checked in three weeks ago and won't check out. He has a parrot. The parrot owes Walt money.",
          setFlags: ["lighthouse_tenant"],
        },
      },
      {
        text: "Open it to everyone my column sends you. A refuge for the badly advised.",
        tone: "chaotic",
        setFlags: ["lighthouse_open", "lighthouse_tenant"],
        success: {
          headline: "LIGHTHOUSE BECOMES 'REFUGE FOR THE BADLY ADVISED'",
          text: "It's now a warm, strange little community. Walt has never been happier. Walt has never been busier.",
        },
        backfire: {
          headline: "LIGHTHOUSE NOW HOUSES 30 PEOPLE AND ONE BATHROOM",
          text: "The bathroom schedule is laminated. There is a waitlist for the bathroom.",
        },
      },
      {
        text: "Give spooky lighthouse tours. Charge $5. Make up a ghost.",
        tone: "odd",
        success: {
          headline: "LIGHTHOUSE GHOST TOUR 'TERRIFYING, ENJOYABLE'",
          text: "Walt invented \"the Phantom Keeper.\" Tourists love it. Harold the laundromat ghost is jealous.",
        },
        backfire: {
          headline: "KEEPER SCARES HIMSELF WITH OWN GHOST STORY",
          text: "Walt told the Phantom Keeper story so well he now refuses to go upstairs. The tour ends at the gift shop. The gift shop is a card table.",
        },
      },
      {
        text: "Swap the lamp for a disco ball. Lighthouse raves.",
        tone: "chaotic",
        success: {
          headline: "LIGHTHOUSE RAVES DRAW CROWDS FROM THREE COUNTIES",
          text: "Every Friday the lighthouse becomes LIGHT HOUSE, and Walt, 74, DJs in a cardigan. His signature track is a foghorn remix.",
        },
        backfire: {
          headline: "DISCO LIGHTHOUSE LURES FISHING BOATS, MOTHS",
          text: "Three boats followed the strobing lamp in and docked for the party. The Coast Guard was not amused. The moths were.",
        },
      },
    ],
  },

  {
    id: "walt_2",
    from: "walt",
    after: "walt_1",
    minDay: 7,
    subject: "The Lighthouse Has Become... a Lot",
    body: "So. The lighthouse. It's gotten crowded. I've never known how to say no to people. Someone is sleeping in the lamp room. Someone is keeping chickens on the stairs. I found a man in the cupboard who said he was \"just following advice.\" What do I do?",
    postscripts: [
      { requires: ["gus_lighthouse"], text: "P.S. Gus is still here." },
      { requires: ["llamas_loose"], text: "P.S. There may also be llamas. I've stopped counting." },
      { requires: ["lighthouse_bakery"], text: "P.S. There's a bakery on the ground floor now. I don't remember agreeing to that, but the scones are excellent." },
    ],
    options: [
      {
        text: "Set boundaries. Kind ones. Post house rules.",
        tone: "sensible",
        success: {
          headline: "LIGHTHOUSE HOUSE RULES POSTED; HARMONY ACHIEVED",
          text: "Rule 1: No chickens on the stairs. Rule 2: Nobody sleeps in the lamp. Rule 3: Walt gets the good chair. Everyone signed. Walt is sleeping again.",
        },
        backfire: {
          headline: "TENANTS' COMMITTEE VETOES ALL OF KEEPER'S RULES",
          text: "Walt has been relocated to the broom closet. He says it's \"actually quite cozy.\"",
        },
      },
      {
        text: "Embrace it. Declare the lighthouse an independent nation.",
        tone: "chaotic",
        setFlags: ["lighthouse_nation"],
        success: {
          headline: "'REPUBLIC OF SHRUGSVILLE POINT' DECLARED; WALT CROWNED KING",
          text: "King Walter I rules 31 citizens and two chickens. The national export is soup. The anthem is a foghorn. The state government \"has questions.\"",
        },
        backfire: {
          headline: "NEW LIGHTHOUSE NATION ACCIDENTALLY DECLARES WAR ON CAR WASH",
          text: "It happened during the first press conference. Bubbles Car Wash surrendered immediately. Nobody knows what to do with it.",
        },
      },
      {
        text: "Move out. Let them have it. Find a smaller lighthouse.",
        tone: "odd",
        success: {
          headline: "KEEPER RETIRES TO 'TINY LIGHTHOUSE' (A LAWN ORNAMENT)",
          text: "Walt set up a lawn chair next to a decorative lighthouse on a quiet beach and says he is finally, truly retired.",
        },
        backfire: {
          headline: "KEEPER MOVES OUT; TENANTS FOLLOW HIM",
          text: "Walt moved into a camper. Thirty people followed. The camper is now a commune. The lighthouse stands empty and sad.",
        },
      },
      {
        text: "Charge rent. Payable in pie.",
        tone: "odd",
        success: {
          headline: "PIE-BASED ECONOMY THRIVES AT LIGHTHOUSE",
          text: "Walt has 400 pies. He gives them away around town and has become beloved. His cholesterol has become a community concern.",
        },
        backfire: {
          headline: "PIE INFLATION HITS LIGHTHOUSE",
          text: "Edna Voss moved in and flooded the market. A single room now costs 40 pies. Tenants are being evicted. Walt never studied economics.",
        },
      },
    ],
  },
];
