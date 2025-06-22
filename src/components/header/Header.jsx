import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiMovieAiLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-2 text-xl font-bold">
        MERO CINEMA <RiMovieAiLine />
      </div>
      <FaRegUserCircle className="text-2xl" />
    </header>
  );
};

export default Header;
