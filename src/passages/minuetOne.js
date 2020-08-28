export default {
  measures: [
    { isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      // clefs: ["treble", "bass"],
      staves: {
        "treble": [
          [ { clef: "treble", keys: ["d5"], duration: "q", modifiers: null },
            { clef: "treble", keys: ["g4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["c5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [ { clef: "bass", keys: ["g3", "b3", "d4"], duration: "h", modifiers: null },
            { clef: "bass", keys: ["a3"], duration: "q", modifiers: null }
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    }
  ],
  // clefs: ["treble", "bass"]
}