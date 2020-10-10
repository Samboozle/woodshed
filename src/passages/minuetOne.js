export default {
  id: 1,
  title: "Minuet One (Excerpt)",
  composer: "J. S. Bach",
  description: "",
  measures: [
    { // measure 1
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [ 
            { clef: "treble", keys: ["d/5"], duration: "q", modifiers: { "finger": { number: 5 } } },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [ 
            { clef: "bass", keys: ["g/3", "b/3", "d/4"], duration: "h", modifiers: null },
            { clef: "bass", keys: ["a/3"], duration: "q", modifiers: null }
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 2
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
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
          [{ clef: "bass", keys: ["b/3"], duration: "h.", modifiers: null }]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 3
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [ { clef: "treble", keys: ["e/5"], duration: "q", modifiers: { "finger": { number: 3 } } },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["d/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["e/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["f#/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [ { clef: "bass", keys: ["c/4"], duration: "h.", modifiers: null } ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 4
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [{
            clef: "treble", keys: ["g/5"], duration: "q", modifiers: {
              "artic": {
                type: "a.",
                position: "above"
              }
            }
          },
          {
            clef: "treble", keys: ["g/4"], duration: "q", modifiers: {
              "artic": {
                type: "a.",
                position: "below"
              }
            }
          },
          {
            clef: "treble", keys: ["g/4"], duration: "q", modifiers: {
              "artic": {
                type: "a.",
                position: "below"
              }
            }
          },
          ]
        ],
        "bass": [
          [{ clef: "bass", keys: ["b/3"], duration: "h.", modifiers: null }]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 5
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["c/5"], duration: "q", modifiers: { "finger": { number: 4 } } },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [[ { clef: "bass", keys: ["a/3"], duration: "h.", modifiers: null } ]]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 6
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["b/4"], duration: "q", modifiers: null },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [[{ clef: "bass", keys: ["g/3"], duration: "h.", modifiers: null }]]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 7
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["f#/4"], duration: "q", modifiers: { "finger": { number: 2 } } },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: { "finger": { number: 1 } } },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [
            { clef: "bass", keys: ["d/4"], duration: "q", modifiers: null },
            { clef: "bass", keys: ["b/3"], duration: "q", modifiers: { "finger": { number: 3 } } },
            { clef: "bass", keys: ["g/3"], duration: "q", modifiers: null },
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 8
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["a/4"], duration: "h.", modifiers: { "grace": { notes: [{ keys: ["b/4"], duration: "8", slash: true }] } } },
          ]
        ],
        "bass": [
          [
            { clef: "bass", keys: ["d/4"], duration: "q", modifiers: null },
            { clef: "bass", keys: ["d/3"], duration: "8", modifiers: { "finger": { number: 3 } } },
            { clef: "bass", keys: ["c/4"], duration: "8", modifiers: null },
            { clef: "bass", keys: ["b/3"], duration: "8", modifiers: null },
            { clef: "bass", keys: ["a/3"], duration: "8", modifiers: null },
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 9
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["d/5"], duration: "q", modifiers: { "finger": { number: 5 } } },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [
            { clef: "bass", keys: ["b/3"], duration: "h", modifiers: null },
            { clef: "bass", keys: ["a/3"], duration: "q", modifiers: null }
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 10
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [{
            clef: "treble", keys: ["d/5"], duration: "q", modifiers: {
              "artic": {
                type: "a.",
                position: "above"
              }
            }
          },
          {
            clef: "treble", keys: ["g/4"], duration: "q", modifiers: {
              "artic": {
                type: "a.",
                position: "below"
              }
            }
          },
          {
            clef: "treble", keys: ["g/4"], duration: "q", modifiers: {
              "artic": {
                type: "a.",
                position: "below"
              }
            }
          },
          ]
        ],
        "bass": [
          [
            { clef: "bass", keys: ["b/3"], duration: "h.", modifiers: { "finger": { number: 4 } } }
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 11
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [ { clef: "treble", keys: ["e/5"], duration: "q", modifiers: { "finger": { number: 3 } } },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["d/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["e/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["f#/5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [ { clef: "bass", keys: ["c/4"], duration: "h.", modifiers: null } ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 12
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["g/5"], duration: "q", modifiers: { "artic": { type: "a.", position: "above" } } },
            { clef: "treble", keys: ["g/4"], duration: "q", modifiers: { "artic": { type: "a.", position: "below" } } },
            { clef: "treble", keys: ["g/4"], duration: "q", modifiers: { "artic": { type: "a.", position: "below" } } },
          ]
        ],
        "bass": [
          [
            { clef: "bass", keys: ["b/3"], duration: "q", modifiers: { "finger": { number: 2, position: "above" } } },
            { clef: "bass", keys: ["c/4"], duration: "8", modifiers: null },
            { clef: "bass", keys: ["b/3"], duration: "8", modifiers: null },
            { clef: "bass", keys: ["a/3"], duration: "8", modifiers: null },
            { clef: "bass", keys: ["g/3"], duration: "8", modifiers: { "finger": { number: 4, position: "above" } } },
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 13
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["c/5"], duration: "q", modifiers: { "finger": { number: 4 } } },
            { clef: "treble", keys: ["d/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [
            { clef: "bass", keys: ["a/3"], duration: "h", modifiers: { "finger": { number: 1 } } },
            { clef: "bass", keys: ["f/3"], duration: "q", modifiers: { "finger": { number: 3, position: "above" } } }
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 14
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["b/4"], duration: "q", modifiers: null },
            { clef: "treble", keys: ["c/5"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [[
          { clef: "bass", keys: ["g/3"], duration: "h", modifiers: { "finger": { number: 2 } } },
          { clef: "bass", keys: ["g/3"], duration: "q", modifiers: { "finger": { number: 1 } } },
        ]]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 15
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["a/4"], duration: "q", modifiers: null },
            { clef: "treble", keys: ["b/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["a/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["g/4"], duration: "8", modifiers: null },
            { clef: "treble", keys: ["f#/4"], duration: "8", modifiers: { "finger": { number: 2 } } },
          ]
        ],
        "bass": [
          [
            { clef: "bass", keys: ["c/4"], duration: "q", modifiers: { "finger": { number: 2 } } },
            { clef: "bass", keys: ["d/4"], duration: "q", modifiers: null },
            { clef: "bass", keys: ["d/3"], duration: "q", modifiers: null },
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "single"
      }
    },
    { // measure 16 
      isPickup: false,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [
            { clef: "treble", keys: ["a/4"], duration: "h.", modifiers: { "grace": { notes: [{ keys: ["b/4"], duration: "8", slash: true }] } } },
          ]
        ],
        "bass": [
          [
            { clef: "bass", keys: ["d/4"], duration: "q", modifiers: null },
            { clef: "bass", keys: ["d/3"], duration: "8", modifiers: { "finger": { number: 3 } } },
            { clef: "bass", keys: ["c/4"], duration: "8", modifiers: null },
            { clef: "bass", keys: ["b/3"], duration: "8", modifiers: null },
            { clef: "bass", keys: ["a/3"], duration: "8", modifiers: null },
          ]
        ]
      },
      barlines: {
        left: "none",
        right: "repeatEnd"
      }
    },
  ],
}
