import React from 'react';

import { Footer, Navbar } from './components';
import { NoodleShow } from './pages';

const App = _ => {
  return (
    <>
      <Navbar />
        <div className="container mx-auto h-auto pt-16 pb-10">
          <NoodleShow />
        </div>
      <Footer />
    </>
  );
}

export default App;
