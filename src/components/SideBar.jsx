import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideBarSubItem from "./SideBarSubItem";
import { useStateContext } from "../contexts/ContextProvider";
import { CgClose } from "react-icons/cg";
import { FaEraser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";

import { v4 as uuid } from 'uuid';

const SideBar = ({ children }) => {
  const handleActiveSearch = () => {
    setActiveSearch(!activeSearch);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const clearInput = () => {
    setSearchTerm("");
  };

  const handelInputChange = () => {
    setSearchTerm(event.target.value);
  };

  const [activeSearch, setActiveSearch] = useState(true);

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
    isOpen,
    setIsOpen,
  } = useStateContext();
  // const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "350px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      // width: "150px",
      x: "-200%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      // width: "350px",
      x: "10%",
      transition: {
        duration: 0.5,
      },
    },
  };



  function List(props) {
    const { items } = props;
    }
  
  

  return (
    <>
      {/* <div className="bg-green-500/40 mt-24 w-[90%] fixed z-50 h-[80%]"> */}
      <div className="">
        {/* <div className=""> */}
        <motion.div
          animate={{
            width: isOpen ? "85%" : "0px",

            overflow: isOpen ? "" : "hidden",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 15,
            },
          }}
          className=" fixed mt-24 z-50  h-[70%] bg-white text-red dark:bg-[#2C3333]/90 overflow-y-scroll rounded-br-lg "
        >
          {/* ///////////////////////////////////////////// */}
          {/* ////////////////// Search /////////////////// */}
          {/*////////////////////////////////////////////// */}
          <>
            <div
              // className="dark:bg-black/80 bg-green-300/80 text-sky-300 dark:text-sky-500  flex items-center justify-between gap-3  mb-1  text-md  rounded-lg  border-1 border-gray-500  duration-1000 -mt-5"
              className="m-1 dark:bg-black/80 text-2xl   dark:bg-black text-sky-300 dark:text-sky-500  flex items-center justify-between gap-3  mb-1  text-md  rounded-sm   "
              // className=""
              // style={{ zIndex: "1000" }}
              // onClick={handleActiveSearch}
            >
              <div className="ml-3 m-4 text-lg rounded-full bg-black/90 hover:bg-gray-500/60 p-4  dark:text-red-600 ">
                {!mobileMenu ? (
                  // <CgClose className=" text-2xl text-red-800" />
                  // <BsSearch className=" text-2xl text-red-800" />
                  <FaEraser
                    className={
                      searchTerm == "" ? "text-gray-700" : "text-sky-400"
                    }
                    onClick={clearInput}
                  />
                ) : (
                  // <FaSearchLocation className="" />
                  // <MdOutlineTravelExplore className="" />
                  <div onClick={clearInput}>
                    <FaEraser
                      className={
                        searchTerm == "" ? "text-gray-700" : "text-sky-400"
                      }
                      onClick={clearInput}
                    />
                  </div>
                )}
              </div>
              <input
                dir="rtl"
                className="w-full  bg-black bg-sky-300/60 p-2 m-1  text-red-500 dark:text-red-500  flex items-center gap-3  text-2xl border-solid  border-1  border-yellow-700 text-center"
                id="searchTerm"
                name="searchTerm"
                value={searchTerm}
                type="text"
                placeholder="چی برات پیدا کنم ؟"
                onChange={(event) => {
                  // setSearchTerm(event.target.value);
                  handelInputChange();
                  setActiveSearch(true);
                }}
                onClick={handleActiveSearch}
              />
              {/* <RxTextAlignBottom className=" text-2xl text-green-600 dark:text-green-600" /> */}
            </div>

            {/* ///////////////////////////////////////////// */}
            {/* ////////////////// Search /////////////////// */}
            {/*////////////////////////////////////////////// */}

            {/* {activeSearch && ( */}
            <div className="flex-col ">
              {Data.filter((val) => {
                if (searchTerm == "") {
                  // return val.pTitle;
                  return null;
                } else if (
                  val.pTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.eTitle.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              }).map((val) => {
                return (
                  <div className="" key={val.id}>
                    <p className="">
                      <NavLink
                        to={`/${val.eTitle}`}
                        key={val.eTitle}
                        onClick={(event) => {
                          handleDropDown();
                          handleMobileMenu();
                        }}
                        // className="w-full bg-red-400/80 dark:bg-slate-800 text-black dark:green-red-800  text-2xl hover:bg-green-300/10   dark:hover:bg-green-800/70 flex items-center justify-between gap-3 text-md p-2  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-100  rounded-sm border-b-1 border-b-yellow-800 "
                        className=""
                        // className="w-full bg-red-400/80 dark:bg-slate-800 text-black dark:green-red-800  text-2xl hover:bg-green-300/10   dark:hover:bg-green-800/70 flex items-center justify-between gap-3 text-md p-2  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105  rounded-sm border-b-1 border-b-yellow-800 "
                      >
                        {val.flag != null ? val.flag : val.icon}
                        {val.pTitle}
                      </NavLink>
                    </p>
                  </div>
                );
              })}

              {EmbassyAppointmentItem.filter((val) => {
                if (searchTerm == "") {
                  // return val.pName;
                  return null;
                } else if (
                  val.pName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.eName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              }).map((val) => {
                return (
                  <div  className="" key={val.id}>
                    <NavLink
                      to={`/${val.eName}`}
                      key={val.eName}
                      onClick={(event) => {
                        handleDropDown();
                        handleMobileMenu();
                      }}
                      className="flex-1 text-black dark:text-red-500 bg-red-400  hover:bg-green-800/40   dark:hover:bg-green-800/70 flex items-center justify-between gap-3  mb-1  text-2xl p-2  rounded-sm border-b-1 border-b-yellow-800 "
                    >
                      {val.flag != null ? val.flag : val.icon}
                      <span className="capitalize ">{val.pName}</span>
                    </NavLink>
                    {/*                     
                    <p className="bg-gray-800">
                      {val.pName}
                      </p> */}
                  </div>
                );
              })}
            </div>
          </>

          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}

          <section key={uuid()} className="routes">
            {Data.map((route, index) => {
              if (route.subItem) {
                return (
                  <SideBarSubItem
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.eTitle}
                  key={index}
                  className="link"
                  // activeClassName="active"
                >
                  {/* <div className="text-green-500 text-3xl flex">{route.flag?route.flag:route.icon}</div> */}
                  {/* <div className="text-green-500 text-3xl flex">{route.eTitle}</div> */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {/* {route.name} */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
