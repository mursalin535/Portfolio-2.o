import React from 'react';
import { RandomizedTextEffect } from '../ui/text-randomizer';
import { useNavigate } from 'react-router-dom';

function WebLandingMsg() {

  const navigate=useNavigate();
  function WebLandingBtn() {
    navigate('/mursalin');
  }

  return (
    <div className="px-4 py-10 rounded-md flex flex-col items-center z-50">
      <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl text-center text-white lilita">
        <RandomizedTextEffect text="Wanna browse more about me? Click Here" />
      </h1>

      <button
        className="mt-8 px-8 py-4 text-lg sm:text-xl md:text-2xl bg-cyan-500 text-white font-bold rounded-md hover:bg-cyan-600 transition duration-300 cursor-pointer"
        onClick={WebLandingBtn}
      >
        Here :)
      </button>
    </div>
  );
}

export default WebLandingMsg;
