import React, { useEffect, useState } from "react";
import { EmbassyAppointmentDD, TouristVisa, MobileMenu, Contact } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { SiYourtraveldottv } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { IoAppsOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbMenuOrder } from "react-icons/tb";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscMenu } from "react-icons/vsc";
import { EmbassyAppointmentItems, TouristVisaItems } from "../data/dummyData";

import { GiSunflower } from "react-icons/gi";
import { RxMoon } from "react-icons/rx";
import { FaEraser } from "react-icons/fa";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";

import { RxTextAlignBottom, RxTextAlignMiddle } from "react-icons/rx";
import { motion as m} from "framer-motion";



const Navbar = () => {
  //--=================================================--//
  //--=============== Define Variables ================--//
  //--=================================================--//

  const [subItem, setSubItem] = useState(false);
  const [activeSearch, setActiveSearch] = useState(true);
  const [touristVisaItems, setTouristVisaItems] = useState(false);
  // const [mobileMenu, setMobileMenu] = useState(false);
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    setcontactClicked,
    themeSettings,
    setThemeSettings,
    mobileMenu,
    setMobileMenu,
    isOpen,
    setIsOpen
  } = useStateContext();
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setIsOpen(!isOpen);
    // setMobileMenu(true);
  };
  const handleActiveSearch = () => {
    setActiveSearch(!activeSearch);
  };
  const handleDropDown = () => {
    setSubItem(!subItem);
  };
  const handleTouristVisaItems = () => {
    setTouristVisaItems(!touristVisaItems);
  };

  console.log("mobileMenueeeeeeee : " + mobileMenu);

  const {
    activeMenu,
    activeMenuBTN,
    setActiveMenuBTN,
    setScreenSize,
    screenSize,
    contactClicked,
    setMode,

  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 770) {
      setActiveMenuBTN(false);
      // setMobileMenu(false);
    } else {
      setActiveMenuBTN(true);
    }
  }, [screenSize]);

  const [searchTerm, setSearchTerm] = useState('');

  const clearInput = () => {
    setSearchTerm('');
  };
  const handelInputChange = () => {
    setSearchTerm(event.target.value);
  };

  //--=================================================--//
  //--================== console.log ==================--//
  //--=================================================--//
  // console.log("activeMenu :" + activeMenu);
  // console.log("activeMenuBTN :" + activeMenuBTN);
  // console.log("mobileMenu nav:" + mobileMenu);
  // console.log("searchTerm :" + searchTerm);
  // console.log("ActiveSearch :" + activeSearch);

  //--=================================================--//
  //--||||||||||||||||||||| Return ||||||||||||||||||||--//
  //--=================================================--//
  return (
    <m.div
    initial={{y: "100%"}} animate={{y: "0%"}} transition={{duration: 0.75,ease:'backInOut' }}
    
    className="flex fixed w-full justify-between items-center bg-white/90 dark:bg-black/90  px-4  z-30   h-24   border-solid  border-b-1  border-sky-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
      {/* //////////////////////////////////////////// */}
      {/* ////////////// MobileMenu BTN ////////////// */}
      {/*///////////////////////////////////////////// */}
      <div
      initial={{y: "80%"}} animate={{y: "0%"}} transition={{duration: 0.5,ease:'backIn' }}
        onClick={handleMobileMenu}
        onMouseEnter={setMobileMenu}
        // onMouseLeave={setMobileMenu}
        // className="md:hidden  relative text-3xl rounded-full bg-red-400/30  p-2 m-2   shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
        className="relative text-3xl   p-2 m-2  "
      >
        {mobileMenu ? (
          <CgMenuRightAlt className=" text-red-800 " />
        ) : (
          <CgMenu className=" text-sky-800" />
        )}
      </div>

      {/* //////////////////////////////////////////// */}
      {/* //////////////// MobileMenu //////////////// */}
      {/* //////////////////////////////////////////// */}


      {/* ///////////////////////////////////////////////// */}
      {/* ////////////// Search in lg TODO //////////////// */}
      {/*////////////////////////////////////////////////// */}
      <div></div>
      <div></div>

      {/* ///////////////////////////////////////////////// */}
      {/* ////////////// Logo & Them Setting  ///////////// */}
      {/* ///////////////////////////////////////////////// */}
      <div className=" border-color  flex ">
        {/* //////////////////////////////////// */}
        {/* /////////// Theme Mode  //////////// */}
        {/* //////////////////////////////////// */}
        <div className="flex flex-col gap-2">
          <GiSunflower
            className="text-lg  text-yellow-500 dark:text-gray-500  shadow-2xl ...  mt-2 mr-2"
            checked={currentMode === "Dark"}
          />
          <input
            type="radio"
            id="light"
            name="theme"
            value="Light"
            className="cursor-pointer  w-3 h-3 text-gray-500  ml-1"
            onChange={setMode}
            checked={currentMode === "Light"}
          />

          {/* <label className="ml-2 text-md cursor-pointer">Light Mode</label> */}
        </div>

        {/* ////////////////////////////////////// */}
        {/* //////////////// LoGo //////////////// */}
        {/* ////////////////////////////////////// */}
        <div className=" mr-2 p-2">
          <div className="bg-[url('./Pool/Images/Earth04-64x64.jpg')] h-16 w-16 rounded-full justify-center items-center ">
            <NavLink
              to={`/`}
              className="flex items-center  flex-col text-yellow-500 text-3xl font-Gabriola "
              onClick={(event) => {
                // handleDropDown();
                setIsOpen(false);
              }}
            >
               {/* <SiYourtraveldottv  /> */}
              <span className=" absolute font-bold mt-5 text-md">

                Visa - SN
              </span>
            </NavLink>
          </div>
        </div>

        {/* //////////////////////////////////// */}
        {/* /////////// Dark Mode  ///////////// */}
        {/* //////////////////////////////////// */}
        <div className="flex flex-col gap-2">
          <RxMoon className="text-lg  text-gray-500 dark:text-yellow-500 mt-2 " />
          <input
            type="radio"
            id="dark"
            name="theme"
            value="Dark"
            onChange={setMode}
            className="cursor-pointer  w-3 h-3 text-lg text-gray-500 ml-1"
            checked={currentMode === "Dark"}
          />
          {/* <label className="ml-2 text-md cursor-pointer">Dark Mode</label> */}
        </div>
      </div>
    </m.div>
  );
};

export default Navbar;
