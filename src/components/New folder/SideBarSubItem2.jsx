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

  return (
    <>
      {/* <div className="flex  bg-green-300/30 w-full text-white m-1" onClick={toggleMenu}> */}
      <div
        // className="flex p-3 text-2xl gap-2  justify-end items-center font-bold border-b-2 border-b-orange-500/60 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]  transition ease-in-out delay-3  hover:-translate-x-.5 hover:scale-y-105 rounded-md mb-2"
        className=""
        onClick={toggleMenu}
      >
        {/* <div className="m-1  w-full  ark:bg-black/80 text-2xl  dark:bg-black/90 text-black dark:text-white  flex items-center justify-between gap-3  mb-1  text-md  rounded-sm  border-t-1 border-t-gray-500  duration-1000  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]" onClick={toggleMenu}> */}
        {/* //////////////////////////////////////////////////////////// */}

        <div className="flex text-2xl  bg-black/80  mb-1 justify-end items-center font-bold w-full  rounded-md">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex items-center  w-full mr-3 mt-1"
              >
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className=" flex mr-7 mb-2 h-40 w-screen  rounded-md  justify-between  bg-center bg-cover  border-b-1 border-l-1 border-r-1  border-gray-600 duration-700 "
                  // className=" flex h-40 w-[100%]  rounded-md  justify-between  bg-center bg-cover  border-b-1 border-l-1 border-r-1  border-gray-600 duration-700 "
                  style={{
                    backgroundImage: `url(${route.img})`,
                  }}
                >
                  <div className="flex justify-start items-start">
                  </div>
                    <div className="flex  justify-start items-start  text-red-600 ">
                      {route.flag ? route.flag : route.icon}
                    </div>
                    <div className="flex justify-start items-start text-red-700 z-30">
                      {route.eTitle}
                    </div>
                    
                  
                </motion.div>

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
              <motion.div variants={menuItemAnimation} key={i} custom={i}>
                <NavLink
                  to={subRoute.eName}
                  className="w-[98%] flex  p-2 h-40 text-2xl gap-2  justify-end items-center font-bold border-b-2 border-b-gray-800  rounded-tr-lg transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105"
                >
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className=" h-full w-full  rounded-md flex flex-col justify-between  bg-center bg-cover  border-b-1 border-l-1 border-r-1  border-gray-600 duration-700 "
                    style={{
                      backgroundImage: `url(${subRoute.img})`,
                    }}
                  >
                    <motion.div className="dark:text-white text-black  font-semibold ">
                      {subRoute.eName}
                    </motion.div>
                    <div className="dark:text-white text-black mr-2">
                      {subRoute.flag ? subRoute.flag : subRoute.icon}
                    </div>
                  </motion.div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </>
  );
};

export default SideBarSubItem;
