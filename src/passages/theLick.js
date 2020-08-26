export default {
  measures: [ 
    { isPickupMeasure: true,
      beats: 0.5,
      timeSig: "4/4",
      keySig: "Dm",
      voices: [[
        { clef: "treble", keys: ["a/3"], duration: "8" }
      ]]
    },
    { isPickupMeasure: false,
      beats: 4,
      timeSig: "4/4",
      keySig: "Dm",
      voices: [[
        { clef: "treble", keys: ["d/4"], duration: "8" }, // d
        { clef: "treble", keys: ["e/4"], duration: "8" }, // e
        { clef: "treble", keys: ["f/4"], duration: "8" }, // f
        { clef: "treble", keys: ["g/4"], duration: "8" }, // g
        { clef: "treble", keys: ["e/4"], duration: "q" }, // e
        { clef: "treble", keys: ["c/4"], duration: "8" }, // c
        { clef: "treble", keys: ["d/4"], duration: "8" },
      ]]
    },
    { isPickupMeasure: false,
      beats: 4,
      timeSig: "4/4",
      keySig: "Dm",
      voices: [[
        { clef: "treble", keys: ["d/4"], duration: "w" }
      ]]
    }
  ],
  clefs: ["treble"],
  // get ties() {
  //   let ties = [];
  //   let allNotes = this.measures.flatMap(measure => {
  //     return measure.notes;
  //   })


  //   return allNotes;
  // },
  description: "This is The Lick. What else is there to say?"
}