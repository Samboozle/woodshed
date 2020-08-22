import Vex from 'vexflow';

const { Beam, Formatter, Renderer, Stave, StaveNote, Voice } = Vex.Flow;

export default (noodle, width, height) => {

  let { measures } = noodle;

  let vexDiv = document.getElementById("score");
  let renderer = new Renderer(vexDiv, Renderer.Backends.CANVAS);
  renderer.resize(width, height);
  let context = renderer.getContext();



  let stave = new Stave(10, 40, 400);
  stave.addClef("treble")
    .addTimeSignature(timeSignature)
    .addKeySignature(keySignature);

  let formatter = new Formatter();

  // let vs = (
  //   voices.length !== 0
  //     ? voices.map(({ notes, numBeats, beatValue }) => {
  //       return new Voice({ num_beats: numBeats, beat_value: beatValue })
  //         .addTickables(notes.map(n => new StaveNote(n)))
  //     })
  // : [])

  measures = measures.reduce(simplifyMeasures, []);
  
  measures.forEach(measure => {


  })

  // if (vs[0] !== undefined) {
  //   formatter.joinVoices(vs).format(vs, 400);
  //   vs.forEach(v => v.draw(context, stave));
  // }

  stave.setContext(context).draw();
}

const simplifyMeasures = (acc, measure) => {

  if (acc.length === 0) {
    return [ measure ];
  }

  let [ lastMeasure, ..._rest ] = acc.reverse();

  if (lastMeasure.)
  


}