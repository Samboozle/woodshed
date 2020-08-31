import React, { useState } from 'react';
import { Score, EditorTools } from '../components';
import { minuetOne } from '../passages';

// const noodleReducer = (state, action) => {

// }

export default _ => {
  // refactor to useReducer?
  const [noodle, setNoodle] = useState(emptyNoodle);

  return (
    <div id="score-editor" className="w-full h-full space-y-8">
      <div className="flex w-full justify-center">
        <Score selectedNoodle={minuetOne} />
      </div>
      <div className="flex w-full justify-center">
        <EditorTools noodle={noodle} setNoodle={setNoodle} />
      </div>
    </div>
  );
}

const emptyNoodle = {
  measures: [],
  description: "What are you practicing?"
}