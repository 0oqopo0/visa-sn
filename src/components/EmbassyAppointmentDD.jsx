import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { EmbassyAppointmentItems } from "../data/dummyData";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";

import { FiAlignJustify } from "react-icons/fi";

const EmbassyAppointmentDD = () => {
  const [isOpen, setIsOpen, childIsOpen, setchildIsOpen] = useState(false);

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
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* className="relative text-2xl rounded-full bg-gray-500/30 hover:bg-gray-500/60 p-3 m-2 dark:text-green-600" */}
      {/* <button className="flex  w-72  justify-between items-center   hover:text-gray-300  hover:bg-black/80 hover:rounded-tl-lg hover:rounded-tr-lg text-white dark:text-yellow-500 p-7  hover:border-b-1 hover:border-b-yellow-800 "> */}
      <button className="text-xl font-BMehrBold.ttf flex w-60 justify-between items-center text-black  hover:text-gray-300  hover:bg-black/80 hover:rounded-tl-lg hover:rounded-tr-lg  dark:text-yellow-500 p-4  hover:border-b-1 hover:border-b-yellow-800  hover:bg-yellow-800/40  ">
        <div className="relative text-2xl rounded-full bg-gray-500/30 hover:bg-gray-500/60 p-3 m-2 dark:text-green-600">
          {isOpen && (
            <HiOutlineChevronDoubleDown className=" text-green-700 text-2xl" />
          )}
          {!isOpen && <FiAlignJustify className=" text-sky-500 text-2xl" />}
        </div>

        {EmbassyAppointmentItems.map((item) => (
          <div key={item.eTitle}>
            <p className="flex items-center text-red  text-md  justify-end ">
              {item.pTitle}
            </p>
          </div>
        ))}
      </button>

      {isOpen && (
        <div className="absolute w-60 backdrop-blur bg-black/50  justify-between items-center  p-2  hover:rounded-bl-lg text-gray-800 dark:black-800  text-sm border-1 border-black rounded-bl-xl rounded-br-xl">
          {EmbassyAppointmentItems.map((item) => (
            <div key={item.pTitle}>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.eName}`}
                  key={link.eName}
                  className="text-white dark:text-yellow-500 bg-[#d7dbc5]/40  hover:bg-green-800/40   dark:hover:bg-green-800/70 flex items-center  gap-3  mb-1 mt-1  text-md  p-2 transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105  rounded-sm  justify-between text-2xl"
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

export default EmbassyAppointmentDD;
