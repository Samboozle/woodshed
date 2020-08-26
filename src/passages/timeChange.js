export default {
  measures: [
    { isPickupMeasure: false,
      beats: 4,
      timeSig: "4/4",
      keySig: "Dm",
      voices: [[
        { clef: "treble", keys: ["d/4"], duration: "8", chord: { key: "D", quality: "-11", extensions: [], over: null} },
        { clef: "treble", keys: ["e/4"], duration: "8", chord: null },
        { clef: "treble", keys: ["f/4"], duration: "8", chord: null },
        { clef: "treble", keys: ["g/4"], duration: "8", chord: null },
        { clef: "treble", keys: ["e/4"], duration: "q", chord: { key: "D", quality: "-", extensions: [], over: "/C"} },
        { clef: "treble", keys: ["c/4"], duration: "8", chord: null },
        { clef: "treble", keys: ["bb/4"], duration: "8", chord: null, tie: "start" },
      ]]
    },
    { isPickupMeasure: false,
      beats: 5,
      timeSig: "5/4",
      keySig: "Dm",
      voices: [[
        { clef: "treble", keys: ["bb/4"], duration: "8", chord: null, tie: "end" },
      ]]
    }
  ]
}