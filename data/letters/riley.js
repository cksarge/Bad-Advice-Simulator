// Riley Okafor, 16, frontperson of Feral Tax Return. Moose plays the bucket.
export default [
  {
    id: "riley_1",
    from: "riley",
    minDay: 1,
    subject: "My Band Needs Its First Gig",
    body: "I'm 16 and I started a band called Feral Tax Return. We have one song. It's called \"Feral Tax Return.\" Our drummer, Moose, plays a bucket. Our bassist is my cousin and he's eleven. We are ready to be famous. Where should we play our first show?",
    options: [
      {
        text: "Practice for a few months. Then enter the school talent show.",
        tone: "sensible",
        success: {
          headline: "FERAL TAX RETURN WINS TALENT SHOW; TEACHERS 'SHAKEN'",
          text: "Now armed with two songs, the band won the Shrugsville High talent show. The second song is called \"Feral Tax Return II.\" The bucket solo got a standing ovation.",
        },
        backfire: {
          headline: "BAND PRACTICES TOO HARD; BUCKET BREAKS",
          text: "Moose broke the bucket in week two. Morale collapsed. The band is on \"creative hiatus\" while Moose searches for a bucket \"with the right soul.\"",
        },
      },
      {
        text: "Play the retirement home. Tough crowd, but honest.",
        tone: "odd",
        success: {
          headline: "SENIORS MOSH AT SUNNY ACRES",
          text: "Residents formed what staff called \"a slow but sincere mosh pit.\" Edna Voss crowd-surfed. Nobody has explained how.",
          setFlags: ["riley_famous"],
        },
        backfire: {
          headline: "BAND'S SOUND CHECK CAUSES 14 HEARING AID FAILURES",
          text: "The sound check alone disabled every hearing aid in the building. Residents watched in total silence, which Riley calls \"our most respectful audience yet.\"",
        },
      },
      {
        text: "Crash the town council meeting. Play during public comment.",
        tone: "chaotic",
        setFlags: ["riley_townhall"],
        success: {
          headline: "COUNCIL ACCIDENTALLY VOTES TEEN BAND 'OFFICIAL TOWN BAND'",
          text: "Feral Tax Return played during public comment. The council was so stunned it accidentally voted to make them the official town band. Mayor Plum signed it \"to make them stop.\"",
          setFlags: ["riley_famous"],
        },
        backfire: {
          headline: "TEENS REMOVED FROM COUNCIL MEETING; BUCKET SEIZED AS EVIDENCE",
          text: "The band was escorted out mid-chorus. The bucket is in an evidence locker. Moose is devastated. The video went viral. Riley calls it \"a win, spiritually.\"",
        },
      },
      {
        text: "Change the band name to something worse. Then play anywhere.",
        tone: "chaotic",
        success: {
          headline: "'ACCIDENTAL CHOWDER' BOOKED FOR 12 SHOWS",
          text: "The band, now called Accidental Chowder, somehow has a booking agent. Nobody knows why the name works. It just does.",
          setFlags: ["riley_famous"],
        },
        backfire: {
          headline: "BAND RENAMES ITSELF 'MOIST GRANDPA'; EVERY VENUE SAYS NO",
          text: "Every venue in the county declined. Riley's actual grandpa has stopped speaking to the family.",
        },
      },
    ],
  },

  {
    id: "riley_2",
    from: "riley",
    after: "riley_1",
    minDay: 4,
    subject: "My Parents Want Me to Quit the Band",
    body: "My parents found my report card. I have a D in Chemistry and an F in \"Attendance,\" which I didn't even know was a class. They say the band is over unless my grades go up. But art is suffering! Should I suffer more?",
    postscripts: [
      { requires: ["riley_famous"], text: "P.S. We're kind of famous now though??? A lady at the post office recognized me." },
      { requires: ["riley_ballad"], text: "P.S. We wrote a power ballad for a llama farmer's girlfriend. It's our biggest hit. It's about feed." },
    ],
    options: [
      {
        text: "Make a deal: grades go up, band stays. Study between rehearsals.",
        tone: "sensible",
        success: {
          headline: "TEEN RAISES CHEMISTRY GRADE TO A B, WRITES SONG ABOUT IT",
          text: "\"Covalent Bond (With You)\" is a banger. Riley's chemistry teacher plays it in class. Parents are cautiously proud.",
        },
        backfire: {
          headline: "TEEN NOW BAD AT TWO THINGS",
          text: "Riley tried to do both and is now failing Chemistry and has also forgotten how to play guitar. Moose is carrying the band. On a bucket.",
        },
      },
      {
        text: "Record an album at the haunted laundromat. Acoustics plus ghosts equals genius.",
        tone: "odd",
        setFlags: ["ghost_vocals"],
        success: {
          headline: "TEEN BAND'S ALBUM FEATURES 'GENUINELY GHOSTLY' BACKUP VOCALS",
          text: "The album \"Spin Cycle\" has unexplained harmonies on every track. Harold the laundromat ghost is credited as \"Harold (deceased).\" It's charting on college radio.",
          setFlags: ["riley_famous"],
        },
        backfire: {
          headline: "LAUNDROMAT ALBUM IS 40 MINUTES OF DRYER NOISE",
          text: "Riley insists it's \"experimental.\" One critic gave it four stars. The other 300 listeners asked for refunds.",
        },
      },
      {
        text: "Write a diss track about your parents. Release it publicly.",
        tone: "chaotic",
        success: {
          headline: "DISS TRACK 'CURFEW IS A CAGE' GOES VIRAL; PARENTS IMPRESSED",
          text: "Riley's parents listened and admitted \"the bridge slaps.\" The band stays. The grades remain bad.",
          setFlags: ["riley_famous"],
        },
        backfire: {
          headline: "PARENTS RESPOND WITH THEIR OWN DISS TRACK, WHICH IS BETTER",
          text: "Riley's mom dropped \"Clean Your Room (Remix)\" 48 hours later. It has 300,000 plays. Riley is grounded and humbled.",
        },
      },
      {
        text: "Run away on tour. Bring a toothbrush.",
        tone: "chaotic",
        success: {
          headline: "TEEN'S THREE-DAY 'TOUR' ENDS AT GRANDMA'S HOUSE WITH SIX FANS",
          text: "Riley played two gas stations and a bowling alley before ending up at Grandma's in the next county. Grandma made lasagna for everyone. Best tour ever.",
        },
        backfire: {
          headline: "TOUR VAN BREAKS DOWN FOUR MILES FROM HOME",
          text: "Riley's mom picked the band up in the minivan and played their song on the stereo the whole way home, singing along. Riley describes this as \"worse than jail.\"",
        },
      },
    ],
  },

  {
    id: "riley_3",
    from: "riley",
    after: "riley_2",
    minDay: 7,
    subject: "A Man Wants to Sign Us",
    body: "A guy named Lenny Bigwallet from Platinum Thunder Records wants to sign Feral Tax Return. He has a gold tooth and a 90-page contract. Page 47 mentions \"the rights to your likeness, voice, and soul, in perpetuity, throughout the universe.\" Is that normal?",
    options: [
      {
        text: "Have a lawyer read it. Every page. Especially 47.",
        tone: "sensible",
        success: {
          headline: "LAWYER STRIKES 'SOUL CLAUSE'; BAND SIGNS FAIR DEAL",
          text: "The lawyer removed the soul clause, the firstborn clause, and the \"Lenny gets your car\" clause. The band signed a modest, decent deal. First single drops next month.",
          setFlags: ["riley_famous"],
        },
        backfire: {
          headline: "ONLY LAWYER IN TOWN TURNS OUT TO BE LENNY BIGWALLET",
          text: "Lenny reviewed his own contract and found it \"airtight.\" Feral Tax Return now owes Platinum Thunder one soul, lightly used.",
        },
      },
      {
        text: "Sign nothing. Go independent. Sell tapes out of a car trunk.",
        tone: "odd",
        success: {
          headline: "INDIE TAPES SELL OUT; BAND OWNS ITS SOULS OUTRIGHT",
          text: "Feral Tax Return sold 400 cassettes out of a Honda Civic. Lenny Bigwallet has been seen weeping at a gas station.",
          setFlags: ["riley_famous"],
        },
        backfire: {
          headline: "TRUNK TAPES MELT INTO SINGLE BRICK",
          text: "All 400 cassettes melted together in the summer heat. Riley is selling the brick as \"the album.\" Asking price: $9,000. No bites.",
        },
      },
      {
        text: "Sign it in blood. Commitment is punk.",
        tone: "chaotic",
        success: {
          headline: "BLOOD CONTRACT RULED 'GROSS AND LEGALLY MEANINGLESS'",
          text: "A judge voided the contract. The band keeps the $5,000 advance and their souls. Lenny has been disbarred from something.",
          setFlags: ["riley_famous"],
        },
        backfire: {
          headline: "AFTER BLOOD SIGNING, RECORD EXEC SEEMS 'TOO HAPPY'",
          text: "Lenny laughed for a long time. The lights flickered. Riley says the band's music has gotten \"scarier.\" Their parents say Riley has gotten \"polite,\" which is somehow worse.",
        },
      },
      {
        text: "Counter-offer: Lenny has to play bucket for one show first.",
        tone: "odd",
        success: {
          headline: "RECORD EXEC PLAYS BUCKET, FINDS HIS TRUE CALLING",
          text: "Lenny played the bucket and wept. He quit the record business and is now Feral Tax Return's second bucket player. Moose has mixed feelings.",
          setFlags: ["riley_famous"],
        },
        backfire: {
          headline: "RECORD EXEC IS SHOCKINGLY BAD AT BUCKET",
          text: "The deal is off. Moose says it was \"like watching a man fight a bucket and lose.\"",
        },
      },
    ],
  },

  {
    id: "riley_4",
    from: "riley",
    after: "riley_3",
    minDay: 10,
    subject: "We're Headlining the Gourd Festival?!",
    body: "The festival committee asked Feral Tax Return to headline this weekend. Big crowd. Big stage. Our set is four minutes long because we still only have three songs. What do we do with the other 56 minutes?",
    postscripts: [
      { requires: ["ghost_vocals"], text: "P.S. Harold the ghost wants to sing backup live. He's very nervous. The microphone keeps getting cold." },
    ],
    options: [
      {
        text: "Play your three songs, then do a heartfelt Q&A.",
        tone: "sensible",
        success: {
          headline: "BAND'S FOUR-MINUTE SET AND Q&A CALLED 'MOVING'",
          text: "Moose explained his relationship with his bucket. There wasn't a dry eye in the field. Feral Tax Return has been booked for next year.",
        },
        backfire: {
          headline: "Q&A DERAILS INTO 50-MINUTE LECTURE ON TAXES",
          text: "Someone asked what \"Feral Tax Return\" means. Nobody in the band knew. A CPA in the crowd took over and explained deductions for an hour. Several people learned something.",
        },
      },
      {
        text: "Play the same song 15 times in a row. Commit to the bit.",
        tone: "odd",
        success: {
          headline: "SONG PLAYED 15 TIMES BECOMES 'HYPNOTIC EXPERIENCE'",
          text: "By the ninth time the crowd knew all the words. By the twelfth, people were crying. By the fifteenth, three couples had gotten engaged.",
        },
        backfire: {
          headline: "CROWD WALKS OUT AFTER SIXTH REPETITION",
          text: "Only Dolores the llama remained, staring. The band played the last nine for her alone. She did not clap.",
        },
      },
      {
        text: "Invite every reader I've ever advised up on stage. Chaos jam.",
        tone: "chaotic",
        success: {
          headline: "'THE COLUMN JAM': EVERYONE ON STAGE, SOMEHOW PERFECT",
          text: "Edna on tambourine, Mayor Plum on kazoo, Gus on spoons, Harold on \"ambient wailing,\" and a goose. It was the best 56 minutes of music the county has ever heard.",
        },
        backfire: {
          headline: "'COLUMN JAM' COLLAPSES STAGE",
          text: "Twenty-three people, two llamas, a goose and a possible ghost were too much for the stage. Nobody was badly hurt. The band finished the set in the rubble. Critics loved that part.",
        },
      },
      {
        text: "Light something on fire. Safely. Ish.",
        tone: "chaotic",
        success: {
          headline: "FLAMING BUCKET SOLO 'TASTEFUL'; FIRE MARSHAL 'IMPRESSED'",
          text: "Moose's flaming bucket solo has been called \"the greatest moment in local music.\" The fire marshal asked for an autograph.",
        },
        backfire: {
          headline: "BAND IGNITES FESTIVAL GOURD PILE; TOWN SMELLS OF PIE FOR A WEEK",
          text: "1,200 decorative gourds were roasted. The whole town smells like a pumpkin spice candle, which isn't all bad. The committee has billed the band $11,000.",
        },
      },
    ],
  },
];
