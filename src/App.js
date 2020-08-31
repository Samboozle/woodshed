import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Navbar } from './components';
import { NoodleShow, NoodleNew } from './pages';

const App = _ => {
  return(
    <Router>
      <Navbar />
      <div className="container mx-auto h-screen pt-16">
        {/* <NoodleShow /> */}
        <NoodleNew />
      </div>
    </Router>
  );
}

export default App;