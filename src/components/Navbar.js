import React from 'react';

export default _ => {
  return(
    <nav className="flex top-0 w-full items-center py-2 px-6 bg-green-600 shadow fixed">
      <div className="flex flex-start items-center text-white">
        <span className="font-semibold text-xl">
          <img className="inline h-12 w-12" alt="Shed Icon"
            src="icons/shed-white.png"
          />
          woodshed
        </span>
      </div>
    </nav>
  );
}