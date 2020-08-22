import React from 'react';

export default _ => {
  return(
    <nav className="flex top-0 w-full items-center p-2 bg-green-600 shadow">
      <div className="flex items-center text-white">
        <span className="font-semibold text-xl">
          <img className="inline h-12 w-12" alt="Shed Icon"
            src="shed-white.png"
          />
          woodshed
        </span>
      </div>

    </nav>
  );
}