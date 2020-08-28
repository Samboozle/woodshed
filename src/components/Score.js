import React from 'react';
import _ from 'lodash';

import { renderScore } from '../music-logic';

export default class Score extends React.Component {

  componentDidMount() {
    renderScore(this.props.selectedNoodle, window.innerWidth);
    console.log(window.innerWidth)
  }

  componentDidUpdate(prevProps, _prevState) {
    if (!(_.isEqual(prevProps.selectedNoodle, this.props.selectedNoodle))) {
      renderScore(this.props.selectedNoodle, window.innerWidth);
    }
  }

  render() {
    return <div id="score" className="flex" />;
  }

}

