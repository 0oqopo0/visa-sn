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

import { v4 as uuid } from "uuid";

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

  const subItems = Data.map((item) => item.subItem).flat();
  const pNames = subItems.map((subItem) => subItem.pName);
  const eNames = subItems.map((subItem) => subItem.eName);
  console.log("Helloooooooooo :" + pNames + eNames.eNames);

  return (
    <>
      {/* <div className="bg-green-500/40 mt-24 w-[90%] fixed z-50 h-[80%]"> */}
      <div className="">
        {/* <div className=""> */}
        <motion.div
          animate={{
            width: isOpen ? "80%" : "0px",

            // overflow: isOpen ? "" : "hidden",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 15,
            },
          }}
          className=" fixed mt-24 z-50  h-[65%] md:h-[70%] lg:h-[70%] bg-[#EEEDDE]/70 text-sm dark:bg-[#2C3333]/80 overflow-y-scroll  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
          // className=" fixed mt-24 z-50  h-[70%] bg-white text-red dark:bg-[#2C3333]/90 overflow-y-scroll rounded-br-lg "
        >
          {/* ///////////////////////////////////////////// */}
          {/* ////////////////// Search /////////////////// */}
          {/*////////////////////////////////////////////// */}
          <>
            <div
              // className="dark:bg-black/80 bg-green-300/80 text-sky-300 dark:text-sky-500  flex items-center justify-between gap-3  mb-1  text-md  rounded-lg  border-1 border-gray-500  duration-1000 -mt-5"
              // className="flex mb-1 mt-2 mr-1 text-sm  bg-[#18291c]/80 text-sky-800 dark:text-sky-500  items-center justify-between gap-3   text-md  rounded-br-lg rounded-tr-lg "
              className="flex mb-1 mt-2 mr-1 text-sm  bg-[#152D35]/50 text-sky-800 dark:text-sky-500  items-center justify-between gap-3   text-md  rounded-br-lg rounded-tr-lg "
              // className=""
              // style={{ zIndex: "1000" }}
              // onClick={handleActiveSearch}
            >
              <div className="ml-3 m-4 text-sm rounded-full bg-black/90 hover:bg-gray-500/60 p-2  dark:text-red-600 ">
                {!mobileMenu ? (
                  // <CgClose className=" text-2xl text-red-800" />
                  // <BsSearch className=" text-2xl text-red-800" />
                  <FaEraser
                    className={
                      searchTerm == "" ? "text-gray-700 text-3xl p-1" : "text-sky-400 text-3xl p-1"
                    }
                    onClick={clearInput}
                  />
                ) : (
                  // <FaSearchLocation className="" />
                  // <MdOutlineTravelExplore className="" />
                  <div onClick={clearInput}>
                    <FaEraser
                      className={
                        searchTerm == "" ? "text-gray-700 text-3xl p-1" : "text-sky-400 text-3xl p-1"
                      }
                      onClick={clearInput}
                    />
                  </div>
                )}
              </div>
              <input
                dir="rtl"
                className="w-full  bg-black/80    text-green-500 dark:text-red-500  flex items-center gap-3  text-xl md:text-2xl lg:text-2xl border-solid  border-1  border-gray-600 p-2 text-center mr-3"
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

            {/* //////////////////////////////////////////////////// */}
            {/* ////////////////// Search Result /////////////////// */}
            {/*///////////////////////////////////////////////////// */}

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
                        // className=" text-black dark:text-black bg-green-700/50 dark:bg-[#7fe055]/10  hover:bg-green-800/40   dark:hover:bg-green-800/70 flex items-center justify-between gap-3  mb-1  text-2xl  rounded-sm border-b-1 border-b-yellow-800/40 mr-2 ml-1 p-2 "
                        className=" text-black dark:text-black bg-green-700/50 dark:bg-[#7fe055]/30  hover:bg-green-800/40   dark:hover:bg-green-800/70 flex items-center justify-between gap-3  mb-1  text-xl  rounded-sm border-b-1 border-b-yellow-800/40 mr-2 ml-1 p-2 "

                        // className="w-full bg-red-400/80 dark:bg-slate-800 text-black dark:green-red-800  text-2xl hover:bg-green-300/10   dark:hover:bg-green-800/70 flex items-center justify-between gap-3 text-md p-2  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105  rounded-sm border-b-1 border-b-yellow-800 "
                      >
                        {val.flag != null ? val.flag : val.icon}
                        {val.pTitle}
                      </NavLink>
                    </p>
                  </div>
                );
              })}

              {/* Data.map(item => item.subItem).flat(); */}
              {/* Data.map(item => item.subItem).flat(); */}
            </div>

            {/*////////////////////////////////////////////// */}
            {/*////////////////////////////////////////////// */}
            {/*////////////////////////////////////////////// */}
            {/* Data.map(item => item.subItem).flat().filter(subItem => subItem.eName.includes("second")); */}
            <div className="flex-col ">
              {Data.map((item) => item.subItem)
                .flat()
                .filter((val) => {
                  if (searchTerm == "") {
                    // return val.pTitle;
                    return null;
                  } else if (
                      val.eName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      val.pName.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => {
                  return (
                    <div className="" key={val.id}>
                      <p className="">
                        <NavLink
                          to={`/${val.eName}`}
                          key={val.eName}
                          onClick={(event) => {
                            handleDropDown();
                            handleMobileMenu();
                          }}
                          // className="w-full bg-red-400/80 dark:bg-slate-800 text-black dark:green-red-800  text-2xl hover:bg-green-300/10   dark:hover:bg-green-800/70 flex items-center justify-between gap-3 text-md p-2  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-100  rounded-sm border-b-1 border-b-yellow-800 "
                          // className=" text-black dark:text-yellow-500 bg-green-700/50 dark:bg-green-400/50  hover:bg-green-800/40   dark:hover:bg-green-800/70 flex items-center justify-between gap-3  mb-1  text-2xl  rounded-sm border-b-1 border-b-yellow-800 mr-2 ml-1 p-3 "
                          className=" text-black dark:text-black bg-green-700/50 dark:bg-[#7fe055]/30  hover:bg-green-800/40   dark:hover:bg-green-800/70 flex items-center justify-between gap-3  mb-1  text-xl  rounded-sm border-b-1 border-b-yellow-800/40 mr-2 ml-1 p-2 "
                          // className="w-full bg-red-400/80 dark:bg-slate-800 text-black dark:green-red-800  text-2xl hover:bg-green-300/10   dark:hover:bg-green-800/70 flex items-center justify-between gap-3 text-md p-2  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105  rounded-sm border-b-1 border-b-yellow-800 "
                        >
                          {val.flag != null ? val.flag : val.icon}
                          {val.pName}
                        </NavLink>
                      </p>
                    </div>
                  );
                })}

              {/* Data.map(item => item.subItem).flat(); */}
              {/* Data.map(item => item.subItem).flat(); */}
            </div>
          </>

          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}

          {/* <section key={uuid()} className="routes"> */}
          <section className="routes">
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
