// One-off letters from everyone else in Shrugsville. These fill gaps between storyline letters.
// `repeatable: true` lets them come back in Endless mode after a cooldown.
export default [
  {
    id: "town_yogurt",
    from: "townsfolk",
    signature: "Lactose Tolerant, Patience Intolerant",
    repeatable: true,
    subject: "My Roommate Eats My Labeled Yogurt",
    body: "I label my yogurt. I write my NAME on it. In Sharpie. My roommate Derek eats it anyway and leaves the empty cup in the fridge, lid on, like a trap. I've found eleven so far. I'm starting to think he's doing it to watch me open them.",
    options: [
      {
        text: "Talk to Derek calmly. Maybe propose a fridge-shelf system.",
        tone: "sensible",
        success: { headline: "FRIDGE TREATY SIGNED; YOGURT SAFE", text: "Derek apologized and admitted he \"didn't think the labels were for him.\" He now buys his own yogurt. He also labels it, with YOUR name, out of habit." },
        backfire: { headline: "DEREK CLAIMS HE 'DOESN'T EVEN LIKE YOGURT'", text: "Derek denied everything during a calm conversation while visibly holding a spoon. The empty cups now come with little thank-you notes." },
      },
      {
        text: "Label the yogurt 'HAROLD'S — DO NOT DISTURB.' Let the ghost handle it.",
        tone: "odd",
        success: { headline: "ROOMMATE TOO SCARED TO OPEN FRIDGE", text: "Derek now treats the yogurt like a cursed object. He hasn't touched it in two weeks. He also won't make eye contact with the fridge." },
        backfire: { headline: "ACTUAL GHOST SHOWS UP, EATS YOGURT", text: "Something cold and polite visited overnight. All the yogurt is gone. A note reads: \"Sorry, it said my name. —H.\"" },
      },
      {
        text: "Fill a yogurt cup with mayonnaise. Wait.",
        tone: "chaotic",
        success: { headline: "MAYONNAISE TRAP WORKS PERFECTLY", text: "Derek's scream was heard three apartments over. He hasn't touched your food since. He has started knocking before entering the kitchen." },
        backfire: { headline: "ROOMMATE LOVES MAYO YOGURT", text: "Derek ate it, said \"Oh, the new flavor's great,\" and has asked where you buy it. You now live with a man who eats mayonnaise with a spoon, which is its own punishment." },
      },
      {
        text: "Move out. Into a lighthouse. Take the yogurt.",
        tone: "chaotic",
        setFlags: ["lighthouse_tenant"],
        success: { headline: "READER RELOCATES TO LIGHTHOUSE WITH YOGURT; FINDS PEACE", text: "\"I have my own mini-fridge,\" they write. \"Walt the keeper respects labels. This is the life I was meant to live.\"" },
        backfire: { headline: "LIGHTHOUSE ALREADY HAS A DEREK", text: "The lighthouse's shared fridge is raided nightly by a llama. It's worse. It's so much worse." },
      },
    ],
  },

  {
    id: "town_italian",
    from: "townsfolk",
    signature: "Fluent in Faking It",
    repeatable: true,
    subject: "I've Been Faking Italian for Three Years",
    body: "At my job interview three years ago I said I was fluent in Italian. I am not. I know \"ciao,\" \"spaghetti,\" and \"Ferrari.\" I've gotten by on hand gestures and confidence. Now they want me to lead a business trip to Milan next month. I am sweating as I write this.",
    options: [
      {
        text: "Confess to your boss. It's better coming from you.",
        tone: "sensible",
        success: { headline: "BOSS FORGIVES FAKE ITALIAN SPEAKER, ADMITS HE FAKED HIS FRENCH", text: "The confession turned into a bonding moment. Both are now taking night classes. Together. The trip to Milan was rescheduled to give them time." },
        backfire: { headline: "CONFESSION DELIVERED IN FAKE ITALIAN BY ACCIDENT", text: "Out of habit, they confessed using hand gestures and the word \"Ferrari.\" The boss understood nothing and gave them a raise." },
      },
      {
        text: "Learn Italian in four weeks. Cram. No sleep.",
        tone: "odd",
        success: { headline: "MAN LEARNS ITALIAN IN 28 DAYS; ITALIANS 'IMPRESSED, CONFUSED'", text: "The Milan trip went perfectly, although everyone in Milan said he sounded \"like a 1950s movie gangster.\"" },
        backfire: { headline: "CRAMMED LANGUAGE TURNS OUT TO BE PORTUGUESE", text: "Wrong app. In Milan, he spoke beautiful Portuguese for four days. A magician's former assistant, visiting from Lisbon, translated." },
      },
      {
        text: "Fake a dramatic injury that only affects your Italian.",
        tone: "chaotic",
        success: { headline: "'ITALIAN-SPECIFIC AMNESIA' ACCEPTED BY HR", text: "HR sent flowers and a card reading \"Get well soon (in any language).\" A coworker who actually speaks Italian has been sent to Milan instead." },
        backfire: { headline: "DOCTOR SAYS 'THAT IS NOT A THING'", text: "HR requested medical documentation. The doctor wrote \"liar\" on the form. In Italian. Which our reader could not read, so it took a while." },
      },
    ],
  },

  {
    id: "town_kevin2",
    from: "townsfolk",
    signature: "Expecting and Exasperated",
    repeatable: true,
    subject: "My Husband Wants to Name the Baby 'Kevin 2'",
    body: "My husband is named Kevin. He wants our baby to be \"Kevin 2.\" Not Kevin Junior. Kevin 2, like a sequel. He says it's \"more marketable.\" The baby is due in three weeks. It's a girl.",
    options: [
      {
        text: "Compromise: let him pick the middle name. Something reasonable.",
        tone: "sensible",
        success: { headline: "BABY NAMED 'ROSE KEVINA'; EVERYONE 'MOSTLY HAPPY'", text: "Kevin accepted the middle name and cried at the birth certificate. Rose is healthy, beautiful, and will one day have questions." },
        backfire: { headline: "MIDDLE NAME CHOSEN: 'THE SEQUEL'", text: "Kevin was given the middle name. He used it. Rose The Sequel Jenkins was born on Tuesday. She's perfect. Her name is not." },
      },
      {
        text: "Skip ahead. Name her 'Kevin 3.' Out-sequel him.",
        tone: "chaotic",
        success: { headline: "HUSBAND HUMBLED BY 'KEVIN 3' COUNTER-PROPOSAL", text: "Faced with being skipped over in his own franchise, Kevin backed down immediately. The baby is named Margaret. Kevin is calling the whole thing \"a reboot.\"" },
        backfire: { headline: "HUSBAND LOVES 'KEVIN 3'", text: "\"It implies a whole cinematic universe,\" he said, weeping. The baby is Kevin 3. A llama farmer has already named a llama Kevin 4 in solidarity." },
      },
      {
        text: "Hire The Astonishing Kevin to perform a show that makes 'Kevin' seem cursed.",
        tone: "odd",
        success: { headline: "MAGIC SHOW CURES MAN OF WANTING TO NAME BABY KEVIN", text: "After 45 minutes of the Astonishing Kevin's act, the husband said, \"No. Never again. Not this name.\" The baby is named Hope." },
        backfire: { headline: "MAGIC SHOW INSPIRES HUSBAND FURTHER", text: "The husband was so inspired he now wants to name the baby \"The Astonishing Kevin 2.\" The magician has offered to be godfather." },
      },
    ],
  },

  {
    id: "town_cat",
    from: "townsfolk",
    signature: "Owner of a Felonious Feline",
    repeatable: true,
    subject: "My Cat Steals Car Keys",
    body: "My cat, Biscuit, has started bringing me car keys. Not mine. The neighbors'. Seven sets so far. Plus a garage door opener and what I think is the key to City Hall. I don't know how she's getting them. I'm afraid to ask her.",
    options: [
      {
        text: "Return the keys, apologize, and put a bell on Biscuit.",
        tone: "sensible",
        success: { headline: "CAT WEARS BELL, CRIME WAVE ENDS", text: "The neighbors were gracious. Biscuit wears a bell and resents it. The City Hall key was returned. The Mayor seemed nervous about it." },
        backfire: { headline: "BELLED CAT LEARNS TO MOVE SILENTLY ANYWAY", text: "Biscuit now holds the bell still with her tail while she works. Yesterday she brought home a passport." },
      },
      {
        text: "Open a small valet service. Biscuit has a gift.",
        tone: "odd",
        success: { headline: "'BISCUIT'S VALET' A NEIGHBORHOOD HIT", text: "Neighbors now leave their keys with Biscuit voluntarily. She returns them in exchange for treats. She's the best-paid cat on the block." },
        backfire: { headline: "CAT VALET LOSES THREE CARS", text: "Biscuit does not know how to drive. Nobody thought this through. The cars were found in a ditch, a hedge, and a llama pen." },
      },
      {
        text: "Use the City Hall key. Find out what the Mayor's hiding.",
        tone: "chaotic",
        setFlags: ["mayor_suspicious"],
        success: { headline: "READER FINDS CITY HALL BASEMENT FULL OF... FERRETS?", text: "They found 40 ferrets and a whiteboard that says HOT TUB?? in the Mayor's handwriting. They wrote back: \"I have more questions than when I started.\"" },
        backfire: { headline: "READER ARRESTED IN CITY HALL AT 3 A.M.", text: "They told police \"my cat gave me the key,\" which is true and did not help. Biscuit was seen on the windowsill, watching. Smiling." },
      },
    ],
  },

  {
    id: "town_replyall",
    from: "townsfolk",
    signature: "Unemployed Soon (Probably)",
    repeatable: true,
    subject: "I Hit Reply-All",
    body: "I meant to send \"he is SO boring\" to my work friend about our boss's 40-minute PowerPoint on stapler procurement. I hit Reply-All. 212 people received it. Including him. Including HIS boss. It's been six hours. Nobody has said anything. The silence is worse.",
    options: [
      {
        text: "Apologize to your boss in person. Sincerely. Briefly.",
        tone: "sensible",
        success: { headline: "BOSS ACCEPTS APOLOGY: 'I KNOW I'M BORING'", text: "He thanked them for the honesty. He's taking a public speaking class. His next presentation, on paper clips, got polite applause." },
        backfire: { headline: "IN-PERSON APOLOGY BECOMES 90-MINUTE CONVERSATION ABOUT STAPLERS", text: "He accepted the apology and then explained stapler procurement again, from the beginning, to make sure they \"got it this time.\"" },
      },
      {
        text: "Reply-All again: 'Sorry, that was meant for my OTHER boss.'",
        tone: "odd",
        success: { headline: "COMPANY CONFUSED; MOVES ON", text: "Nobody knew who the \"other boss\" was. A rumor started that there's a secret boss. Everyone is now on their best behavior, just in case." },
        backfire: { headline: "SECOND REPLY-ALL GOES TO WHOLE COMPANY", text: "This time it went to all 4,000 employees, including the CEO, who replied \"which boss??\" The thread is now 600 messages long." },
      },
      {
        text: "Fake your death. Start over in a new town. Maybe a lighthouse.",
        tone: "chaotic",
        setFlags: ["lighthouse_tenant"],
        success: { headline: "'DECEASED' EMPLOYEE NOW HAPPY LIGHTHOUSE RESIDENT", text: "The office sent flowers. The boss gave a eulogy. It was 40 minutes long. Nobody stayed awake." },
        backfire: { headline: "OFFICE SENDS 'SORRY FOR YOUR LOSS' CARD TO FAKE-DEAD EMPLOYEE'S OWN ADDRESS", text: "They answered the door. The boss was holding the card. He said, \"I'm not boring.\" They said, \"I know.\" It wasn't true." },
      },
    ],
  },

  {
    id: "town_sourdough",
    from: "townsfolk",
    signature: "Yeast Whisperer",
    repeatable: true,
    subject: "My Sourdough Starter Has Ambitions",
    body: "My sourdough starter, Clive, has grown out of three jars. He's escaped twice. Yesterday he was on the windowsill, which I don't think starters can reach. He smells like vinegar and ambition. Should I be afraid?",
    options: [
      {
        text: "Bake with him. Regularly. Keep Clive small.",
        tone: "sensible",
        success: { headline: "CLIVE BECOMES EXCELLENT BREAD", text: "Regular baking has kept Clive manageable. The bread is incredible. Priya at Crumb & Fury asked for a cutting. Clive is going to Paris for a culinary residency." },
        backfire: { headline: "CLIVE REFUSES TO BE BAKED", text: "Clive will not rise in the oven. He only rises at night, in the jar, toward the bedroom." },
      },
      {
        text: "Give him a name tag and enroll him in community college.",
        tone: "odd",
        success: { headline: "SOURDOUGH STARTER EARNS ASSOCIATE'S DEGREE", text: "Clive attended every class (in a jar, front row). He passed with a B average. Professors said he was \"quiet, but present.\"" },
        backfire: { headline: "SOURDOUGH STARTER EXPELLED FOR 'BEHAVIOR'", text: "Clive was expelled after expanding during a midterm and absorbing a student's calculator. The calculator has not been recovered." },
      },
      {
        text: "Set him free in the woods. Let nature decide.",
        tone: "chaotic",
        success: { headline: "WILD SOURDOUGH THRIVES IN FOREST; HIKERS 'DELIGHTED'", text: "Clive now covers a clearing in Pettibone Woods. Hikers break off pieces for campfire bread. The llama colony nearby uses him as a pillow." },
        backfire: { headline: "SOURDOUGH 'THE SIZE OF A CAR' SPOTTED NEAR CAMPGROUND", text: "Clive found a rich supply of sugar at the campground. Rangers have closed the area. Clive has been seen heading toward town at roughly one foot per day." },
      },
    ],
  },

  {
    id: "town_robot",
    from: "townsfolk",
    signature: "Probably Overthinking It",
    repeatable: true,
    subject: "I Think My Best Friend's Fiancé Is a Robot",
    body: "My best friend is marrying a man named Brent. Brent beeps. Quietly, when he thinks no one's listening. He's never eaten in front of me. He says \"affirmative.\" His hands are warm, but too evenly warm. The wedding is in two weeks. Do I say something?",
    options: [
      {
        text: "Talk to your friend privately. Gently. Without the word 'robot.'",
        tone: "sensible",
        success: { headline: "BRENT'S BEEPING EXPLAINED: IT'S A PACEMAKER", text: "Brent has a heart condition, a pacemaker, and a habit of saying \"affirmative\" from his Navy days. He's lovely. The writer is a bridesmaid and feels terrible." },
        backfire: { headline: "FRIEND ASKS BRENT; BRENT SAYS 'NEGATIVE' WITHOUT BLINKING", text: "The wedding is on. The writer is no longer a bridesmaid. Brent waved at them in the supermarket. Every finger moved at once." },
      },
      {
        text: "Object at the wedding with a magnet.",
        tone: "chaotic",
        success: { headline: "WEDDING OBJECTION REVEALS BRENT IS 'JUST A GUY WITH A METAL HIP'", text: "The magnet stuck to Brent's hip replacement. Everyone laughed. The ceremony continued. Brent seems to have forgiven everyone, eerily quickly." },
        backfire: { headline: "MAGNET STICKS TO BRENT'S FACE", text: "The bride said, \"Okay, yes, he's a robot. I know. We're in love.\" The ceremony continued. It was beautiful. Brent cried oil." },
      },
      {
        text: "Say nothing. Love is love. Even if it's beep-boop love.",
        tone: "odd",
        success: { headline: "ROBOT(?) WEDDING 'MOST EFFICIENT CEREMONY EVER'", text: "The wedding started exactly on time and ended exactly on time. The vows were 600 words each, word-perfect. The cake was cut at a perfect 90-degree angle." },
        backfire: { headline: "GUESTS DISTURBED BY GROOM'S 'LOADING' PAUSE", text: "When asked \"Do you take this woman,\" Brent paused for 40 seconds, made a soft whirring sound, and then said \"Yes.\" Nobody has stopped talking about it." },
      },
    ],
  },

  {
    id: "town_chimes",
    from: "townsfolk",
    signature: "Sleepless on Elm Street",
    repeatable: true,
    subject: "My Neighbor's Wind Chimes Are Ruining My Life",
    body: "My neighbor has 23 wind chimes. Twenty-three. The wind here never stops. I haven't slept since April. I hear chimes in the shower. I hear chimes in my dreams. I bought earplugs. I can hear the chimes through the earplugs. Please.",
    options: [
      {
        text: "Ask nicely if they'd take down a few at night.",
        tone: "sensible",
        success: { headline: "NEIGHBOR LOWERS CHIME COUNT TO A 'REASONABLE' FOUR", text: "The neighbor had no idea. They apologized, brought cookies, and removed 19 chimes. The reader has slept 14 hours straight." },
        backfire: { headline: "NEIGHBOR HEARS 'MORE CHIMES' SOMEHOW", text: "The neighbor nodded warmly and then installed nine more. They are now at 32 chimes. They think it was a compliment." },
      },
      {
        text: "Buy 50 wind chimes. Fight fire with fire.",
        tone: "chaotic",
        success: { headline: "WIND CHIME ARMS RACE ENDS IN MUTUAL DISARMAMENT", text: "Both houses now sound like a xylophone in a hurricane. Both neighbors met on the lawn, exhausted, and agreed to take them all down. They're friends now." },
        backfire: { headline: "ELM STREET NOW AUDIBLE FROM SPACE", text: "Seventy-three wind chimes on two houses. Dogs across town howl constantly. Gerald the goose has relocated to get away from the noise." },
      },
      {
        text: "Learn to love it. Write an album inspired by the chimes.",
        tone: "odd",
        success: { headline: "'THE ELM STREET SESSIONS' WINS LOCAL MUSIC AWARD", text: "The reader recorded the chimes for 40 hours and released it as an ambient album. It's being used in spas statewide. They sleep perfectly now." },
        backfire: { headline: "CHIME ALBUM BANNED FROM RETIREMENT HOME FOR 'CAUSING MADNESS'", text: "The album was played at Sunny Acres. Three residents now hum the chimes constantly. Edna Voss called it \"psychological warfare\" and bought ten copies." },
      },
    ],
  },

  {
    id: "town_lottery",
    from: "townsfolk",
    signature: "Newly Moderately Rich",
    repeatable: true,
    subject: "I Won the Lottery (It Was $40)",
    body: "I won the lottery! $40! I've never won anything. My family is already asking for loans. My cousin wants to \"invest.\" My mother wants half. How do I handle sudden wealth?",
    options: [
      {
        text: "Put it in savings. Tell no one else.",
        tone: "sensible",
        success: { headline: "LOTTERY WINNER'S $40 NOW WORTH $40.12", text: "After a month of compound interest, the reader has gained 12 cents. They describe the feeling as \"unbelievable.\"" },
        backfire: { headline: "BANK CHARGES $45 FEE TO OPEN SAVINGS ACCOUNT", text: "The reader now owes the bank $5. Their cousin has offered a loan." },
      },
      {
        text: "Throw a giant party. Spend it all in one night.",
        tone: "odd",
        success: { headline: "'BEST $40 PARTY EVER' DRAWS 200 PEOPLE", text: "Two bags of chips, a karaoke machine from the library, and a goose. Somehow 200 people came. The reader is a local legend." },
        backfire: { headline: "$40 PARTY RUNS OUT OF CHIPS IN 4 MINUTES", text: "Guests left one by one. Only the cousin remained, still pitching his investment." },
      },
      {
        text: "Invest it all in Dusty's water tower business.",
        tone: "chaotic",
        success: { headline: "WATER TOWER STOCK SOARS; READER'S $40 BECOMES $4,000", text: "Somehow Dusty's tower is now a viral tourist attraction. The investment paid 100-to-1. Dusty sent a thank-you note written on a jet ski." },
        backfire: { headline: "WATER TOWER INVESTMENT RETURNS ONE (1) JET SKI PART", text: "Dusty sent a handlebar and a note: \"Dividends.\"" },
      },
    ],
  },

  {
    id: "town_mime",
    from: "townsfolk",
    signature: "Worried Dad",
    repeatable: true,
    subject: "My Son Wants to Be a Professional Mime",
    body: "My son is 22 and has announced he's going to be a professional mime. He announced this silently, by pretending to be trapped in a box at Thanksgiving. Everyone assumed he was choking. We performed the Heimlich. He hasn't spoken to us since. Well. He hasn't spoken at all.",
    options: [
      {
        text: "Support him. Go to his first show. Clap loudly.",
        tone: "sensible",
        success: { headline: "MIME'S FIRST SHOW A SUCCESS; DAD CRIES", text: "The son performed \"Man Against Wind\" at the community center. His father clapped so hard he pulled a muscle. The son mimed a hug. It was real." },
        backfire: { headline: "DAD CLAPS TOO LOUDLY; MIME LOSES FOCUS AND GETS 'TRAPPED' FOR REAL", text: "The son became so committed to the invisible box that he couldn't get out for three hours. Paramedics were called. They mimed back." },
      },
      {
        text: "Respond only in mime yourself until he cracks.",
        tone: "odd",
        success: { headline: "FATHER-SON MIME-OFF ENDS IN TEARFUL HUG", text: "After four silent days, the son broke and said, \"Dad, you're actually good at this.\" They now perform as a duo. They're booked through Christmas." },
        backfire: { headline: "ENTIRE FAMILY NOW MIMES; NOBODY HAS SPOKEN IN 11 DAYS", text: "The grandmother joined. Then the cousins. Thanksgiving next year will be completely silent. The neighbors find it unsettling." },
      },
      {
        text: "Lock him in a real box. Let him see what it's actually like.",
        tone: "chaotic",
        success: { headline: "REAL BOX INSPIRES MIME'S BREAKTHROUGH ROUTINE", text: "After 20 minutes in a cardboard box, the son emerged with a new routine, \"The Box Is Real.\" Critics called it \"devastating.\" He is touring Europe." },
        backfire: { headline: "MIME ESCAPES REAL BOX THROUGH 'INVISIBLE DOOR'", text: "Nobody knows how he got out. The box was taped. He just walked out, silently, pointing at a door that isn't there. The family has questions. He will not answer them, verbally." },
      },
    ],
  },

  {
    id: "town_door",
    from: "townsfolk",
    signature: "Concerned on Cedar Lane",
    repeatable: true,
    subject: "There's a Door in My Basement That Wasn't There Yesterday",
    body: "I went down to do laundry and found a door. Old wood. Brass handle. It's cold to the touch. It was not there yesterday. I've lived here 19 years. My husband says he \"always knew about it.\" He did not always know about it. Should I open it?",
    options: [
      {
        text: "Don't open it. Call a contractor, and maybe a priest.",
        tone: "sensible",
        success: { headline: "MYSTERY DOOR LEADS TO FORGOTTEN ROOT CELLAR", text: "The contractor found a sealed 1920s root cellar exposed by recent flooding. Inside: 40 jars of perfectly preserved peaches. The priest stayed for dinner." },
        backfire: { headline: "CONTRACTOR OPENS DOOR, DOES NOT RETURN, SENDS POSTCARD", text: "The contractor went through. A week later a postcard arrived: \"It's nice here. Keep the deposit.\" The postmark is a date in 1953." },
      },
      {
        text: "Knock first. It's only polite.",
        tone: "odd",
        success: { headline: "MYSTERY DOOR KNOCKS BACK; NEIGHBORS NOW FRIENDS", text: "A voice answered. It's the neighbor's basement. The houses were built connected in 1931 and someone drywalled over it. They share a laundry room now." },
        backfire: { headline: "DOOR KNOCKS BACK. AND KEEPS KNOCKING.", text: "Three knocks every night at 3:12 a.m. A ghost named Beatrice from the library says it's \"not one of ours.\"" },
      },
      {
        text: "Open it immediately. Fortune favors the bold.",
        tone: "chaotic",
        success: { headline: "MYSTERY DOOR LEADS TO HUSBAND'S SECRET MODEL TRAIN EMPIRE", text: "He'd been building it for six years. It covers 400 square feet. There's a tiny Shrugsville with a tiny water tower that says DUSTY'S. She's furious. She's also impressed." },
        backfire: { headline: "MYSTERY DOOR OPENS ONTO A SECOND, IDENTICAL BASEMENT", text: "It has a door in it. She's stopped opening them. She's on basement six. She wrote this letter from basement four." },
      },
    ],
  },

  {
    id: "town_dentist",
    from: "townsfolk",
    signature: "Open Wide and Irritated",
    repeatable: true,
    subject: "My Dentist Asks Questions With His Hands in My Mouth",
    body: "Every visit, my dentist asks detailed questions, like my opinion on the city budget, while both his hands and a suction tube are in my mouth. When I can't answer he gets visibly hurt. Last time he said \"I guess I'll never know what you think.\" I want to keep my dentist, but I also want to be heard.",
    options: [
      {
        text: "Bring a notepad and answer in writing during the cleaning.",
        tone: "sensible",
        success: { headline: "PATIENT AND DENTIST NOW PEN PALS", text: "The notepad system works great. They've exchanged 40 pages of notes about municipal hot tubs. The cleaning took two hours. Best checkup of their life." },
        backfire: { headline: "PATIENT WRITES, DENTIST READS ALOUD, DRILL SLIPS", text: "He laughed at one of their notes mid-procedure. They have a new filling. They didn't need one." },
      },
      {
        text: "Grunt your answers with total confidence. He'll understand.",
        tone: "odd",
        success: { headline: "DENTIST FLUENT IN GRUNT", text: "Turns out he understood everything. \"Hnngh-uhh\" was correctly interpreted as support for the new library hours." },
        backfire: { headline: "GRUNTED OPINION MISINTERPRETED AS ENDORSEMENT OF GOOSE FOR MAYOR", text: "The dentist told everyone. The reader is now considered a key Gerald supporter. Campaign volunteers keep calling." },
      },
      {
        text: "Put YOUR hands in HIS mouth and ask him a question. See how he likes it.",
        tone: "chaotic",
        success: { headline: "DENTIST HAS EPIPHANY; STOPS ASKING QUESTIONS", text: "He tried to answer \"how was your weekend?\" around two fingers and finally understood. He now asks questions only before and after. He sent a thank-you card." },
        backfire: { headline: "DENTIST BITES PATIENT; BOTH 'SHOCKED'", text: "It was reflex. Nobody is pressing charges. They've agreed to see other dentists. And other patients." },
      },
    ],
  },
];
