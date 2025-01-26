import { NavLink } from "react-router-dom";
import {} from "react-icons/fa";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideBarSubItem from "./SideBarSubItem";
import UserService from "../service/UserService";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";

import { CgProfile } from "react-icons/cg";
import { v4 as uuid } from "uuid";
import { motion as m } from "framer-motion";
// //////////////////////////////////////////////////////////
import UserAccess from "./UserAccess";
import moment from "moment-jalaali";
// import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";
// //////////////////////////////////////////////////////////
import { useStateContext } from "../contexts/ContextProvider";
import { confirmAlert } from "react-confirm-alert";
// //////////////////////////////////////////////////////////

import {
  FaBars,
  FaHome,
  FaLock,
  FaMoneyBill,
  FaUser,
  FaSignOutAlt,
  FaUserCog,
  FaEraser,
} from "react-icons/fa";

import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";

import { CgClose } from "react-icons/cg";

// //////////////////////////////////////////////////////////

moment.loadPersian({ dialect: "persian-modern" }); // تنظیم زبان به فارسی

const SideBar = ({ children }) => {
  // /////////////////////////////////////
  const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());
  // /////////////////////////////////////

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
  // console.log("Helloooooooooo :" + pNames + eNames.eNames);

  // ////////////////////////////////////////////////////////

  const handleLogout = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <motion.div
            className=" bg-red-400/40 p-4 rounded shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-xl  mb-4">تأیید خروج</h1>
            <p className="mb-4">
              آیا مطمئن هستید که میخواهید از حساب کاربری خود خارج شوید؟
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
                onClick={onClose}
              >
                خیر
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                onClick={() => {
                  UserService.logout();
                  // toast.success("شما با موفقیت از حساب کاربری خود خارج شدید!");
                  onClose();
                }}
              >
                بله، خروج
              </button>
            </div>
          </motion.div>
        );
      },
    });
  };
  // //////////////////////////////////////////////////////
  const [isAuthenticated, setIsAuthenticated] = useState(
    UserService.isAuthenticated()
  );
  // //////////////////////////////////////////////////////
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = UserService.isAuthenticated();
      const adminStatus = UserService.isAdmin();
      handleLogout;
      if (authStatus !== isAuthenticated || adminStatus !== isAdmin) {
        setIsAuthenticated(authStatus);
        setIsAdmin(adminStatus);
        // console.log(
        //   "isAuthenticated: " + authStatus + " isAdmin: " + adminStatus
        // );
      }
    };

    checkAuth();
    const interval = setInterval(checkAuth, 1000); // چک کردن وضعیت احراز هویت هر ثانیه

    return () => clearInterval(interval); // پاک کردن اینتروال هنگام خروج از کامپوننت
  }, [, isAdmin]);

  // //////////////////////////////////////////////////////
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setIsOpen(!isOpen);
  };
  // /////////////////////////////////////////////////////////

  return (
    <>
      {/* <div className="bg-green-500/40 mt-24 w-[90%] fixed z-50 h-[80%]"> */}
      <div className="">
        {/* <div className=""> */}
        <motion.div
          animate={{
            width: isOpen ? "50%" : "0%",

            // overflow: isOpen ? "" : "hidden",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 15,
            },
          }}
          // className=" fixed mt-24 z-50  h-[65%] md:h-[70%] lg:h-[70%] text-sm bg-[#EEEDDE]/90 dark:bg-[#2C3333]/80 overflow-y-scroll  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] rounded-br-md"
          className="fixed right-0 top-0 mt-24 z-50 h-[65%] md:h-[70%] lg:h-[70%] text-sm bg-[#EEEDDE]/90 dark:bg-[#2C3333]/80 overflow-y-scroll shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] rounded-bl-md"
          // className="fixed right-0 top-0 mt-24 z-50 h-[65%] md:h-[70%] lg:h-[70%] text-sm bg-[#EEEDDE]/90 dark:bg-[#2C3333]/80 overflow-y-scroll shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] rounded-br-md"
          // className=" fixed mt-24 z-50  h-[70%] bg-white text-red dark:bg-[#2C3333]/90 overflow-y-scroll rounded-br-lg "
        >
          {/* ///////////////////////////////////////////// */}
          {/* ////////////////// Search /////////////////// */}
          {/*////////////////////////////////////////////// */}
          <>
            <div
              // className="dark:bg-black/80 bg-green-300/80 text-sky-300 dark:text-sky-500  flex items-center justify-between gap-3  mb-1  text-md  rounded-lg  border-1 border-gray-500  duration-1000 -mt-5"
              // className="flex mb-1 mt-2 mr-1 text-sm  bg-[#18291c]/80 text-sky-800 dark:text-sky-500  items-center justify-between gap-3   text-md  rounded-br-lg rounded-tr-lg "
              className="flex mb-1 mt-1 mr-1  text-sm  bg-[#152D35]/50 text-sky-800 dark:text-sky-500  items-center justify-between text-md  rounded-br-md rounded-tr-md "
              // className=""
              // style={{ zIndex: "1000" }}
              // onClick={handleActiveSearch}
            >
              {/* //////////////////////////////////////////////////////////////////// */}

              {/* ///////////////////////////////////////////// */}

              <div
                animate={{
                  width: isOpen ? "75%" : "0%",

                  // overflow: isOpen ? "" : "hidden",

                  transition: {
                    duration: 5.5,
                    type: "spring",
                    damping: 25,
                  },
                }}
                // className="fixed right-[50%] z-50 ml-4 mt-2 mb-2 mr-2 text-sm rounded-full bg-sky-500/90  hover:bg-gray-500/60 p-3  dark:text-red-600 "
                className={`fixed  z-50 ml-4 mt-2 mb-2 mr-2 text-sm rounded-l-lg hover:bg-gray-500/60 p-1 dark:text-red-600 ${
                  isOpen
                    ? "  bg-green-300/60 right-[50%]"
                    : " bg-red-400/60 right-[0%]"
                }`}
                onClick={(event) => {
                  // setSearchTerm(event.target.value);
                  handleMobileMenu();
                  // setActiveSearch(true);
                }}
              >
                {isAuthenticated && isOpen ? (
                  <>
                    <div className="flex items-center ">
                      <CgProfile className="h-14 w-14 rounded-l-md text-sky-400 text-5xl bg-black/80 p-2 items-center justify-center justify-items-center mr-1" />

                      <MdOutlineKeyboardDoubleArrowRight className="w-8 h-14 text-red-400 text-5xl bg-black/80 p-2 items-center justify-center justify-items-center rounded-md" />
                    </div>
                  </>
                ) : isOpen ? (
                  <MdOutlineKeyboardDoubleArrowRight
                    // className="text-5xl w-8 top-24 h-16 bg-red-500/20 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)] items-center justify-center justify-items-center"
                    className="h-12 w-12 text-red-400 text-5xl bg-black/80 p-1 items-center justify-center justify-items-center "
                  />
                ) : (
                  <MdOutlineKeyboardDoubleArrowLeft
                    className="h-12 w-12 text-green-400 text-5xl bg-black/80 p-1 items-center justify-center justify-items-center "
                    //  className="text-5xl w-8 top-24 h-16 bg-red-500/20 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)] items-center justify-center justify-items-center"
                  />
                )}
              </div>
              {/*////////////////////////////////////////////// */}

              {/* ///////////////////////////////////////////// */}
              <div
                className=" z-50 ml-4 mt-2 mb-2 mr-2 text-sm rounded-full bg-black/90  hover:bg-gray-500/60 p-3  dark:text-red-600 "
                onClick={clearInput}
              >
                <FaEraser
                  className={
                    searchTerm == ""
                      ? "text-gray-700 text-3xl p-1 "
                      : "text-sky-700 text-3xl p-1"
                  }
                  // onClick={clearInput}
                />
              </div>
              <input
                dir="rtl"
                className="w-full  bg-black/80  text-green-500 dark:text-red-500  flex items-center  text-xl md:text-2xl lg:text-2xl border-solid  border-1  border-gray-600 p-2.5 text-center mr-3 rounded-md"
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
                          // handleDropDown();
                          // handleM obileMenu();
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

            {/* ////////////////// <UserAccess/> ///////////////*/}
            {/* ////////////////// <UserAccess/> ///////////////*/}
            {/* ////////////////// <UserAccess/> ///////////////*/}

            <UserAccess />

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
                    val.eName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
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
                            // handleDropDown();
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

          {/* ////////////////////////////////////////////// */}
          {/* /////////////// Side Bar Items /////////////// */}
          {/* ////////////////////////////////////////////// */}

          {/* <section key={uuid()} className="routes"> */}
          <section className="">
            {Data.map((route, index) => {
              if (route.subItem) {
                return (
                  <SideBarSubItem
                  key={route.eTitle}
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
                  key={route.eTitle}
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
          {/* //////////// handleLogout ///////////// */}
          {/* //////////// handleLogout ///////////// */}
          {/* //////////// handleLogout ///////////// */}
          {isAuthenticated && (
            <Link
              to="/"
              onClick={handleLogout}
              className="hover:text-yellow-400"
            >
              <motion.div
                // className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3   dark:text-sky-500 "
                // flex mb-1 mt-1 mr-1  text-sm  bg-[#152D35]/50 text-sky-800 dark:text-sky-500  items-center justify-between text-md  rounded-br-md rounded-tr-md
                // className=" flex mb-1 mt-1 mr-1  text-sm  bg-[#152D35]/50 text-sky-800 dark:text-sky-500  items-center justify-between text-md  rounded-br-md rounded-tr-md"
                // className=" text-lg rounded-md  hover:bg-gray-500/60 p-3   dark:text-green-500 bg-[#152D35]/50"
                // className=" text-lg rounded-md  hover:bg-gray-500/60 p-3   dark:text-green-500 bg-[#152D35]/50"
                // className="    shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] rounded-lg p-2 text-red-800 pr-4 pl-4 bg-black/20   text-lg   hover:bg-gray-500/60  "
                // className="    shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-full p-2 text-red-800 pr-4 pl-4    text-lg  "
                // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md  p-2 bg-red-300/50 text-red-800    text-lg  mx-1"
                // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]     h-24 p-2  text-red-800    text-md  mx-0.25"
                // className="w-full  bg-black/80   text-green-500 dark:text-red-500  flex items-center  text-xl md:text-2xl lg:text-2xl border-solid  border-1  border-gray-600 p-2.5 text-center mr-3 rounded-md"
                className="flex imb-1 mt-1 mr-1 h-24 text-3xl bg-[#152D35]/50 text-red-400  items-center justify-around text-md  rounded-br-md rounded-r-lg "
                // className=" text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3   dark:text-green-500 "
                initial={{ opacity: 0, x: 1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaSignOutAlt className="inline-block text-3xl" />
                <h1>خروج</h1>
              </motion.div>
            </Link>
          )}
          {/* /////////////////////////////// */}
        </motion.div>

        <main>{children}</main>
      </div>

      {/* ////////////////////////////////////////////////// */}

      {/* ////////////////////////////////////////////////// */}
    </>
  );
};

export default SideBar;
