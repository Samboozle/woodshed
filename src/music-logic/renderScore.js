import Vex from 'vexflow';
import _ from 'lodash';
import theKeys from './theKeys';

const { Barline, Beam, Factory, Registry,
        StaveModifier, StaveNote, StaveTie, Voice
      } = Vex.Flow;

const { END } = StaveModifier.Position;

// this function was inspired by this test in the VexFlow project on github:
// https://github.com/0xfe/vexflow/blob/master/tests/bach_tests.js

export default (noodle, scale) => {

  // Boilerplate
  // registry allows notes to be marked with unique identifiers for later modification,
  // even across barlines
  let registry = new Registry();
  Registry.enableDefaultRegistry(registry);
  const retrieve = id => registry.getElementById(id);

  let measures = noodle.measures.reduce(simplifyMeasures(scale), []);

  // instantiate score
  let vex = new Factory({ renderer: { elementId: "score", width: scale * 1024,
                                      height: scale * (_.last(measures).y + 240) }, // adds clearance to bottom of score
                          stave: { space: 10 },
                          font: { face: "Arial", point: 10, style: "" }
                        });

  console.log(vex.context)

  let context = vex.getContext();
  let score = vex.EasyScore();
  context.scale(scale, scale);

  // Helpers
  // shorthand for score.[method]
  let makeVoice = score.voice.bind(score);
  let makeNotes = score.notes.bind(score);
  let tuplet = score.tuplet.bind(score);

  let makeSystem = (x, y, width) => {
    return vex.System({ x: x, y: y, width: width, spaceBetweenStaves: 9 });
  }


  let modifications = {};

  measures.forEach((measure, mNo) => {
    let { keySig, timeSig,
      showClef, showKey, showTime,
      // endClef, endKey, endTime,
      staves, barlines, connectors,
      x, y, width
    } = measure;

    score.set({ time: timeSig });

    let staveCount = Object.keys(staves).length;

    let system = makeSystem(x, y, width);

    for (let staveClef in staves) {
      let voices = staves[staveClef];
      let vs = [];
     
      voices.forEach((voice, vNo) => {
        let ns = [];

        voice.forEach((noteObj, nNo) => {
          let { clef, keys, duration, modifiers } = noteObj;
          keys = keys.map(k => stripAccidental(keySig, k));
          let note = (keys.length === 1 ? keys[0] : `(${keys.join(" ")})`) + `/${duration}`;
          if (modifiers) {
            // todo -> figure out if each note in keys array gets its own id
            // the nesting of this measure object lets us assign a unique identifier to each note
            let noteId = `M${mNo}C${staveClef}V${vNo}N${nNo}`;
            modifications[noteId] = modifiers;
            note += `[id="${noteId}"]`;
          }
          ns.push(makeNotes(note, { clef: clef }));
        });

        ns = ns.reduce(concat);
        vs.push(makeVoice(ns));
      })

      let staff = system.addStave({ voices: vs });

      // I originally had logic for showing time- and key-signature changes
      // at the ends of measures, but Vexflow's rendering for end-of-measure
      // signatures didn't behave as I expected.

      if (showClef) { staff.addClef(staveClef); }

      // if (endClef) { staff.addEndClef(endClef); }

      if (showKey) { staff.addKeySignature(keySig); }

      // if (endKey) { staff.addModifier(new KeySignature(endKey, END), END); }

      if (showTime) { staff.addTimeSignature(timeSig); }

      // if (endTime) { staff.addEndTimeSignature(endTime); }

      console.log(staveCount)
      if (staveCount === 1) {
        staff.addModifier(new Barline(barlines.left));
        staff.addEndModifier(new Barline(barlines.right));
      }

    }
    
    connectors.forEach(conn => { system.addConnector(conn); });


  });
  console.log(Vex.Flow)
  for (let id in modifications) {
    let modObject = modifications[id];
    let currNote = retrieve(id);
    for (let modKey in modObject) {
      let mod = modObject[modKey];
      switch(modKey) {
        case "artic":
          currNote.addModifier(0, vex.Articulation(mod));
          break;
        case "finger":
          currNote.addModifier(0, vex.Fingering(mod));
          break;
        default:
          break;
      }
    }
  }
  
  vex.draw();

  // draw in additional modifiers or rendering logic from underlying api

  
}

// this function should add an x, y, and width property to each measure
// as well as add markers as to whether clefs, key signatures, and time signatures should
// be displayed (see src/deprecated/renderScore.js for simplifyMeasures reducer)

// AS WELL AS TEMPO/TEMPO CHANGE INFORMATION

// ideally, it will also intelligently identify groups of notes to be beamed and groups of notes to be tupled
// curried to make scale available
const simplifyMeasures = scale => (acc, measure, _index) => {
  
  let { staves, barlines, keySig, timeSig, isPickup } = measure;
  let voices = [];

  for (let stave in staves) {
    for (let voice of staves[stave]) {
      voices.push(voice);
    }
  }
  
  let maxLength = _.maxBy(voices, v => v.length).length;

  measure.connectors = [];
  
  if (_.isEmpty(acc)) { // conditions for first measure
    measure.showClef = true;
    measure.showKey = true;
    measure.showTime = true;
    measure.x = 80;
    measure.y = 10;
    measure.width = Math.min(
      maxLength * 40,
      890
    ) + 90;

    if (Object.keys(staves).length > 1) {
      measure.connectors.push("brace", "singleLeft");
    }

    return [ measure ];

  } else { // subsequent measures
    let prev = _.initial(acc);
    let lastMeasure  = _.last(acc);

    measure.x = lastMeasure.x + lastMeasure.width;
    measure.y = lastMeasure.y;
    measure.width = maxLength * 40;

    if (measure.keySig !== lastMeasure.keySig) {
      measure.showKey = true;
      measure.width += 30;
    }

    if (measure.timeSig !== lastMeasure.timeSig) {
      measure.showTime = true;
      measure.width += 30;
    }

    if (measure.x + measure.width > 980) {
      measure.x = 40;
      measure.y += 200;
      measure.showClef = true;
      measure.showKey = true;
      measure.width += 90;
      lastMeasure.width = 980 - lastMeasure.x;
      measure.connectors.push("brace", "singleLeft");
    }

    return [...prev, lastMeasure, measure];
  }

}

const concat = (a, b) => a.concat(b);
const isAccidental = keySig => pitch => !theKeys[keySig].includes(pitch);
const stripAccidental = (keySig, key) => {
  let [pitch, register] = key.split("/");
  pitch = isAccidental(keySig)(pitch) ? pitch : pitch.charAt(0);
  return [pitch, register].join("");
}

