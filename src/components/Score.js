import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import { renderScore } from '../music-logic';


export default props => {
  const [scale, setScale] = useState(Math.min(window.innerWidth / 1000, 1));

  const updateScale = _ => setScale(Math.min(window.innerWidth / 1000, 1));

  useEffect(_ => {
    window.addEventListener("resize", updateScale);
    return _ => document.removeEventListener("resize", updateScale);
  });

  useEffect(_ => {
    const score = document.getElementById("score");
    while (score.firstChild) { score.removeChild(score.lastChild); }
    renderScore(props.selectedNoodle, scale);
  }, [scale]);

  return <div id="score" className="flex" />;
}


// export default class Score extends React.Component {

//   componentDidMount() {
//     renderScore(this.props.selectedNoodle, window.innerWidth);
//   }

//   componentDidUpdate(prevProps, _prevState) {
//     if (!(_.isEqual(prevProps.selectedNoodle, this.props.selectedNoodle))) {
//       renderScore(this.props.selectedNoodle, window.innerWidth);
//     }
//   }
//   render() {
//     return <div id="score" className="" />;
//   }

// }