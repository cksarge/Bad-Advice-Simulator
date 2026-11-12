// Harold, the ghost of the Suds-n-Duds laundromat (d. 1974, dryer-related).
export default [
  {
    id: "harold_1",
    from: "harold",
    minDay: 2,
    subject: "Nobody Notices Me",
    body: "I have haunted the Suds-n-Duds laundromat since 1974, when I died in an incident involving a coin-op dryer and some poor decisions. For decades I rattled chains and moaned. Now people just say \"machine 6 is acting up again\" and put in another quarter. I'm a ghost. I deserve to be feared. Or at least acknowledged.",
    options: [
      {
        text: "See a grief counselor. For ghosts, it's never too late.",
        tone: "sensible",
        success: {
          headline: "GHOST FINDS PEACE IN THERAPY",
          text: "Harold now sees Dr. Ruth Albrecht, who \"mostly sees an empty chair but is very open-minded.\" He reports feeling \"seen, metaphorically.\"",
        },
        backfire: {
          headline: "THERAPIST QUITS AFTER GHOST SESSION",
          text: "Dr. Albrecht lasted fifteen minutes before her pen started writing on its own. She is now a full-time pottery instructor.",
        },
      },
      {
        text: "Haunt somewhere more exciting. Like City Hall.",
        tone: "odd",
        setFlags: ["harold_cityhall"],
        success: {
          headline: "CITY HALL HAUNTING 'IMPROVES EFFICIENCY'",
          text: "Harold now alphabetizes files and slams doors on anyone who lingers at the water cooler. Productivity is up 40%.",
        },
        backfire: {
          headline: "GHOST LOST IN CITY HALL FILING CABINET",
          text: "Harold drifted into a filing cabinet and got lost in the paperwork for three days. He says it was \"worse than death.\" He would know.",
        },
      },
      {
        text: "Start a podcast. 'Dead Air with Harold.'",
        tone: "odd",
        setFlags: ["harold_podcast"],
        success: {
          headline: "GHOST'S PODCAST HITS #3 IN 'PARANORMAL COMEDY'",
          text: "Harold interviews dryers. It's surprisingly moving. He has 40,000 listeners and a detergent sponsorship.",
        },
        backfire: {
          headline: "PODCAST IS ONLY STATIC; LISTENERS HEAR 'WHISPERS'",
          text: "Every episode is 40 minutes of static. Listeners swear there are messages in it. One says it predicted his divorce. It did.",
        },
      },
      {
        text: "Possess a dryer and demand tribute.",
        tone: "chaotic",
        success: {
          headline: "DRYER #6 NOW ACCEPTS OFFERINGS; LAUNDROMAT PACKED",
          text: "Customers leave quarters, candy and handwritten apologies at Dryer #6. In return their clothes come out perfectly folded. Harold is finally feared, respectfully.",
        },
        backfire: {
          headline: "POSSESSED DRYER EATS 400 SOCKS; TOWN IN SOCK CRISIS",
          text: "Harold possessed the dryer too enthusiastically. It ate every sock for a week. The town has run out. People are wearing mittens on their feet.",
        },
      },
    ],
  },

  {
    id: "harold_2",
    from: "harold",
    after: "harold_1",
    minDay: 4,
    subject: "My Unfinished Business",
    body: "I've been thinking. Maybe I'm stuck here because of unfinished business. The day I died in 1974, I owed the laundromat owner $4.75 for detergent. I never paid. His granddaughter runs the place now. Is that what's keeping me here? How does a ghost pay for anything?",
    postscripts: [
      { requires: ["harold_bingo"], text: "P.S. I call bingo on Thursdays now. It's the most fun I've had since I was alive." },
      { requires: ["ghost_vocals"], text: "P.S. Also, I'm on an album? A young person keeps thanking me in the liner notes." },
    ],
    options: [
      {
        text: "Pay it back. Leave $4.75 on the counter, plus interest.",
        tone: "sensible",
        success: {
          headline: "GHOST REPAYS 1974 DEBT, VANISHES INTO WARM LIGHT",
          text: "$4.75 plus interest ($31.80) appeared on the counter. A warm glow filled the laundromat. Harold is at peace. Dryer #6 is just a dryer now. The owner framed the money.",
          setFlags: ["harold_free"],
        },
        backfire: {
          headline: "GHOST REPAYS DEBT; IS STILL HERE",
          text: "Nothing happened. Harold now thinks it might be about a library book from 1971. Dryer #6 sighs a lot.",
        },
      },
      {
        text: "Don't pay. Stay forever. Become a landmark.",
        tone: "odd",
        success: {
          headline: "LAUNDROMAT GHOST NAMED OFFICIAL TOWN LANDMARK",
          text: "The Historical Society put a plaque on Dryer #6. Harold gives tours. They're mostly him flickering the lights.",
        },
        backfire: {
          headline: "GHOST TOURISTS OVERWHELM LAUNDROMAT",
          text: "Ghost hunters from three states now camp inside. Nobody can do laundry. Harold has started hiding in the lint trap.",
        },
      },
      {
        text: "Haunt the granddaughter until she forgives the debt.",
        tone: "chaotic",
        success: {
          headline: "GRANDDAUGHTER FORGIVES DEBT, ADOPTS GHOST AS 'GRANDPA HAROLD'",
          text: "Turns out Harold knew her grandfather well. She calls him Grandpa Harold now and he helps with her homework. She is 34.",
          setFlags: ["harold_free"],
        },
        backfire: {
          headline: "EXORCIST HIRED; EXORCIST HIRES GHOST",
          text: "The exorcist was so impressed by Harold's work that he offered him a job as his opening act. They're touring. The debt remains.",
        },
      },
      {
        text: "Rob a bank. Ghosts can walk through vault doors.",
        tone: "chaotic",
        success: {
          headline: "GHOST ROBS BANK OF $4.75, RETURNS THE REST",
          text: "Harold took exactly $4.75, paid his debt, and put everything else back because he felt bad. He is at peace. The bank is confused.",
          setFlags: ["harold_free"],
        },
        backfire: {
          headline: "GHOST TRAPPED IN BANK VAULT OVERNIGHT",
          text: "Harold discovered he can't pick anything up. The security footage is six hours of a single coin hovering, then falling.",
        },
      },
    ],
  },

  {
    id: "harold_3",
    from: "harold",
    after: "harold_2",
    excludes: ["harold_free"],
    minDay: 8,
    subject: "I've Met Someone (She's Also Dead)",
    body: "Since I'm sticking around, I've met someone. Her name is Beatrice. She has haunted the public library since 1922. She's been dead much longer than me and finds me \"a bit young.\" We have nothing in common except being dead. How does one court a ghost?",
    options: [
      {
        text: "Be yourself. Visit the library. Read to her.",
        tone: "sensible",
        success: {
          headline: "GHOSTS FALL IN LOVE OVER READING OF 'MOBY DICK'",
          text: "Harold read the whole thing aloud over three weeks. Beatrice called it \"the most boring thing that has ever happened to me, and I loved it.\" The library is now very cold.",
        },
        backfire: {
          headline: "GHOST FALLS ASLEEP DURING READING; STILL ASLEEP NINE DAYS LATER",
          text: "It turns out ghosts can nap. Beatrice is snoring. The library hums. Harold waits.",
        },
      },
      {
        text: "Plan a candlelit haunted dinner at City Hall.",
        tone: "odd",
        success: {
          headline: "GHOSTS ENJOY ROMANTIC DINNER; MAYOR 'TERRIFIED'",
          text: "Mayor Plum, working late, witnessed floating silverware and self-lighting candles. He has since confessed four new secrets in his sleep.",
          setFlags: ["mayor_suspicious"],
        },
        backfire: {
          headline: "GHOST DATE CRASHED BY FERRETS",
          text: "The City Hall basement ferrets, sensitive to spirits, attacked. Ghosts can't be harmed, but Beatrice says she \"didn't enjoy the vibe.\"",
        },
      },
      {
        text: "Make her jealous. Go haunt a cuter building.",
        tone: "chaotic",
        success: {
          headline: "JEALOUS GHOST FOLLOWS HAROLD TO BOUTIQUE; ROMANCE BLOOMS",
          text: "Beatrice followed him to the new boutique on Elm and they argued in the window display all night. They're dating now.",
        },
        backfire: {
          headline: "BEATRICE NOW DATING THE BOUTIQUE'S GHOST",
          text: "The boutique already had a ghost: Fernando (d. 1931), handsome, from Seville. Harold is back at the laundromat, sulking inside Dryer #6.",
        },
      },
      {
        text: "Write her a love song with Feral Tax Return.",
        tone: "odd",
        success: {
          headline: "'BEATRICE (1922–PRESENT)' MAKES THREE LIBRARIANS CRY",
          text: "Beatrice cried too. Ghost tears look like condensation. Every window in the library fogged up.",
        },
        backfire: {
          headline: "LIBRARY GHOST SHUSHES BAND; WINDOWS CRACK",
          text: "Beatrice was a librarian in life. Her shush from beyond was so powerful it cracked the glass.",
        },
      },
    ],
  },
];
