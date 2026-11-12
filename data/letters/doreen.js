// Doreen Fitch, HOA president, versus Gerald the goose. Gerald is winning.
export default [
  {
    id: "doreen_1",
    from: "doreen",
    minDay: 2,
    subject: "A Goose Has Taken Over My HOA",
    body: "I'm president of the Maple Court Homeowners' Association. A Canada goose, whom I've named Gerald, has occupied our retention pond. He hisses at residents. He chased Mr. Hoffstetter into a hedge. He sits on the bench reserved for board members. I've sent him three written warnings. He ate one.",
    options: [
      {
        text: "Call animal control. You are not equipped for goose diplomacy.",
        tone: "sensible",
        success: {
          headline: "GOOSE RELOCATED; HOA ORDER RESTORED",
          text: "Animal control moved Gerald to a preserve 30 miles away. Doreen held a small ceremony. Mr. Hoffstetter has emerged from the hedge.",
        },
        backfire: {
          headline: "ANIMAL CONTROL OFFICER FLEES; GERALD NOW HAS A NET",
          text: "Officer Pat Lerner arrived with a net and left without it. Gerald keeps it by the pond. Nobody knows what he plans to do with it.",
          setFlags: ["gerald_strong"],
        },
      },
      {
        text: "Negotiate. Offer him a seat on the HOA board.",
        tone: "odd",
        setFlags: ["gerald_board"],
        success: {
          headline: "GOOSE JOINS HOA BOARD; MEETINGS 'MORE EFFICIENT'",
          text: "Gerald attends every meeting and hisses at anyone who talks too long. Meetings now last nine minutes. Doreen admits he's \"a natural.\"",
        },
        backfire: {
          headline: "NEW GOOSE BOARD MEMBER VOTES TO REMOVE DOREEN",
          text: "In his first meeting, Gerald cast the deciding hiss to remove Doreen as president. The vote stands. Bylaws are bylaws.",
          setFlags: ["gerald_strong"],
        },
      },
      {
        text: "Declare war. Buy a decoy army. Fight goose with goose.",
        tone: "chaotic",
        setFlags: ["geese_war"],
        success: {
          headline: "DECOY ARMY BAFFLES GERALD; GOOSE RETREATS",
          text: "Doreen deployed 200 plastic geese. Gerald, overwhelmed by the silent, unblinking crowd, left. He's been seen at the golf course, looking haunted.",
        },
        backfire: {
          headline: "GERALD NOW COMMANDS DECOY ARMY",
          text: "Somehow Gerald leads the decoys now. Residents swear the plastic geese move at night. Gerald holds the high ground.",
          setFlags: ["gerald_strong"],
        },
      },
      {
        text: "Become the goose. Hiss back. Assert dominance.",
        tone: "chaotic",
        success: {
          headline: "HOA PRESIDENT OUT-HISSES GOOSE",
          text: "Doreen stood on the bench and hissed for eleven minutes. Gerald lowered his neck and waddled away. Neighbors are relieved, and deeply uncomfortable around Doreen.",
        },
        backfire: {
          headline: "GOOSE WINS FOUR-HOUR HISSING STANDOFF",
          text: "Doreen lost her voice. Gerald did not. She communicates by notepad now. Most of the notes just say GERALD.",
          setFlags: ["gerald_strong"],
        },
      },
    ],
  },

  {
    id: "doreen_2",
    from: "doreen",
    after: "doreen_1",
    minDay: 5,
    subject: "Someone Painted Their House 'Aggressively Teal'",
    body: "The new neighbors at 14 Maple Court painted their house a color I can only describe as \"aggressively teal.\" It is not on the approved palette (Beige, Eggshell, Greige, Sand, Ecru, and Hope). I've sent eleven letters. They waved at me. WAVED. What is the appropriate HOA response?",
    postscripts: [
      { requires: ["gerald_board"], text: "P.S. Gerald voted to approve the teal. I suspect bribery. (Bread.)" },
      { requires: ["gerald_strong"], text: "P.S. Gerald is still here. He's watching me write this." },
      { requires: ["geese_war"], text: "P.S. The war continues. A gang of grandmothers on Vespas has offered to help. I am considering it." },
    ],
    options: [
      {
        text: "Let it go. It's their house. Bring cookies instead.",
        tone: "sensible",
        success: {
          headline: "HOA PRESIDENT BRINGS COOKIES TO TEAL HOUSE; FRIENDSHIP FORMS",
          text: "Turns out the teal neighbors, Bob and Jan, are lovely and also hate Gerald. Doreen has her first friends in fifteen years.",
        },
        backfire: {
          headline: "COOKIES INTERPRETED AS ACT OF WAR",
          text: "Bob and Jan read the oatmeal raisin cookies as a passive-aggressive threat. Their mailbox is now also teal.",
        },
      },
      {
        text: "Paint YOUR house even brighter. Escalate the palette.",
        tone: "chaotic",
        success: {
          headline: "COLOR WAR TURNS MAPLE COURT INTO TOURIST DESTINATION",
          text: "Doreen went safety orange. The neighbors followed suit. Maple Court is now a rainbow and was featured in a travel magazine. Doreen is furious and secretly thrilled.",
        },
        backfire: {
          headline: "HOA PRESIDENT FINES HERSELF $3,000",
          text: "After painting her house safety orange, Doreen was obligated as HOA president to fine herself. She is contesting it. With herself.",
        },
      },
      {
        text: "Sue them in small claims court. Rules are rules.",
        tone: "sensible",
        success: {
          headline: "JUDGE RULES TEAL 'TECHNICALLY GREIGE IN SOME LIGHTS'",
          text: "The case was dismissed, but the judge was so impressed by Doreen's 47-page brief that he hired her as a clerk. She's thrilled.",
        },
        backfire: {
          headline: "LAWSUIT REVEALS HOA NEVER LEGALLY EXISTED",
          text: "During discovery it emerged that the Maple Court HOA was never registered. Doreen has been president of nothing for fifteen years. Bob and Jan sent a teal sympathy card.",
          setFlags: ["hoa_dissolved"],
        },
      },
      {
        text: "Release Gerald into their yard. Let nature take its course.",
        tone: "chaotic",
        success: {
          headline: "GERALD MOVES IN WITH TEAL NEIGHBORS; EVERYONE HAPPY",
          text: "Gerald loves the teal. He guards their porch like a dog. The neighbors adore him. Doreen's pond is finally peaceful. A win-win-goose.",
        },
        backfire: {
          headline: "GOOSE TRACKS TEAL PAINT DOWN ENTIRE STREET",
          text: "Gerald got into the paint cans and walked teal footprints across every driveway on Maple Court. He seems very proud.",
        },
      },
    ],
  },

  {
    id: "doreen_3",
    from: "doreen",
    after: "doreen_2",
    minDay: 8,
    subject: "Gerald Has Gone Political",
    body: "Gerald the goose has started showing up at Town Hall. He stands outside hissing at council members. Yesterday someone pinned a little campaign button on him. People are CHEERING for him. I've created a monster. Should I stop him? Can I stop him? Can anyone?",
    postscripts: [
      { requires: ["hoa_dissolved"], text: "P.S. I'm writing as a private citizen now, since the HOA turned out not to exist. I still have the clipboard." },
    ],
    options: [
      {
        text: "Contact wildlife services. Geese can't hold office. Probably.",
        tone: "sensible",
        success: {
          headline: "STATE CONFIRMS: GEESE CANNOT HOLD OFFICE",
          text: "Gerald was informed. He hissed. He has since returned to the Maple Court pond, where he and Doreen have reached an uneasy peace.",
        },
        backfire: {
          headline: "LAWYERS FIND NO RULE AGAINST GOOSE MAYOR",
          text: "After reviewing the town charter, nothing prevents a goose from serving. Gerald's campaign now has momentum and a slogan: HONK IF YOU'RE ANGRY.",
          setFlags: ["goose_mayor"],
        },
      },
      {
        text: "Become his campaign manager. If you can't beat him...",
        tone: "chaotic",
        setFlags: ["goose_mayor"],
        success: {
          headline: "DOREEN FITCH: 'GERALD'S CAMPAIGN IS ABOUT DIGNITY'",
          text: "Doreen's strategy (hissing at reporters, explaining nothing) is working. Gerald is polling higher than the Mayor.",
        },
        backfire: {
          headline: "GOOSE CANDIDATE BITES OWN CAMPAIGN MANAGER",
          text: "Gerald bit Doreen during a photo op. She stayed on. \"Every campaign has growing pains,\" she said, bleeding slightly.",
        },
      },
      {
        text: "Feed him bread until he's too content to care about politics.",
        tone: "odd",
        success: {
          headline: "'CARB ACCORD' ENDS GOOSE'S POLITICAL CAREER",
          text: "After three loaves of sourdough, Gerald lay down by the pond and hasn't hissed since.",
        },
        backfire: {
          headline: "BREAD MAKES GERALD 'HUGE'",
          text: "Gerald has doubled in size and is nearly as tall as Doreen. He's no longer interested in politics. He's interested in conquest.",
          setFlags: ["gerald_strong"],
        },
      },
      {
        text: "Run against him yourself. Woman versus goose.",
        tone: "odd",
        success: {
          headline: "GOOSE DROPS OUT 'OUT OF RESPECT' FOR DOREEN",
          text: "Doreen's announcement was so passionate that Gerald honked twice and flew south. She's polling at 18%, which is more than she expected.",
        },
        backfire: {
          headline: "GOOSE CRUSHES DOREEN IN DEBATE",
          text: "Gerald hissed through Doreen's entire opening statement until she cried. The crowd loved it.",
          setFlags: ["goose_mayor"],
        },
      },
    ],
  },
];
