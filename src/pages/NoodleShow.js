import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import JSONPretty from 'react-json-pretty';
import { About, Button, Score } from '../components';

const NoodleShow = props => {
  const { selectedNoodle } = props;
  const [ view, setView ] = useState("json");
  const [ yPos, setYPos ] = useState(window.pageYOffset);

  const updateYPos = _ => { setYPos(window.pageYOffset); }

  useEffect(_ => {
    window.addEventListener("scroll", updateYPos);
    return _ => document.removeEventListener("scroll", updateYPos);
  }, [yPos, setYPos])

  const renderNoodle = _ => {
    switch (view) {
      case "json":
        return (
          <div className="w-full">
            <JSONPretty
              data={ selectedNoodle }
              replacer={ (k, v) => k === "description" ? v.slice(0, 20) + "..." : v }
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
        return <div> something went wrong </div>;
    }
  }

  return(
    <div id="score-display" className="w-full h-full pt-4 mb-10">
      { selectedNoodle
        ? <div>
            <div className="flex items-center pb-2">
              <Button text="See JSON" callback={_ => setView("json")} />
              <div className={ "px-3 font-semibold text-green-" + (view === "json" ? "600" : "300") }>
                { `{ ... }` }
              </div>
              <Button text="See Score" callback={_ => setView("score")} />
              <span className="px-3">
                <img
                  src={ "icons/music-green" + (view !== "score" ? "-light" : "") + ".png" }
                  className="inline h-20 w-20"
                  alt=""
                />
              </span>
            </div>
            { renderNoodle() }
          </div>
        : <About /> }
        { yPos > 240 &&
          <div className="bottom-0 right-0 mb-16 mr-16 fixed">
            <Button text="Back to Top" callback={_ => window.scrollTo(0, 0)} />
          </div> }
    </div>
  );
}

const mapStateToProps = ({ selectedNoodle }) => {
  return { selectedNoodle };
}

export default connect(mapStateToProps)(NoodleShow);
