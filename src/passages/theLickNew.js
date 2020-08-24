export const theLickNew = {
  measures: [ 
    { isPickupMeasure: true,
      beats: 0.5,
      timeSig: "4/4",
      keySig: "Dm",
      clef: "treble",
      notes: [
        { keys: ["a/3"], duration: "8", modifiers: [] }
      ]
    },
    { isPickupmeasure: false,
      beats: 4,
      timeSig: "4/4",
      keySig: "Dm",
      clef: "treble",
      notes: [
        { keys: ["d/4"], duration: "8", modifiers: [] }, // d
        { keys: ["e/4"], duration: "8", modifiers: [] }, // e
        { keys: ["f/4"], duration: "8", modifiers: [] }, // f
        { keys: ["g/4"], duration: "8", modifiers: [] }, // g
        { keys: ["e/4"], duration: "q", modifiers: [] }, // e
        { keys: ["c/4"], duration: "8", modifiers: [] }, // c
        { keys: ["d/4"], duration: "8", modifiers: [] },
      ]
    },
    { isPickupmeasure: false,
      beats: 4,
      timeSig: "4/4",
      keySig: "Dm",
      clef: "treble",
      notes: [
        { keys: ["d/4"], duration: "w", modifiers: [] }
      ]
    }
  ],
  // get ties() {
  //   let ties = [];
  //   let allNotes = this.measures.flatMap(measure => {
  //     return measure.notes;
  //   })


  //   return allNotes;
  // },
  description: "This is The Lick. What else is there to say?"
}