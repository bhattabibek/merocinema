import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { RiMovieAiLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
       <div className='bg-black text-white flex px-4 py-5 gap-4'>
         <div className="flex items-center gap-2 text-xl font-bold">
                MERO CINEMA<br/> <RiMovieAiLine />
              </div>
        <div>
<ul>
  <li>COMEDY</li>
   <li>ACTION</li>
    <li>ROMANCE</li>
    <li>HORROR</li>
    <li>SUSPENSE</li>
</ul>
        </div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
       </div>
       <div>
        <h4 className='bg-amber-100 text-center p-3'>Copyright  ©  2025. Mero Cinema</h4>
       </div>
    </>
 
  )
}

export default Footer