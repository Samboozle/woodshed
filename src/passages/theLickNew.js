export default {
  measures: [ 
    { isPickupMeasure: true,
      beats: 0.5,
      timeSig: "4/4",
      keySig: "Dm",
      notes: [
        { clef: "treble", keys: ["a/3"], duration: "8", modifiers: [] }
      ]
    },
    { isPickupmeasure: false,
      beats: 4,
      timeSig: "4/4",
      keySig: "Dm",
      notes: [
        { clef: "treble", keys: ["d/4"], duration: "8", modifiers: [] }, // d
        { clef: "treble", keys: ["e/4"], duration: "8", modifiers: [] }, // e
        { clef: "treble", keys: ["f/4"], duration: "8", modifiers: [] }, // f
        { clef: "treble", keys: ["g/4"], duration: "8", modifiers: [] }, // g
        { clef: "treble", keys: ["e/4"], duration: "q", modifiers: [] }, // e
        { clef: "treble", keys: ["c/4"], duration: "8", modifiers: [] }, // c
        { clef: "treble", keys: ["d/4"], duration: "8", modifiers: [] },
      ]
    },
    { isPickupmeasure: false,
      beats: 4,
      timeSig: "4/4",
      keySig: "Dm",
      notes: [
        { clef: "treble", keys: ["d/4"], duration: "w", modifiers: [] }
      ]
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