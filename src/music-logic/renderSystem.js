import Vex from 'vexflow';
import _, { property } from 'lodash';
import theKeys from './theKeys';

const { Accidental, Beam, Factory, Formatter, Registry, Stave, StaveNote, System, StaveTie, Voice } = Vex.Flow;

// this function was inspired by the BachTests in the VexFlow project on github,
// specifically: https://github.com/0xfe/vexflow/blob/master/tests/bach_tests.js

// I decided to use easyscore after reading this test and finding its solution
// to note modification impressive.

export default (noodle, windowWidth, windowHeight) => {

  // windowSpec
  let canvasWidth = Math.max(windowWidth * 0.75, 500);
  let canvasHeight = Math.max(windowHeight * 0.75, 500);

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
  let voice = score.voice.bind(score);
  let notes = score.notes.bind(score);
  let beam = score.beam.bind(score);
  let tuplet = score.tuplet.bind(score);

  // prefer to give each measure x, y, and width values in reducer below
  // initialize score with first system indented, per engraving custom
  // let x = 120;
  // let y = 20;

  let makeSystem = width => {
    return vex.System({ x: x, y: y, width: width, spaceBetweenStaves: 10 });
  }



  // todo -> write reducer that determines width and position of current measure
  // by comparing it to density of NEXT measure;
  
  let measures = noodle.measures.reduce(simplifyMeasures);

  let modifications = {};


  measures.forEach((measure, mNo) => {
    let { pickup, timeSig, keySig, staves, /* x, y, width */ } = measure;
    // let system = makeSystem(width);

    for (let clef in staves) {
      let stave = staves[clef];
      let vs = [];

      stave.forEach((voice, vNo) => {
        let ns = [];

        voice.forEach((noteObj, nNo) => {
          let { keys, duration, modifiers } = noteObj;
          let note = (keys.length === 1 ? keys[0] : `(${keys.join(" ")})`) + `/${duration}`;
          if (modifiers) { 
            let noteId = `M${mNo}C${clef}V${vNo}N${nNo}`;
            modifications[noteId] = modifiers;
            note += `[id="${noteId}"]`;
          }
          ns.push(notes(note));
        })

        vs.push(ns.reduce(concat));
      })

      System.addStave({ voices: vs })



    }

    // treat voices




  })
  
  // this function should add an x, y, and width property to each measure
  // as well as add markers as to whether clefs, key signatures, and time signatures should
  // be displayed (see src/deprecated/renderScore.js for simplifyMeasures reducer)

  // AS WELL AS TEMPO/TEMPO CHANGE INFORMATION

  // ideally, it will also intelligently identify groups of notes to be beamed and groups of notes to be tupled
  const simplifyMeasures = (acc, measure) => {
    let { voices } = measure;
    
    if (_.isEmpty(acc)) {
      measure.timeChange = true;
      measure.x = 120;
      measure.y = 20;

      measure.width = Math.min(
        Math.ceil(beats)
        ) 
        return [measure];
      }
      
      return [...acc, measure];
      
    }
    
  const concat = (a, b) => a.concat(b);
  const isAccidental = (pitch, key) => !theKeys[key].includes(pitch);
  
}


