import Vex from 'vexflow';
import _, { property } from 'lodash';
import theKeys from './theKeys';

const { Accidental, Beam, Factory, Formatter, Registry, Stave, StaveNote, System, StaveTie, Voice } = Vex.Flow;

// this function was inspired by the BachTests in the VexFlow project on github,
// specifically: https://github.com/0xfe/vexflow/blob/master/tests/bach_tests.js

// I decided to use easyscore after reading this test and finding its solution
// to note modification impressive.

export default (noodle, windowWidth, windowHeight) => {
  // Boilerplate
  // registry allows notes to be marked with unique identifiers for later modification,
  // even across barlines
  let registry = new Registry();
  Registry.enableDefaultRegistry(registry);

  // instantiate score
  let vex = new Factory({ renderer: { elementId: "score" } })
  let score = vex.EasyScore();

  // Helpers
  // shorthand for score.[method]
  let voice = score.voice.bind(score);
  let notes = score.notes.bind(score);
  let beam = score.beam.bind(score);
  let tuplet = score.tuplet.bind(score);

  // initialize score with first system indented, per engraving custom
  let x = 120;
  let y = 20;

  let makeSystem = width => {
    let system = vex.System({ x: x, y: y, width: width, spaceBetweenStaves: 10 });
  }

  
  
  
}


const concat = (a, b) => a.concat(b);

const renderNotes = (notes, keySig) => {
  return notes.map(({ clef, keys, duration }) => {
    let note = new StaveNote({ clef, keys, duration });
    keys.forEach((key, i) => {
      let k = key.split("/")[0];
      if (isAccidental(k, keySig)) {
        let accid = k.slice(1) || "n";
        note.addAccidental(i, new Accidental(accid));
      }
    })
    if (duration.endsWith("d")) { note.addDotToAll(); }

    return note;
  })
}

// const simplifyMeasures = (acc, measure) => {

//   if (acc.length === 0) {
//     measure.timeChange = true;
//     return [measure];
//   }

//   let lastMeasure = _.last(acc);

//   if (lastMeasure.timeSig !== measure.timeSig) {
//     measure.timeChange = true;
//   }

//   if (lastMeasure.keySig !== measure.keySig) {
//     measure.keyChange = true;
//   }

//   if (lastMeasure.clef !== measure.clef) {
//     measure.clefChange = true;
//   }

//   return [...acc, measure];

// }

const isAccidental = (pitch, key) => !theKeys[key].includes(pitch);