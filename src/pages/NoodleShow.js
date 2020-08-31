import React from 'react';
import { connect } from 'react-redux';
import { Score } from '../components';

const NoodleShow = props => {
  const { selectedNoodle } = props;

  return(
    <div id="score-display" className="w-full flex justify-center">
      <div>
        <Score selectedNoodle={selectedNoodle} />
        <div> {selectedNoodle.description} </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ selectedNoodle }) => {
  return { selectedNoodle };
}

export default connect(mapStateToProps)(NoodleShow);