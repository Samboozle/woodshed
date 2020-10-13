import React from 'react';

export default _ => {

  const vexflow = <a
    href="https://www.vexflow.com"
    target="_blank" rel="noopener noreferrer"
    className="font-semibold text-green-600 hover:text-green-300"
  > VexFlow </a>;

  const me = <a
    href="https://samboozle.github.io"
    target="_blank" rel="noopener noreferrer"
    className="font-semibold text-green-600 hover:text-green-300"
  > me </a>;

  return (
    <div className="mx-10">
      <div className="text-lg font-semibold"> About this page </div>
      This page is a small proof-of-concept build using the { vexflow } music notation library to
      convert JSON descriptions of musical passages into engraved scores.
      VexFlow is typically used to describe the engraving of a given piece of music as its own program,
      but if a piece of music can instead be described in terms of JSON, then generalizing an engraving algorithm
      should be easy enough. However, the author of this particular webzone is stubborn, flighty and opinionated, so
      making peace with such an algorithm is proving as great a challenge for him as the programming itself.
      As such, the algorithm and music-as-data schema used are expected to change should this project be taken further.
      This project is, at present, no more than a self-enrichment exercise for the author (read: { me } :3).
      <br />
      <br />
      <div className="text-lg font-semibold"> Navigation </div>
      Choose one of the provided musical passages from the navigation bar.
      Toggle between a formatted JSON view of the given passage and its companion score
      using the appropriate buttons. Enjoy!
    </div>
  );
}
