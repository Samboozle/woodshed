export const theLick = {
  voices: [
    { notes: [
        { clef: "treble", keys: ["a/3"], duration: "8" }, // a
        { clef: "treble", keys: ["d/4"], duration: "8" }, // d
        { clef: "treble", keys: ["e/4"], duration: "8" }, // e
        { clef: "treble", keys: ["f/4"], duration: "8" }, // f
        { clef: "treble", keys: ["g/4"], duration: "8" }, // g
        { clef: "treble", keys: ["e/4"], duration: "q" }, // e
        { clef: "treble", keys: ["c/4"], duration: "8" }, // c
        { clef: "treble", keys: ["d/4"], duration: "8" }, // d
        { clef: "treble", keys: ["d/4"], duration: "w" }, // (tied)
      ],
      get numBeats() {
        let beats = 0;
        let translator = {
          "8": 0.5,
          "q": 1,
          "h": 2,
          "w": 4
        }
        this.notes.forEach(note => {
          if (note.duration) {
            beats += translator[duration];
          }
        });
        return beats;
      },
      beatValue: 4
    },
  ],
  timeSignature: "4/4"
} 