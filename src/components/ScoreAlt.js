import React from 'react';
import _ from 'lodash';

import { simpleScore } from '../music-logic';

export default class Score extends React.Component {

  componentDidMount() {
    simpleScore(this.props.selectedNoodle, window.innerWidth, window.innerHeight);
  }

  componentDidUpdate(prevProps, _prevState) {
    if (!(_.isEqual(prevProps.selectedNoodle, this.props.selectedNoodle))) {
      simpleScore(this.props.selectedNoodle, window.innerWidth, window.innerHeight);
    }
  }

  render() {
    return <div id="score" className="flex" />;
  }

}

