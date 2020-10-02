export default {
  id: 1,
  measures: [
    { isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [ { clef: "treble", keys: ["d/5"], duration: "q", modifiers: { "finger": { number: 5 } } },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [ { clef: "bass", keys: ["g/3", "b/3", "d/4"], duration: "h", modifiers: null },
            { clef: "bass", keys: ["a/3"], duration: "q", modifiers: null }
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    {
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      // clefs: ["treble", "bass"],
      staves: {
        "treble": [
          [ { clef: "treble", keys: ["d/5"], duration: "q", modifiers: { "artic": { type: "a.",
                                                                                   position: "above"
                                                                                  }}},
            { clef: "treble", keys: ["g/4"], duration: "q", modifiers: { "artic": { type: "a.",
                                                                                    position: "below"
                                                                                  }}},
            { clef: "treble", keys: ["g/4"], duration: "q", modifiers: { "artic": { type: "a.",
                                                                                    position: "below"
                                                                                  }}},
          ]
        ],
        "bass": [
          [{ clef: "bass", keys: ["b/3"], duration: "h.", modifiers: null },
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    {
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      // clefs: ["treble", "bass"],
      staves: {
        "treble": [
          [{ clef: "treble", keys: ["d/5"], duration: "q", modifiers: null },
          { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
          { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
          { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
          { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [{ clef: "bass", keys: ["g/3", "b/3", "d/4"], duration: "h", modifiers: null },
          { clef: "bass", keys: ["a/3"], duration: "q", modifiers: null }
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    {
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      // clefs: ["treble", "bass"],
      staves: {
        "treble": [
          [{ clef: "treble", keys: ["d/5"], duration: "q", modifiers: null },
          { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
          { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
          { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
          { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [{ clef: "bass", keys: ["g/3", "b/3", "d/4"], duration: "h", modifiers: null },
          { clef: "bass", keys: ["a/3"], duration: "q", modifiers: null }
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    {
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      // clefs: ["treble", "bass"],
      staves: {
        "treble": [
          [{ clef: "treble", keys: ["d/5"], duration: "q", modifiers: null },
          { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
          { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
          { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
          { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [{ clef: "bass", keys: ["g/3", "b/3", "d/4"], duration: "h", modifiers: null },
          { clef: "bass", keys: ["a/3"], duration: "q", modifiers: null }
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    {
      isPickup: false,
      timeSig: "4/4",
      keySig: "G",
      // clefs: ["treble", "bass"],
      staves: {
        "treble": [
          [ { clef: "treble", keys: ["d/5"], duration: "q", modifiers: null },
            { clef: "treble", keys: ["d/5"], duration: "q", modifiers: null },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [ { clef: "bass", keys: ["g/3", "b/3", "d/4"], duration: "h", modifiers: null },
            { clef: "bass", keys: ["a/3"], duration: "q", modifiers: null },
            { clef: "bass", keys: ["a/3"], duration: "q", modifiers: null }
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
