import React, { useEffect, useState } from 'react';
import { renderScore } from '../music-logic';

export default props => {
  const breakPoints = [1280, 1024, 768, 640, 300, 0];

  const nearestBreakpoint = _ => breakPoints.find(v => v < window.innerWidth);

  const [scale, setScale] = useState(nearestBreakpoint() / 1024);

  const updateScale = _ => {
    let newScale = nearestBreakpoint() / 1024;
    if (scale !== newScale) {
      setScale(nearestBreakpoint() / 1024);
    }
  }

  useEffect(_ => {
    window.addEventListener("resize", updateScale);
    return _ => document.removeEventListener("resize", updateScale);
  });

  useEffect(_ => {
    const score = document.getElementById("score");
    // when state changes, score is stripped and repainted
    while (score.firstChild) { score.removeChild(score.lastChild); }
    renderScore(props.selectedNoodle, scale);
  }, [props.selectedNoodle, scale]);

  return <div id="score" style={{ border: "1px solid black" }} />;
}
