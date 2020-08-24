export default {
  measures: [
    {
      isPickupMeasure: true,
      beats: 0.5,
      timeSig: "4/4",
      keySig: "Dm",
      voices: [[
        { clef: "treble", keys: ["a/4"], duration: "8", modifiers: [] }
      ],
      [
        { clef: "treble", keys: ["e/4"], duration: "8r"}
      ]
    ]
    },
    {
      isPickupmeasure: false,
      beats: 4,
      timeSig: "4/4",
      keySig: "Dm",
      voices: [[
        { clef: "treble", keys: ["d/5"], duration: "8", modifiers: [] },
        { clef: "treble", keys: ["e/5"], duration: "8", modifiers: [] },
        { clef: "treble", keys: ["f/5"], duration: "8", modifiers: [] },
        { clef: "treble", keys: ["g/5"], duration: "8", modifiers: [] },
        { clef: "treble", keys: ["e/5"], duration: "q", modifiers: [] },
        { clef: "treble", keys: ["c/5"], duration: "8", modifiers: [] },
        { clef: "treble", keys: ["d/5"], duration: "8", modifiers: [] },
      ],
      [
      
      ]
    ]
    },
    {
      isPickupmeasure: false,
      beats: 4,
      timeSig: "4/4",
      keySig: "Dm",
      voices: [[
        { clef: "treble", keys: ["d/5"], duration: "w", modifiers: [] }
      ]]
    }
  ],
  get clefs() {
    let cs = [];
    this.measures.forEach(m => {
      m.notes.forEach(n => {
        if (!cs.includes(n.clef)) {
          cs.push(n.clef);
        }
      })
    });
    return cs;
  },
  // get ties() {
  //   let ties = [];
  //   let allNotes = this.measures.flatMap(measure => {
  //     return measure.notes;
  //   })


  //   return allNotes;
  // },
  description: "This is The Lick. What else is there to say?"
}