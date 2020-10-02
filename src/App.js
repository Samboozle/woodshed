import React from 'react';
import { BrowserRouter as Router,
  Route 
} from 'react-router-dom';

import { Navbar } from './components';
import { NoodleShow } from './pages';

const App = _ => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto h-screen pt-16 mb-16">
        <Route exact path="/" component={NoodleShow} />
        <Route path="noodles/:id" component={NoodleShow} />
      </div>
    </Router>
  );
}

export default App;
