import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiMovieAiLine } from "react-icons/ri";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md text-white p-4 flex justify-between items-center bg-blue-900 bg-opacity-50"
      style={{ WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center gap-2 text-xl font-bold">
        MERO CINEMA <RiMovieAiLine />
      </div>
      <FaRegUserCircle className="text-2xl" />
    </header>
  );
};

export default Header;
