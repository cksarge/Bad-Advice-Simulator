// Mayor Thaddeus Plum and his many "hypothetical" problems. His story can end with YOU on the ballot.
export default [
  {
    id: "mayor_1",
    from: "mayor",
    minDay: 2,
    subject: "A Purely Hypothetical Question",
    body: "Purely hypothetically: if the mayor of a small town had accidentally sold the town's water tower to a man named Dusty for $400 and a used jet ski, and Dusty has now painted it to say DUSTY'S, what should that hypothetical mayor do? Asking for a friend. The friend is me. Please don't print this. (I realize you're going to print this.)",
    options: [
      {
        text: "Come clean. Apologize publicly. Buy it back.",
        tone: "sensible",
        success: {
          headline: "MAYOR CONFESSES TO 'WATER TOWER SITUATION'; TOWN SHRUGS",
          text: "Mayor Plum held a teary press conference. The town, true to its name, shrugged. Dusty sold the tower back for $400 and the jet ski. It still says DUSTY'S. Nobody minds.",
        },
        backfire: {
          headline: "DUSTY REFUSES TO SELL; NOW CHARGES WATER FEES",
          text: "Dusty charges $1 per shower and has hired security (his cousin Doyle). The town is getting noticeably smellier.",
          setFlags: ["mayor_suspicious"],
        },
      },
      {
        text: "Claim it's a public art installation. Commission more.",
        tone: "odd",
        success: {
          headline: "'DUSTY'S' WATER TOWER DECLARED ART; BIG-CITY CRITICS VISIT",
          text: "A critic called it \"a searing commentary on municipal ownership.\" Mayor Plum now gives tours. Dusty gives interviews.",
        },
        backfire: {
          headline: "ARTS COUNCIL DEMANDS 'A SERIES'; LIBRARY NOW SAYS DUSTY'S",
          text: "To keep the art story alive, the Mayor had to sell Dusty the library too. Dusty owns a lot of buildings now.",
          setFlags: ["mayor_suspicious"],
        },
      },
      {
        text: "Blame the llamas. Nobody can prove they didn't do it.",
        tone: "chaotic",
        setFlags: ["mayor_blamed_llamas"],
        success: {
          headline: "MAYOR: 'LLAMAS SOLD THE WATER TOWER'; TOWN BELIEVES HIM",
          text: "The town, having met Dolores, accepted this immediately. Gus Pettibone has been asked to \"keep an eye on them.\"",
        },
        backfire: {
          headline: "LLAMA FARMER PRODUCES ALIBI; MAYOR'S STORY UNRAVELS",
          text: "Gus Pettibone produced timestamped photos of all 41 llamas at the farm that night. Dolores is staring directly into the camera in every one. It's chilling. The Mayor's approval is down 20 points.",
          setFlags: ["mayor_suspicious"],
        },
      },
      {
        text: "Steal it back. At night. With a big truck.",
        tone: "chaotic",
        success: {
          headline: "WATER TOWER RELOCATED OVERNIGHT; DUSTY 'BAFFLED'",
          text: "Witnesses saw a flatbed, the Mayor in a ski mask, and a magician doing \"something with a sheet.\" The tower is back. It still says DUSTY'S. Dusty has moved to Nevada.",
        },
        backfire: {
          headline: "MAYOR STUCK ON WATER TOWER FOR NINE HOURS",
          text: "The Mayor climbed up to \"begin disassembly\" and could not get down. Dusty sold lemonade to onlookers the entire time.",
          setFlags: ["mayor_suspicious"],
        },
      },
    ],
  },

  {
    id: "mayor_2",
    from: "mayor",
    after: "mayor_1",
    minDay: 4,
    subject: "Another Hypothetical",
    body: "Thank you for your last advice. Another purely theoretical question. Suppose a mayor had been keeping 40 ferrets in the basement of City Hall. Nothing sinister. They're just very good company. But the county auditor arrives Thursday, and the ferrets have chewed through several budget documents. And some of the budget.",
    postscripts: [
      { requires: ["harold_cityhall"], text: "P.S. Also, is City Hall haunted now? Doors slam. Somebody keeps alphabetizing my files. I did not ask for this." },
      { requires: ["mayor_bribed"], text: "P.S. Regarding the bake-off: that danish was a gift. Gifts are legal. Please confirm that gifts are legal." },
    ],
    options: [
      {
        text: "Rehome the ferrets. Ethically. Then tell the truth.",
        tone: "sensible",
        success: {
          headline: "40 FERRETS ADOPTED IN ONE DAY; MAYOR 'SAD BUT RELIEVED'",
          text: "Every ferret found a loving home. The Mayor visits them on weekends. The auditor found nothing else. (He didn't check the attic.)",
        },
        backfire: {
          headline: "REHOMED FERRET RETURNS CARRYING SUBPOENA",
          text: "One ferret came back holding a subpoena in its mouth. Nobody knows how. The auditor is very interested.",
          setFlags: ["mayor_suspicious"],
        },
      },
      {
        text: "Make them the official town mascots. Ferrets are civic now.",
        tone: "odd",
        success: {
          headline: "SHRUGSVILLE ADOPTS 40 FERRETS AS OFFICIAL MASCOTS",
          text: "Each ferret now wears a tiny sash. The auditor found the arrangement \"irregular but adorable.\" One ferret has been nominated to the planning committee.",
        },
        backfire: {
          headline: "CIVIC FERRETS UNIONIZE",
          text: "As town employees, the ferrets are entitled to benefits. The budget, already partly eaten, cannot cover dental. Negotiations are ongoing.",
        },
      },
      {
        text: "Throw a giant parade on audit day. Distract everyone.",
        tone: "chaotic",
        success: {
          headline: "AUDITOR SWEPT AWAY BY PARADE, NEVER REACHES CITY HALL",
          text: "The auditor got wedged between the marching band and a croissant-shaped float. He gave up and filed a one-line report: \"Seems fine.\"",
        },
        backfire: {
          headline: "PARADE ROUTE PASSES DIRECTLY THROUGH CITY HALL BASEMENT",
          text: "Due to a planning error, the parade went through City Hall. Forty ferrets joined in. So did the auditor, taking notes.",
          setFlags: ["mayor_suspicious"],
        },
      },
      {
        text: "Ask Kevin the magician to make them disappear.",
        tone: "chaotic",
        setFlags: ["kevin_mayor"],
        success: {
          headline: "FERRETS VANISH, REAPPEAR IN AUDITOR'S BUICK; AUDITOR DELIGHTED",
          text: "The auditor loves them. He approved the town's budget \"and then some.\"",
        },
        backfire: {
          headline: "MAGICIAN MAKES AUDITOR DISAPPEAR INSTEAD",
          text: "The trick \"went sideways.\" The ferrets remain. The auditor does not. Kevin says he \"will turn up.\" The Mayor is sweating through two suits a day.",
          setFlags: ["mayor_suspicious"],
        },
      },
    ],
  },

  {
    id: "mayor_3",
    from: "mayor",
    after: "mayor_2",
    minDay: 7,
    subject: "Not a Hypothetical This Time",
    body: "Okay. The truth. The town budget has a $90,000 hole in it. I spent it on a \"municipal hot tub\" that no one has seen, because it's at my house. The election is in two weeks and reporters are sniffing around. My wife has moved into the hot tub. Help.",
    postscripts: [
      { requires: ["mayor_suspicious"], text: "P.S. I get the feeling people are suspicious of me. I can't imagine why. I've been nothing but hypothetical." },
    ],
    options: [
      {
        text: "Resign. Pay it back. Start fresh.",
        tone: "sensible",
        setFlags: ["mayor_resigned"],
        success: {
          headline: "MAYOR RESIGNS, REPAYS HOT TUB MONEY, OPENS HONEST CAR WASH",
          text: "Plum's farewell speech was genuinely moving. He's paying the money back in monthly installments. The car wash's slogan: \"No Secrets, Just Suds.\"",
        },
        backfire: {
          headline: "MAYOR RESIGNS; NOBODY WANTS JOB; HE IS STILL MAYOR",
          text: "Plum resigned. No one ran to replace him. By town law he remains mayor \"until someone better shows up.\" He's back. He's just more tired.",
        },
      },
      {
        text: "Open the hot tub to the public. 'Municipal' means everybody.",
        tone: "odd",
        success: {
          headline: "MAYOR'S PUBLIC HOT TUB A BIPARTISAN TRIUMPH",
          text: "Residents now soak in the Mayor's backyard every Saturday, and political disputes are settled in the tub. His approval has never been higher. His wife has never been more annoyed.",
        },
        backfire: {
          headline: "60 RESIDENTS STEAM-CLEANED IN EIGHT-PERSON TUB",
          text: "Nobody drowned, but several people became \"too relaxed\" and missed a week of work. The local economy has noticeably slowed.",
        },
      },
      {
        text: "Blame Dusty. He has your water tower; he can have your crimes too.",
        tone: "chaotic",
        success: {
          headline: "DUSTY TAKES THE FALL; SAYS HE 'KIND OF LIKES IT'",
          text: "Dusty happily confessed to embezzlement. His new notoriety has made him a minor celebrity in Nevada.",
        },
        backfire: {
          headline: "DUSTY RETURNS WITH LAMINATED RECEIPTS",
          text: "Dusty came back with every receipt the Mayor ever gave him, laminated. It ran on every front page in the county. Plum's approval is now lower than the goose's.",
          setFlags: ["mayor_scandal"],
        },
      },
      {
        text: "Announce you're not running. Endorse... the advice columnist.",
        tone: "chaotic",
        setFlags: ["write_in_candidate"],
        success: {
          headline: "MAYOR ENDORSES {NAME}; TOWN TAKES IT SERIOUSLY",
          text: "\"Whoever's been telling this town what to do, let them do it officially,\" Plum said. Campaign signs for {name} appeared overnight. {name} has not agreed to any of this.",
        },
        backfire: {
          headline: "'COLUMNIST IN BED WITH HOT TUB MAYOR?'",
          text: "The tabloids ran with it. Readers are suspicious. The campaign signs went up anyway.",
        },
      },
    ],
  },

  {
    id: "mayor_4",
    from: "mayor",
    after: "mayor_3",
    excludes: ["mayor_resigned"],
    minDay: 10,
    subject: "The Debate Is Tomorrow",
    body: "The mayoral debate is tomorrow night. I haven't slept. I wrote my speech on 14 index cards and the ferrets ate cards 6 through 11. What do I do?",
    postscripts: [
      { requires: ["edna_candidate"], text: "P.S. My opponent is Edna Voss. She has been doing push-ups outside my bedroom window." },
      { requires: ["write_in_candidate"], text: "P.S. My other opponent is apparently YOU. Write-in. Polling at 31%. Is this a conflict of interest? Asking for me." },
      { requires: ["goose_mayor"], text: "P.S. I'm told a goose is also running. I'm told he's doing well." },
    ],
    options: [
      {
        text: "Be honest. Admit your mistakes. Talk about the future.",
        tone: "sensible",
        success: {
          headline: "MAYOR'S HONEST DEBATE PERFORMANCE STUNS AUDIENCE",
          text: "Plum spoke without notes, admitted everything, and promised \"fewer secrets, maybe 60% fewer.\" His wife came out of the hot tub to hug him.",
        },
        backfire: {
          headline: "MAYOR'S HONESTY REVEALS SEVEN NEW SECRETS",
          text: "In the spirit of honesty, Plum also revealed a second hot tub, a forged birth certificate, and that he is \"technically Canadian.\" Polls collapsed.",
          setFlags: ["mayor_scandal"],
        },
      },
      {
        text: "Bring a ferret to the podium for emotional support.",
        tone: "odd",
        success: {
          headline: "DEBATE FERRET STEALS SHOW",
          text: "The ferret, Mr. Biscuit, sat on the podium and looked very wise. Undecided voters cited \"the ferret\" as their main reason for backing Plum.",
        },
        backfire: {
          headline: "FERRET ESCAPES INTO MODERATOR'S BLAZER",
          text: "The ferret spent the rest of the debate inside the moderator's jacket. The moderator \"powered through.\" Nobody heard a word anyone said.",
        },
      },
      {
        text: "Skip it. Send a cardboard cutout of yourself.",
        tone: "chaotic",
        success: {
          headline: "CARDBOARD MAYOR WINS DEBATE",
          text: "The cutout stood perfectly still and said nothing. Pundits praised its \"restraint.\"",
        },
        backfire: {
          headline: "CARDBOARD MAYOR DECAPITATED BY GOOSE ON LIVE TV",
          text: "Gerald the goose, attending as a protest, attacked the cutout. The footage is now the town's most popular meme.",
          setFlags: ["goose_mayor"],
        },
      },
      {
        text: "Concede live on stage and endorse the goose.",
        tone: "chaotic",
        setFlags: ["goose_mayor"],
        success: {
          headline: "MAYOR ENDORSES GOOSE; GOOSE ENDORSES NOBODY",
          text: "Gerald accepted the endorsement by hissing. His campaign has no platform, only menace. He's polling at 40%.",
        },
        backfire: {
          headline: "MAYOR ENDORSES GOOSE; GOOSE BITES MAYOR",
          text: "Plum tried to shake Gerald's wing. Gerald responded as geese do. Plum was treated and released, his dignity in a separate bag.",
        },
      },
    ],
  },
];
