// Edna Voss, 81, competitive grandmother. Rivals: Priya the baker, Gladys from bingo, gravity.
export default [
  {
    id: "edna_1",
    from: "edna",
    minDay: 1,
    subject: "A Bakery Opened Across the Street",
    body: "I'm 81 years old and I've won the Shrugsville Pie Ribbon 34 years running. Last week some young woman named Priya opened a fancy bakery across from my house. She makes \"croissants.\" People line up. One of my bridge ladies bought a \"macaron\" and didn't even try to hide it. I am not a violent woman, but I'm considering it.",
    options: [
      {
        text: "Walk over with a pie and introduce yourself. Make a friend.",
        tone: "sensible",
        success: {
          headline: "PIE DIPLOMACY: EDNA AND NEWCOMER NOW 'FRENEMIES'",
          text: "Edna brought a cherry pie. Priya brought out a tart. They compared crusts in tense silence for an hour. Edna's verdict: \"She's good. I'll allow it. I'm still better.\"",
          setFlags: ["edna_priya_friends"],
        },
        backfire: {
          headline: "WELCOME PIE ENDS IN SHOUTING",
          text: "Priya called Edna's crust \"rustic.\" Edna heard \"rusty.\" Nobody heard the rest of the conversation because of the shouting.",
        },
      },
      {
        text: "Challenge her to a public bake-off. Settle it like ladies.",
        tone: "odd",
        setFlags: ["bakeoff"],
        success: {
          headline: "BAKE-OFF ANNOUNCED; TOWN GIDDY",
          text: "Priya accepted with a slow nod. Banners are being printed. Bookies are taking bets. Edna is the favorite at 3-to-2.",
        },
        backfire: {
          headline: "BAKE-OFF CHALLENGE DELIVERED VIA BRICK",
          text: "Edna tied her written challenge to a brick, intending to set it gently on the doorstep. Her arm is stronger than she knew. Priya accepted from behind a new window.",
        },
      },
      {
        text: "Swap her sugar for salt. All's fair in pie and war.",
        tone: "chaotic",
        setFlags: ["edna_sabotage"],
        success: {
          headline: "BAKERY'S 'SALTED EVERYTHING' MENU A SURPRISE HIT",
          text: "Priya's accidentally salted croissants are a regional sensation. A food blogger called them \"daring.\" Edna is furious her sabotage became a trend. Priya sent her a thank-you note.",
        },
        backfire: {
          headline: "GRANDMOTHER CAUGHT IN BAKERY AT 3 A.M. WITH SALT",
          text: "Security cameras caught Edna Voss in a black turtleneck carrying a ten-pound bag of salt. She claims she was \"returning it.\" The bridge club posted bail.",
        },
      },
      {
        text: "Retire from competitive baking. You have nothing left to prove.",
        tone: "sensible",
        success: {
          headline: "EDNA RETIRES, TAKES UP COMPETITIVE KAYAKING",
          text: "Edna has hung up her apron. She's already won two kayaking medals and made a 19-year-old cry at the boat ramp. \"Competition is my oxygen,\" she says.",
        },
        backfire: {
          headline: "RETIREMENT LASTS 11 HOURS",
          text: "Edna announced her retirement at 9 a.m. By 8 p.m. she had baked forty pies \"to stay limber\" and left them on Priya's doorstep with notes reading \"Just practicing.\"",
          setFlags: ["bakeoff"],
        },
      },
    ],
  },

  {
    id: "edna_2",
    from: "edna",
    after: "edna_1",
    minDay: 3,
    subject: "Bingo Night Accusations",
    body: "Thursday Bingo at St. Bartholomew's has gotten ugly. I've won six weeks straight and Gladys Pruitt is telling everyone I cheat. I do not cheat. I am simply better at bingo, which is a skill, regardless of what \"statisticians\" say. How do I clear my name?",
    postscripts: [
      { requires: ["edna_llamas"], text: "P.S. I'm also guarding Gus Pettibone's llamas at night now. The one called Dolores and I have an understanding. The understanding is that I'm watching her." },
      { requires: ["bakeoff"], text: "P.S. The bake-off is still on. I've been training. I can now crimp a crust blindfolded." },
    ],
    options: [
      {
        text: "Let someone else check your cards for a week. Transparency wins.",
        tone: "sensible",
        success: {
          headline: "EDNA CLEARED BY INDEPENDENT BINGO AUDIT",
          text: "Monsignor Dale personally verified every card. Edna won again, fairly. Gladys apologized, and also left the parish.",
        },
        backfire: {
          headline: "AUDIT REVEALS EDNA HAS 'A SYSTEM'",
          text: "The audit found Edna wasn't cheating, exactly, but had memorized the caller's ball-grabbing habits over 40 years. She's been asked to \"bingo with less intensity.\"",
        },
      },
      {
        text: "Ask the ghost at the Suds-n-Duds to call the numbers. You can't bribe a ghost.",
        tone: "odd",
        setFlags: ["harold_bingo"],
        success: {
          headline: "GHOST CALLS BINGO; ATTENDANCE TRIPLES",
          text: "Harold, the laundromat ghost, now calls numbers from beyond the veil (a cardboard box with eye holes). The hall is packed. Nobody accuses anybody of anything. Everybody is slightly scared.",
        },
        backfire: {
          headline: "GHOST-CALLED BINGO ENDS IN EXORCISM",
          text: "Monsignor Dale was not consulted. When B-12 was called by a disembodied voice, he reached for the holy water. Harold is fine. The bingo hall carpet is not.",
        },
      },
      {
        text: "Start an underground bingo ring. Higher stakes. No Gladys.",
        tone: "chaotic",
        setFlags: ["underground_bingo"],
        success: {
          headline: "UNDERGROUND BINGO RING 'BEST NIGHT IN TOWN'",
          text: "Edna's secret bingo, held in a basement under the VFW, draws 80 people a night. There's a password. There's a bouncer. The bouncer is Edna.",
        },
        backfire: {
          headline: "POLICE RAID GRANDMA BINGO DEN",
          text: "Officers found $1,200, a fog machine, and Edna standing on a table yelling \"O-69\" with an energy described as \"menacing.\" Charges were dropped out of sheer confusion.",
        },
      },
      {
        text: "Challenge Gladys to a bingo duel to the death. Metaphorically. Mostly.",
        tone: "chaotic",
        success: {
          headline: "EDNA WINS BINGO DUEL; GLADYS BOWS",
          text: "In a three-hour single-card showdown in front of 200 people, Edna won on the final ball. Gladys shook her hand and said, \"You are the greatest who ever lived.\"",
        },
        backfire: {
          headline: "BINGO DUEL SENDS TWO GRANDMOTHERS TO HOSPITAL",
          text: "Neither would yield. After six hours both were hospitalized for dehydration. They share a room now and play bingo on their IV bags.",
        },
      },
    ],
  },

  {
    id: "edna_3",
    from: "edna",
    after: "edna_2",
    minDay: 6,
    subject: "My Grandson Says I'm Too Old to Skydive",
    body: "My grandson Tyler, who is 34 and still has a \"gaming chair,\" says I'm too old to go skydiving for my 82nd birthday. I've been training. I can do a pull-up. Should I jump out of an airplane to prove a point to a man who eats cereal for dinner?",
    postscripts: [
      { requires: ["underground_bingo"], text: "P.S. Bingo is going very well. Don't ask where." },
    ],
    options: [
      {
        text: "Talk to your doctor first. Then jump, if she says yes.",
        tone: "sensible",
        success: {
          headline: "82-YEAR-OLD SKYDIVES WITH DOCTOR'S BLESSING",
          text: "Dr. Amy Lin cleared Edna and then, inspired, jumped with her. Both landed safely. Tyler watched from a lawn chair, eating cereal.",
        },
        backfire: {
          headline: "DOCTOR SAYS NO; EDNA JUMPS ANYWAY",
          text: "Edna fired Dr. Lin and jumped anyway. She landed in the community pool during water aerobics. Nobody was hurt. Three people found religion.",
        },
      },
      {
        text: "Skip the plane. Start a grandma motorcycle gang instead.",
        tone: "odd",
        setFlags: ["grandma_gang"],
        success: {
          headline: "'THE HELL'S GRANNIES' RIDE AGAIN",
          text: "Edna and eleven bridge ladies now ride Vespas in formation every Sunday in leather vests that read BORN TO KNIT. Downtown crime has dropped. Nobody knows why.",
        },
        backfire: {
          headline: "GRANDMA GANG STARTS TURF WAR WITH LOCAL GEESE",
          text: "The Hell's Grannies rode through Maple Court and were ambushed by Gerald the goose and his associates. Two Vespas were lost. The grannies have vowed revenge.",
          setFlags: ["geese_war"],
        },
      },
      {
        text: "Challenge Tyler to a duel. Water pistols at dawn.",
        tone: "chaotic",
        success: {
          headline: "GRANDMA DEFEATS GRANDSON IN DUEL; GRANDSON GETS A JOB",
          text: "Edna won with one shot. Tyler, soaked and humiliated, got a job the next morning. \"Something about her eyes,\" he said. \"I've never been so motivated.\"",
        },
        backfire: {
          headline: "DUEL ESCALATES TO SUPER SOAKERS, THEN A FIRE HOSE",
          text: "Edna brought a fire hose borrowed from Volunteer Station 2. Tyler was blasted into a hedge. The hedge has filed a complaint. Tyler has moved out of state.",
        },
      },
      {
        text: "Jump off the lighthouse with an umbrella. Cheaper than a plane.",
        tone: "chaotic",
        setFlags: ["lighthouse_visit"],
        success: {
          headline: "GRANDMA GLIDES FROM LIGHTHOUSE ON UMBRELLA",
          text: "Witnesses describe it as \"the single most beautiful thing ever to happen in this town.\" The umbrella was from Costco. Edna is in talks for an umbrella sponsorship.",
        },
        backfire: {
          headline: "UMBRELLA FAILS; GRANDMA FINE; UMBRELLA NOT",
          text: "The umbrella inverted and Edna dropped twelve feet into Walt Brickman's compost heap. She climbed out, said \"Again,\" and had to be physically restrained by Walt.",
        },
      },
    ],
  },

  {
    id: "edna_4",
    from: "edna",
    after: "edna_3",
    minDay: 9,
    subject: "I'm Thinking of Running for Mayor",
    body: "Mayor Plum is clearly hiding something. Possibly several somethings. This town needs a strong hand, and my hands are very strong from 70 years of kneading. Should I run? The filing deadline is Friday.",
    postscripts: [
      { requires: ["grandma_gang"], text: "P.S. The Hell's Grannies have pledged their support, and their Vespas." },
      { requires: ["mayor_suspicious"], text: "P.S. Everyone at the beauty parlor agrees the Mayor is up to something. The beauty parlor is never wrong." },
    ],
    options: [
      {
        text: "Run! Clean campaign. Real issues.",
        tone: "sensible",
        setFlags: ["edna_candidate"],
        success: {
          headline: "EDNA VOSS LAUNCHES CAMPAIGN: 'PIE FOR ALL, FEAR FOR SOME'",
          text: "Edna has the support of the bridge club, the bingo crowd, and an alarming number of truckers. Early polls show her up 12 points.",
        },
        backfire: {
          headline: "EDNA CAMPAIGN ROCKED BY 'PIE-GATE'",
          text: "Her first event featured free pie. A rival called it vote-buying. Edna called the rival \"a weasel.\" The rival, a weasel enthusiast, found this deeply offensive.",
        },
      },
      {
        text: "Stay out of politics. It's beneath a woman of your talents.",
        tone: "sensible",
        success: {
          headline: "EDNA DECLINES RUN, OPENS SELF-DEFENSE STUDIO FOR SENIORS",
          text: "\"Grandma Krav Maga\" already has a waitlist. Lesson one: \"How to Say No to Your Grandson.\"",
        },
        backfire: {
          headline: "EDNA STAYS OUT OF POLITICS, GETS BORED, RUNS FOR SCHOOL BOARD",
          text: "She won in a landslide. The school lunch menu now includes pie every day. Children are thriving. Parents are concerned.",
        },
      },
      {
        text: "Don't run yourself. Launch a write-in campaign for... me, the advice columnist.",
        tone: "chaotic",
        setFlags: ["write_in_candidate"],
        success: {
          headline: "'WRITE IN {NAME}!' SIGNS APPEAR ACROSS TOWN",
          text: "Edna and the bridge club have plastered Shrugsville with signs bearing {name}'s name. Polls show {name} at 31%, higher than anyone expected, including {name}.",
        },
        backfire: {
          headline: "WRITE-IN SIGNS FEATURE DRAWING OF 'A POTATO'",
          text: "Edna's 4,000 signs read VOTE FOR THE ADVICE PERSON above a drawing that looks like a potato. People seem to like the potato. The potato is polling well.",
        },
      },
      {
        text: "Run, and challenge Plum to a pie-eating contest instead of a debate.",
        tone: "chaotic",
        setFlags: ["edna_candidate"],
        success: {
          headline: "EDNA OUT-EATS MAYOR, 14 PIES TO 3",
          text: "Mayor Plum withdrew after pie three, citing \"a prior engagement.\" Edna finished pie fourteen, dabbed her mouth, and said \"Next.\"",
        },
        backfire: {
          headline: "PIE CONTEST REVEALS CANDIDATE IS LACTOSE INTOLERANT",
          text: "Edna's campaign has been paused for \"health reasons.\" The high school gym is being professionally cleaned.",
        },
      },
    ],
  },
];
