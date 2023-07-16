import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import { TouristVisaItems } from "../data/dummyData";
import { HiOutlineChevronDoubleDown} from "react-icons/hi2";
import { FiAlignJustify } from "react-icons/fi";

const TouristVisa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
      setIsOpen(true);
  };

  const handleMouseLeave = () => {
      setIsOpen(false);
  };

  const handleClick = () => {
     setIsOpen(!isOpen);
  };

  return (
    <div
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       onClick={handleClick}
    >
      <button className="text-xl font-BMehrBold.ttf flex w-60 justify-between items-center   hover:text-gray-300  hover:bg-black/80 hover:rounded-tl-lg hover:rounded-tr-lg text-black  dark:text-yellow-500 p-4 hover:border-b-1 hover:border-b-yellow-800  hover:bg-sky-800/40 ">
      {/* <button className="text-xl font-BMehrBold.ttf flex w-60 justify-between items-center   hover:text-gray-300  hover:bg-black/80 hover:rounded-tl-lg hover:rounded-tr-lg text-black  dark:text-yellow-500 p-4 hover:border-b-1 hover:border-b-yellow-800  hover:bg-sky-800/40 hover:shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"> */}
      <div className="relative text-2xl rounded-full bg-gray-500/30 hover:bg-gray-500/60 p-3 m-2 dark:text-green-600">
        {isOpen && (
            <HiOutlineChevronDoubleDown className=" text-green-700 text-2xl" />
            )}
            {!isOpen && <FiAlignJustify className=" text-sky-500 text-2xl" />}
      </div>
        {TouristVisaItems.map((item) => (
          <div key={item.eTtle}>
            <p className="flex items-center text-red  text-md  justify-end ">
              {item.pTitle}
            </p>
          </div>
        ))}
      
      </button>
      {isOpen && (
      
        <div className="absolute w-60 backdrop-blur bg-black/50  justify-between items-center  p-2  hover:rounded-bl-lg text-gray-800 dark:black-800  text-sm border-1 border-black rounded-bl-xl rounded-br-xl">
      
          {TouristVisaItems.map((item) => (
            <div key={item.pTitle}>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.eName}`}
                  key={link.eName}
                  className="text-2xl text-white dark:text-black dark:font-bold bg-[#d7dbc5]/40  hover:bg-green-800/40   dark:hover:bg-green-800/70 flex items-center  gap-3  mb-1 mt-1  text-md  justify-between  p-2 transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105  rounded-sm  "
                >
                  {link.flag != null ? link.flag : link.icon}
                  <span className="capitalize " onClick={handleClick}>
                    {link.pName}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TouristVisa;
