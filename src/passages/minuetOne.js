import { isPlainObject } from "lodash";

export default {
  measures: [
    { pickup: null,
      timeSig: "3/4",
      keySig: "G",
      staves: {
        "treble": [
          [ { keys: ["d5"], duration: "q", modifiers: null },
            { keys: ["g4"], duration: "8", modifiers: null },
            { keys: ["a4"], duration: "8", modifiers: null },
            { keys: ["b4"], duration: "8", modifiers: null },
            { keys: ["c5"], duration: "8", modifiers: null },
          ]
        ],
        "bass": [
          [ { keys: ["g3", "b3", "d4"], duration: "h", modifiers: null },
            { keys: [] }
          ]
        ]
      }
    }
  ],
  // clefs: ["treble", "bass"]
}