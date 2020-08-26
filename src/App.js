import React from 'react';
// import { BrowswerRouter as Router } from 'react-router-dom';

import { Navbar } from './components';
import { NoodleShow } from './pages';

const App = _ => {
  return(
    <>
      <Navbar />
      <NoodleShow />
    </>
  );
}

export default App;