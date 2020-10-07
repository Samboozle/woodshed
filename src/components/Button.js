import React from 'react';

export default ({ text, callback }) => {
  return(
    <button
      onClick={ callback }
      className="bg-white border border-green-600 text-green-600 font-semibold py-2 px-4 rounded hover:bg-green-600 hover:text-white"
    >
      { text }
    </button>
  );
}
