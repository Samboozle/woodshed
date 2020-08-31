import React, { useEffect, useLayoutEffect } from 'react';
import _ from 'lodash';

import { renderScore } from '../music-logic';


export default props => {
  useEffect(() => { renderScore(props.selectedNoodle, window.innerWidth) });

  return <div id="score" className="" />;
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
//     return <div id="score" className="flex" />;
//   }

// }