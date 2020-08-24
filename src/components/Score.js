import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { renderScore } from '../music-logic';

class Score extends React.Component {

  componentDidMount() {
    renderScore(this.props.currentNoodle, window.innerWidth, window.innerHeight);
  }

  componentDidUpdate(prevProps, _prevState) {
    if (!(_.isEqual(prevProps.currentNoodle, this.props.currentNoodle))) {
      renderScore(this.props.currentNoodle);
    }
  }

  render() {
    return <div id="score" className="flex" />;
  }

}

const mapStateToProps = ({ currentNoodle }) => {
  return { currentNoodle };
}

export default connect(mapStateToProps)(Score);