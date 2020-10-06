import React, { useState } from 'react';
import { connect } from 'react-redux';

import JSONPretty from 'react-json-pretty';
import { About, Button, Score } from '../components';

const NoodleShow = props => {
  const { selectedNoodle } = props;
  const [ view, setView ] = useState("json");

  const renderNoodle = _ => {
    switch (view) {
      case "json":
        return (
          <div className="w-full">
            <JSONPretty
              data={ selectedNoodle }
              replacer={ (k, v) => k === "description" ? v.slice(0, 60) + "..." : v }
              style={{ fontSize: "0.8rem" }}
            />
          </div>
        );
      case "score":
        return (
          <div>
            <div className="w-full flex justify-center py-2 font-semibold text-lg">
              "{ selectedNoodle.title }" by { selectedNoodle.composer }
            </div>
            <Score selectedNoodle={ selectedNoodle } />
            <div> { selectedNoodle.description } </div>
          </div>
        );
      default:
        return <div> something went wrong </div>
    }
  }

  const objText = "{ ... }"

  return(
    <div id="score-display" className="w-full h-full pt-4 mb-10">
      { selectedNoodle
        ? <div>
            <div className="flex items-center pb-2">
              <Button text="See JSON" onClick={_ => setView("json")} />
              <div className={ "px-3 font-semibold text-green-" + (view === "json" ? "600" : "300") }>
                { objText }
              </div>
              <Button text="See Score" onClick={_ => setView("score")} />
              <span className="px-3">
                <img
                  src={ "icons/music-green" + (view !== "score" ? "-light" : "") + ".png" }
                  className="inline h-20 w-20"
                />
              </span>
            </div>
            {renderNoodle()}
          </div>
        : <About /> }
    </div>
  );
}

const mapStateToProps = ({ selectedNoodle }) => {
  return { selectedNoodle };
}

export default connect(mapStateToProps)(NoodleShow);
