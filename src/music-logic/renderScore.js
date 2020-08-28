import Vex from 'vexflow';
import _ from 'lodash';
import theKeys from './theKeys';

const { Accidental, Barline, Beam, Factory, Formatter, Registry, KeySignature,
  Stave, StaveModifier, StaveNote, System, StaveTie, Voice } = Vex.Flow;
// const { SINGLE, DOUBLE, END, NONE,
//   REPEAT_BEGIN, REPEAT_BOTH, REPEAT_END
// } = Barline.type;
const { END } = StaveModifier.Position;

// this function was inspired by the BachTests in the VexFlow project on github,
// specifically: https://github.com/0xfe/vexflow/blob/master/tests/bach_tests.js

// I decided to use easyscore after reading this test and finding its solution
// to note modification impressive.

export default (noodle, windowWidth) => {

  // windowSpec
  let scoreWidth = windowWidth // Math.max(windowWidth * 0.75, 500);
  // let canvasHeight = Math.max(windowHeight * 0.75, 500);

  // Boilerplate
  // registry allows notes to be marked with unique identifiers for later modification,
  // even across barlines
  let registry = new Registry();
  Registry.enableDefaultRegistry(registry);
  const retrieve = id => registry.getElementById(id);

  // instantiate score
  let vex = new Factory({ renderer: { elementId: "score" } })
  let score = vex.EasyScore();

  // Helpers
  // shorthand for score.[method]
  let makeVoice = score.voice.bind(score);
  let makeNotes = score.notes.bind(score);
  // let beam = score.beam.bind(score);
  // let tuplet = score.tuplet.bind(score);

  // prefer to give each measure x, y, and width values in reducer below
  // initialize score with first system indented, per engraving custom
  // let x = 120;
  // let y = 20;

  let makeSystem = (x, y, width) => {
    return vex.System({ x: x, y: y, width: width, spaceBetweenStaves: 10 });
  }

  // todo -> write reducer that determines width and position of current measure
  // by comparing it to density of NEXT measure;
  
  let measures = noodle.measures.reduce(simplifyMeasures(scoreWidth), []);

  let modifications = {};

  measures.forEach((measure, mNo) => {
    let { isPickup, keySig, timeSig,
      showClef, showKey, showTime,
      endClef, endKey, endTime,
      staves, barlines, connectors,
      x, y, width
    } = measure;

    console.log(measure);

    score.set({ time: timeSig })

    let system = makeSystem(x, y, width);

    for (let staveClef in staves) {
      let voices = staves[staveClef];
      let vs = [];

      voices.forEach((voice, vNo) => {
        let ns = [];

        voice.forEach((noteObj, nNo) => {
          let { clef, keys, duration, modifiers } = noteObj;
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

      if (showClef) { staff.addClef(staveClef); }

      if (endClef) { staff.addEndClef(endClef); }

      if (showKey) { staff.addKeySignature(keySig); }

      if (endKey) { staff.addModifier(new KeySignature(endKey, END), END); }

      if (showTime) { staff.addTimeSignature(timeSig); }

      if (endTime) { staff.addEndTimeSignature(endTime); }


      if (_.isEmpty(connectors)) {
        staff.addModifier(new Barline(barlines.left));
        staff.addEndModifier(new Barline(barlines.right));
      }

    }
    
    if (!_.isEmpty(connectors)) {
      system.addConnector()
      connectors.forEach(conn => { system.addConnector(conn); });
    }

    vex.draw();

    console.log(vex.context)
    console.log(system.context)


  })
  
  // this function should add an x, y, and width property to each measure
  // as well as add markers as to whether clefs, key signatures, and time signatures should
  // be displayed (see src/deprecated/renderScore.js for simplifyMeasures reducer)

  // AS WELL AS TEMPO/TEMPO CHANGE INFORMATION

  // ideally, it will also intelligently identify groups of notes to be beamed and groups of notes to be tupled
  
}

// curried to make scoreWidth available
const simplifyMeasures = scoreWidth => (acc, measure, _index) => {
  
  let { staves, barlines, keySig, timeSig, isPickup } = measure;
  let voices = [];

  for (let stave in staves) {
    for (let voice of staves[stave]) {
      voices.push(voice);
    }
  }
  
  let maxLength = _.maxBy(voices, v => v.length).length;
  
  measure.connectors = [];
  
  // conditions for first measure
  if (_.isEmpty(acc)) {
    measure.showClef = true;
    measure.showKey = true;
    measure.showTime = true;
    measure.x = 50;
    measure.y = 20;
    measure.width = Math.min(
      maxLength * 30,
      scoreWidth - measure.x - 20
    ) + 90;

    console.log(measure.width)

    if (Object.keys(staves).length > 1) {
      measure.connectors.push("brace");
    }

    return [ measure ];
  }
  
  // subsequent measures
  // let prev = _.initial(acc);
  // let lastMeasure  = _.last(acc);
  // if (_.isEmpty(prev)) {

  // } else {
    
  // }




  return [...acc, measure];

}

const concat = (a, b) => a.concat(b);
const isAccidental = (pitch, key) => !theKeys[key].includes(pitch);

