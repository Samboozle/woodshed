import React from 'react';
import { connect } from 'react-redux';
import { selectNoodle } from '../actions';

const mapStateToProps = ({ noodles }) => {
  return { noodles };
}

const Navbar = ({ noodles, selectNoodle }) => {

  return(
    <nav className="flex top-0 w-full items-center py-2 px-4 bg-green-600 fixed">
      <div className="flex items-center text-white w-full">
        <span className="text-xl font-semibold px-2">
          <img className="inline h-12 w-12" alt="Shed Icon"
            src="icons/shed-white.png"
          />
          woodshed
        </span>
        { noodles.map(noodle => {
          return (
            <div className="px-2" onClick={_ => selectNoodle(noodle)}>
              <div className="text-white hover:text-gray-400">
                { noodle.title }
              </div>
            </div>
          );
        }) }
        <a href="https://github.com/Samboozle/woodshed"
           target="_blank" rel="noopener noreferrer"
           className="px-2 hover:text-gray-400"
        >
          Repo
        </a>
      </div>
    </nav>
  );
}

export default connect(mapStateToProps, { selectNoodle })(Navbar);
