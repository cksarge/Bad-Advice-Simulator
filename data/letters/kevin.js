// The Astonishing Kevin, a stage magician with more confidence than technique.
export default [
  {
    id: "kevin_1",
    from: "kevin",
    minDay: 3,
    subject: "My Assistant Vanished",
    body: "I'm a stage magician: The Astonishing Kevin. Last week my assistant, Lorraine, vanished during the Vanishing Cabinet trick. Good news: she's fine. She sent a postcard from Portugal saying she's \"not coming back\" and \"please stop calling.\" Bad news: I have a show Saturday at the Elks Lodge and no assistant. The show must go on.",
    options: [
      {
        text: "Hold auditions. Be a professional.",
        tone: "sensible",
        success: {
          headline: "MAGICIAN HIRES NEW ASSISTANT: A RETIRED ACCOUNTANT NAMED BEV",
          text: "Bev is 67 and terrifyingly competent. Saturday's show went flawlessly. Bev has already restructured Kevin's finances.",
        },
        backfire: {
          headline: "ONLY ONE APPLICANT ATTENDS MAGIC AUDITION: A GOOSE",
          text: "Gerald the goose showed up. Kevin, desperate, hired him. The show was chaos. Gerald got the biggest applause.",
          setFlags: ["kevin_goose"],
        },
      },
      {
        text: "Borrow Dolores the llama. Audiences love llamas.",
        tone: "odd",
        setFlags: ["kevin_llama"],
        success: {
          headline: "LLAMA ASSISTANT 'STEALS SHOW'; MAGICIAN 'FINE WITH IT'",
          text: "Dolores stood perfectly still while Kevin sawed a box in half beside her, then walked off stage. The crowd went wild. Best show of Kevin's career.",
        },
        backfire: {
          headline: "LLAMA ASSISTANT DISAPPEARS, DOES NOT REAPPEAR",
          text: "Kevin made Dolores \"vanish\" behind a curtain. She left by the back door and walked home. Gus Pettibone was not thrilled to receive her at 2 a.m.",
        },
      },
      {
        text: "Saw yourself in half. Solo act. Raise the stakes.",
        tone: "chaotic",
        success: {
          headline: "MAGICIAN SAWS HIMSELF IN HALF; IS FINE; NOBODY KNOWS HOW",
          text: "Kevin sawed himself in half, waved both halves, and reassembled. Even Kevin doesn't know how he did it. He's afraid to try it again.",
        },
        backfire: {
          headline: "SELF-SAWING ACT ENDS IN 14 STITCHES AND A STANDING OVATION",
          text: "Kevin got about two inches in. He's fine. The Elks Lodge carpet is not. The audience assumed it was part of the act and wants it again.",
        },
      },
      {
        text: "Perform with an invisible Lorraine. Mime her. Sell it.",
        tone: "odd",
        success: {
          headline: "INVISIBLE ASSISTANT ACT A SURREAL HIT",
          text: "Audiences swore they could see her. Lorraine, in Portugal, reported feeling \"weirdly tired\" that evening.",
        },
        backfire: {
          headline: "AUDIENCE FINDS INVISIBLE ASSISTANT 'UNBEARABLY SAD'",
          text: "The act was so lonely that people wept. Several offered Kevin their phone numbers out of pity. He went on two dates. Both were with grief counselors.",
        },
      },
    ],
  },

  {
    id: "kevin_2",
    from: "kevin",
    after: "kevin_1",
    minDay: 5,
    subject: "I Need a Big Finale",
    body: "Shows are going okay, but I need a finale. Something people will talk about for years. Houdini had the water torture cell. Other guys made national monuments disappear. I have a rabbit named Gary who is very old and mostly sleeps. Ideas?",
    postscripts: [
      { requires: ["kevin_mayor"], text: "P.S. The thing I did for the Mayor... let's just say it's \"ongoing.\"" },
      { requires: ["kevin_bakery"], text: "P.S. If anyone asks, I am still working on getting the bakery back." },
    ],
    options: [
      {
        text: "Perfect one classic trick. Simple, clean, rehearsed.",
        tone: "sensible",
        success: {
          headline: "MAGICIAN'S CARD TRICK MAKES GROWN MAN CALL ESTRANGED BROTHER",
          text: "Kevin's card work was so clean a man in the front row wept, walked out, and phoned his brother. They're reconciling.",
        },
        backfire: {
          headline: "ELDERLY RABBIT PASSES AWAY MID-FINALE; AUDIENCE ASSUMES IT'S THE TRICK",
          text: "Gary, 14, chose the big moment to go peacefully. The crowd gave a standing ovation. Gary was buried behind the Elks Lodge with full magical honors. Kevin received a very confusing review.",
        },
      },
      {
        text: "Make the water tower disappear. It's been stolen before anyway.",
        tone: "chaotic",
        success: {
          headline: "WATER TOWER VANISHES, REAPPEARS NEXT MORNING FRESHLY PAINTED",
          text: "Kevin threw a sheet over the tower. When it came down, the tower was gone. The next morning it was back, clean. Nobody knows how. Dusty is suing.",
        },
        backfire: {
          headline: "WATER TOWER VANISHES; DOES NOT COME BACK",
          text: "Kevin says it's \"in the in-between.\" The town is on bottled water. Dusty is devastated.",
        },
      },
      {
        text: "Escape from the locked lighthouse. Underwater.",
        tone: "chaotic",
        setFlags: ["lighthouse_visit"],
        success: {
          headline: "MAGICIAN ESCAPES LOCKED LIGHTHOUSE IN FOUR MINUTES",
          text: "It wasn't underwater (the tide was out) but it was still impressive. Walt Brickman gave him a cookie.",
        },
        backfire: {
          headline: "MAGICIAN STUCK IN LIGHTHOUSE THREE DAYS; KEEPER CHARGES RENT",
          text: "The lock was real. Walt charged Kevin $40 a night and served lentil soup. Kevin left a five-star review.",
          setFlags: ["lighthouse_tenant"],
        },
      },
      {
        text: "Read minds on stage. Specifically, the Mayor's.",
        tone: "odd",
        setFlags: ["mayor_suspicious"],
        success: {
          headline: "MAGICIAN READS MAYOR'S MIND; MAYOR FLEES BUILDING",
          text: "\"You're thinking about a hot tub,\" Kevin said. The Mayor ran out of the Elks Lodge. Nobody knows how Kevin knew. Everyone wants to know more.",
        },
        backfire: {
          headline: "MIND-READER ACCIDENTALLY READS OWN MIND ALOUD",
          text: "The audience learned that Kevin cries during commercials and once ate a crayon in 2019.",
        },
      },
    ],
  },

  {
    id: "kevin_3",
    from: "kevin",
    after: "kevin_2",
    minDay: 9,
    subject: "Lorraine Wants to Come Back",
    body: "Lorraine wrote from Portugal. She wants to come back. She says Portugal was \"lovely but quiet.\" But I've built a whole new act without her, and I'm finally happy. Do I take her back?",
    postscripts: [
      { requires: ["kevin_llama"], text: "P.S. Dolores has expressed interest in a full-time position. She communicated this by eating my top hat." },
      { requires: ["kevin_goose"], text: "P.S. Gerald the goose is still in the act and he does NOT want Lorraine back." },
    ],
    options: [
      {
        text: "Welcome her back. Old friends are worth it.",
        tone: "sensible",
        success: {
          headline: "MAGICIAN AND ASSISTANT REUNITE; ACT 'BETTER THAN EVER'",
          text: "Lorraine returned with a suitcase full of Portuguese tricks. Their new show, \"The Return of Lorraine,\" is booked through spring.",
        },
        backfire: {
          headline: "ASSISTANT RETURNS, VANISHES AGAIN DURING HELLO HUG",
          text: "Lorraine hugged Kevin at the airport and disappeared. Kevin insists he \"didn't do anything.\" A postcard from Iceland arrived two days later.",
        },
      },
      {
        text: "Thank her kindly, but say no. You've grown.",
        tone: "sensible",
        success: {
          headline: "MAGICIAN SAYS NO TO EX-ASSISTANT; BOTH 'AT PEACE'",
          text: "Lorraine opened a magic shop in Lisbon. They exchange postcards. Kevin has a new act and a therapist.",
        },
        backfire: {
          headline: "SPURNED ASSISTANT OPENS RIVAL MAGIC SHOW ACROSS THE STREET",
          text: "\"The Astonishing Lorraine\" launched next door. Her version of the Vanishing Cabinet works better. Kevin is spiraling.",
        },
      },
      {
        text: "Make her compete for the job. Against a llama and a goose.",
        tone: "chaotic",
        success: {
          headline: "ASSISTANT DEFEATS LLAMA AND GOOSE IN TRYOUTS",
          text: "Lorraine beat Dolores on poise and Gerald on intimidation. \"Hardest job interview of my life,\" she said.",
        },
        backfire: {
          headline: "GOOSE WINS ASSISTANT JOB; LORRAINE RETURNS TO PORTUGAL",
          text: "\"I'm not losing to a goose twice,\" Lorraine said, and left. Nobody knows what the first time was.",
        },
      },
      {
        text: "Vanish yourself to Portugal. Switch lives with her.",
        tone: "chaotic",
        success: {
          headline: "MAGICIAN AND ASSISTANT SWAP COUNTRIES",
          text: "Lorraine now headlines the Elks Lodge. Kevin sells sardines in Porto and calls it \"the greatest trick of my career.\"",
        },
        backfire: {
          headline: "MAGICIAN ATTEMPTS TELEPORT TO PORTUGAL, ARRIVES IN LIGHTHOUSE",
          text: "Walt Brickman has started charging Kevin a monthly rate.",
          setFlags: ["lighthouse_tenant"],
        },
      },
    ],
  },
];
