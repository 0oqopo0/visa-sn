import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { FaEraser } from "react-icons/fa";
import { EmbassyAppointmentItems, TouristVisaItems } from "../data/dummyData";
import { CgClose } from "react-icons/cg";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";
const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SideBarSubItem = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);

  const handleActiveSearch = () => {
    setActiveSearch(!activeSearch);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const {
    activeMenu,
    activeMenuBTN,
    setActiveMenuBTN,
    setScreenSize,
    screenSize,
    contactClicked,
    setMode,
    clickName,
    pasClickName,
    setMobileMenu,
    mobileMenu,
    // isOpen,
    // setIsOpen,
  } = useStateContext();

  const clearInput = () => {
    setSearchTerm("");
  };

  const [activeSearch, setActiveSearch] = useState(true);

  // console.log("isOpen : " + isOpen);
  return (
    <>
      {/* <div className="flex  bg-green-300/30 w-full text-white m-1" onClick={toggleMenu}> */}
      {/* <div className="flex pr-3 text-lg gap-2  justify-end items-center  border-b-2 border-b-[#395B64]  bg-[#396444]  rounded-r-lg  m-1" onClick={toggleMenu}> */}
      {/* <div className="m-1  w-full  ark:bg-black/80 text-2xl  dark:bg-black/50 text-black dark:text-white  flex items-center justify-between gap-3    text-md  rounded-sm  border-t-1 border-t-gray-500  duration-1000  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] p-3.5" onClick={toggleMenu}> */}
      {/* <div className="m-1  w-full  bg-red-400 text-2xl  dark:bg-black/50 text-black dark:text-white  flex items-center justify-between gap-3  mb-1  text-md  rounded-sm  border-t-1 border-red-500  duration-500  p-3.5" onClick={toggleMenu}> */}
      {/* <div className="flex pr-3 text-lg gap-2  justify-end items-center  border-b-2 border-black  bg-[#18291c]/70 rounded-r-sm duration-1000 text-white p-1.5 md:p-2.5 lg:p-2.5 mr-1 ml-2 mb-0.5" onClick={toggleMenu}> */}
      <div
        className="flex pr-3 text-lg gap-2  justify-end items-center  border-b-2 border-black  bg-[#18291c]/70 rounded-r-sm duration-1000 text-white p-1.5 md:p-2.5 lg:p-2.5 mr-1 mb-0.5"
        onClick={toggleMenu}
      >
        <div className="flex text-xl gap-4  justify-end items-center  w-full  ">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex items-center mr-2 "
              >
                <div className="flex justify-start items-center p-2">
                  {route.pTitle}
                </div>
                <div className="mr-2">
                  {route.flag ? route.flag : route.icon}
                </div>
                {/* {route.pName} */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            {/* <FaAngleDown /> */}
          </motion.div>
        )}
      </div>

      {/* ///////////////////////////////////////////////// */}
      {/* /////////////////// Side Bar  /////////////////// */}
      {/* ///////////////////////////////////////////////// */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subItem.map((subRoute, i) => (
              <motion.div
                variants={menuItemAnimation}
                key={i}
                custom={i}
                onClick={(event) => {
                  // handleDropDown();
                  setIsOpen(false);
                }}
              >
                <div className=" flex  text-xl gap-2   justify-end items-center    text-black pb-0.5  mr-1.5  hover:bg-green-800/40   dark:hover:bg-green-800/70">
                  {/* <NavLink to={subRoute.eName} className=" flex h-full w-full text-xl gap-2  justify-end items-center  rounded-sm  bg-[#060707]/60 dark:bg-[#656e61]/60 text-white p-1.5 md:p-2.5 lg:p-2.5  "> */}
                  <NavLink
                    to={subRoute.eName}
                    className=" flex h-full w-full text-xl gap-2  justify-end items-center  rounded-sm  bg-[#536464] dark:bg-[#152D35]/50 text-green-400 p-1.5 md:p-2.5 lg:p-2.5  "
                  >
                    <motion.div className="dark:text-white text-black  ">
                      {subRoute.pName}
                    </motion.div>
                    <div className="dark:text-white text-black mr-2">
                      {subRoute.flag ? subRoute.flag : subRoute.icon}
                    </div>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </>
  );
};

export default SideBarSubItem;
