import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { EmbassyAppointmentItems } from "../data/dummyData";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import { SlCallOut } from "react-icons/sl";
import { TbPhoneCall } from "react-icons/tb";
import { MdWifiCalling3 } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FcCallback } from "react-icons/fc";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";
import { FiAlignJustify } from "react-icons/fi";

const Contact = () => {
  const [isOpen, setIsOpen, childIsOpen, setchildIsOpen] = useState(true);

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
      //  onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* className="relative text-2xl rounded-full bg-gray-500/30 hover:bg-gray-500/60 p-3 m-2 dark:text-green-600" */}
      {/* <button className="flex  w-72  justify-between items-center   hover:text-gray-300  hover:bg-black/80 hover:rounded-tl-lg hover:rounded-tr-lg text-white dark:text-yellow-500 p-7  hover:border-b-1 hover:border-b-yellow-800 "> */}
      {/* <button className="flex flex-col w-60 justify-between items-center  text-green-500  hover:text-red-300  hover:bg-green-400/30 hover:rounded-tl-3xlg hover:rounded-tr-full hover:rounded-br-full  dark:text-yellow-500  hover:border-b-1 hover:border-b-yellow-800 "> */}

      {/* </button> */}

      {/* ////////////////////////////////////// */}
      {/* ////////////// Contct BTN //////////// */}
      {/* ////////////////////////////////////// */}

      <div className="flex-col text-lg  items-center  rounded-3xl   dark:text-yellow-600 bg-red-700">
        {isOpen && (
          <>
            {/* ////////////////////////////////////// */}
            {/* ////////////// Social Media ////////// */}
            {/* ////////////////////////////////////// */}

            <div className=" flex flex-col  ">
              <a
                href="http://www.twitter.com"
                target="_blank"
                className="flex  items-center  justify-en mr-1 ml-1 gap-2  text-md rounded-tr-full rounded-tl-full rounded-br-full mb-1   bg-white/30 dark:bg-white/10 hover:bg-gray-500/60 p-1  dark:text-yellow-600 transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105  "
              >
                <a href="http://www.youtube.com" target="_blank">
                  <ImYoutube />
                </a>
                {/* <p>Email</p> */}
              </a>

              <a
                href="http://www.twitter.com"
                target="_blank"
                className="flex  items-center justify-en  mr-1 ml-1 gap-2 text-md rounded-tr-full rounded-tl-full rounded-br-full mb-1   bg-white/30 dark:bg-white/10 hover:bg-gray-500/60 p-1  dark:text-yellow-600  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105 "
              >
                <a href="http://www.instagram.com" target="_blank">
                  <ImInstagram />
                </a>
                {/* <p>instagram</p> */}
              </a>

              <a
                href="http://www.twitter.com"
                target="_blank"
                className="flex  items-center justify-en  mr-1 ml-1 gap-2 text-md rounded-tr-full rounded-tl-full rounded-br-full mb-1   bg-white/30 dark:bg-white/10 hover:bg-gray-500/60 p-1  dark:text-yellow-600  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105 "
              >
                <a href="http://www.twitter.com" target="_blank">
                  <IoLogoWhatsapp />
                </a>
                {/* <p>WhatsApp</p> */}
              </a>
              <a
                href="http://www.twitter.com"
                target="_blank"
                className="flex  items-center justify-en  mr-1 ml-1 gap-2 text-md rounded-tr-full rounded-tl-full rounded-br-full mb-1   bg-white/30 dark:bg-white/10 hover:bg-gray-500/60 p-1  dark:text-yellow-600  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105 "
              >
                <a href="http://www.twitter.com" target="_blank">
                  <IoLogoWhatsapp />
                </a>
                {/* <p>Call</p> */}
              </a>
            </div>
          </>
        )}
      </div>
      <div>
        {!isOpen && (
            <div className="flex items-center gap-2  p-2 rounded-full">
              <FcCallback className="flex text-red-800 text-3xl border-2 border-green-600 rounded-full p-1 transition ease-in-out delay-3  " />
              <p className="flex items-center gap-2 "> مشاوره رایگان</p>
            </div>
        )}

        {isOpen && (
        <div className="flex items-center gap-2 p-2 rounded-full">
          <FcCallback className="flex text-green-800 text-4xl border-2  border-green-600 rounded-full p-1 transition ease-in-out delay-3  " />
          <p className="flex  items-center gap-2 "> مشاوره رایگان</p>
        </div>

        )}



      </div>
    </div>
  );
};

export default Contact;
