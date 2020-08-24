import Vex from 'vexflow';
import { last } from 'lodash';

const { Accidental, Beam, Formatter, Renderer, Stave, StaveNote, Voice } = Vex.Flow;

export default (noodle, canvasWidth, canvasHeight) => {

  let vexDiv = document.getElementById("score");
  let renderer = new Renderer(vexDiv, Renderer.Backends.SVG);
  renderer.resize(canvasWidth, canvasHeight);
  let context = renderer.getContext();
  let formatter = new Formatter();



  // let { clefs, /* ties */ } = noodle;
  let measures = noodle.measures.reduce(simplifyMeasures, []);
  console.log(measures)
  let x = 0;
  let y = 0;
  let notesThisLine = 0;

  measures.forEach((m, i) => {
    let { beats, clef, keySig, timeSig, clefChange, keyChange, timeChange } = m;
    let width = Math.min(
      Math.ceil(beats) * 50,
      m.notes.length * 80
    );

    if (width + x > canvasWidth) {
      x = 0;
      y += 100;
    }

    if (i === 0) { 
      width += 80;
    } else if (x === 0) {
      width += 60
    }


    let stave = new Stave(x, y, width);

    if (clefChange || x === 0) { stave.addClef(clef) };
    if (keyChange || x === 0) { stave.addKeySignature(keySig); }
    if (timeChange) { stave.addTimeSignature(timeSig); }

    stave.setContext(context).draw();
    let notes = m.notes.map(({ clef, keys, duration }) => {
      notesThisLine++;
      let note = new StaveNote({ clef, keys, duration });
      // keys.forEach((k, i) => {
      //   if (isAccidental(k, keySig)) { 
      //     let accid = k.split("/")[0].slice(1);
      //     note.addAccidental(i, new Accidental(accid));
      //   }
      // })
      if (duration.endsWith("d")) { note.addDotToAll(); }

      return note;
    })
    
    let beams = Beam.generateBeams(notes);

    Formatter.FormatAndDraw(context, stave, notes);
    beams.forEach(beam => { beam.setContext(context).draw(); });

    x += width;

  })

  // if (vs[0] !== undefined) {
  //   formatter.joinVoices(vs).format(vs, 400);
  //   vs.forEach(v => v.draw(context, stave));
  // }

  // stave.setContext(context).draw();
}

const simplifyMeasures = (acc, measure) => {

  if (acc.length === 0) {
    measure.timeChange = true;
    return [ measure ];
  }

  let lastMeasure = acc[acc.length - 1];

  if (lastMeasure.timeSig !== measure.timeSig) {
    measure.timeChange = true;
  }

  if (lastMeasure.keySig !== measure.keySig) {
    measure.keyChange = true;
  }

  if (lastMeasure.clef !== measure.clef) {
    measure.clefChange = true;
  }

  return [...acc, measure];

}

// const isAccidental = (pitch, key) => !theKeys[key].includes(pitch);