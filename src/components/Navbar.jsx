import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { NavLink } from "react-router-dom";
import { GiSunflower } from "react-icons/gi";
import { RxMoon } from "react-icons/rx";
import UserAccess from "./UserAccess";
import Clock from "./Clock";
import RoundwallClock from "./RoundwallClock";

import { CgProfile } from "react-icons/cg";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { motion as m } from "framer-motion";
import moment from "moment-jalaali";
import UserService from "../service/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

moment.loadPersian({ dialect: "persian-modern" }); // تنظیم زبان به فارسی

const Navbar = () => {
  //--=================================================--//
  //--=============== Define Variables ================--//
  //--=================================================--//
  const {
    currentMode,
    mobileMenu,
    setMobileMenu,
    isOpen,
    setIsOpen,
    isOpenUserAccess,
    setIsOpenUserAccess,
    setActiveMenuBTN,
    setScreenSize,
    screenSize,
    setMode,
  } = useStateContext();

  const handleUserAccess = () => {
    setIsOpenUserAccess(!isOpenUserAccess);
  };

  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const [currentDate, setCurrentDate] = useState(
    moment().format("jYYYY/jM/jD")
  );

  const [isAuthenticated, setIsAuthenticated] = useState(
    UserService.isAuthenticated()
  );

  const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());
  const { profileInfo } = useStateContext();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format("HH:mm:ss"));
      setCurrentDate(moment().format("jYYYY/jM/jD"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = UserService.isAuthenticated();
      const adminStatus = UserService.isAdmin();
      if (authStatus !== isAuthenticated || adminStatus !== isAdmin) {
        setIsAuthenticated(authStatus);
        setIsAdmin(adminStatus);
        console.log(
          "isAuthenticated: " + authStatus + " isAdmin: " + adminStatus
        );
      }
    };

    checkAuth();
    const interval = setInterval(checkAuth, 1000); // چک کردن وضعیت احراز هویت هر ثانیه

    return () => clearInterval(interval); // پاک کردن اینتروال هنگام خروج از کامپوننت
  }, [isAuthenticated, isAdmin]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchgetAllUsers();
    }
  }, [isAuthenticated]);
  const [isgetAllUsers, setgetAllUsers] = useState(
    UserService.isAuthenticated()
  );
  const fetchgetAllUsers = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      const response = await UserService.getAllUsers(token);
      setgetAllUsers(response.ourUsers);
    } catch (error) {
      console.error("Error fetching profile information:", error);
    }
  };

  const handleLogout = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <m.div
            className="custom-ui bg-red-400/40 p-4 rounded shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-xl font-bold mb-4">تأیید خروج</h1>
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
                  onClose();
                }}
              >
                بله، خروج
              </button>
            </div>
          </m.div>
        );
      },
    });
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const [subItem, setSubItem] = useState(false);
  const [activeSearch, setActiveSearch] = useState(true);
  const [touristVisaItems, setTouristVisaItems] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setIsOpen(!isOpen);
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

  // const {
  //   activeMenu,
  //   activeMenuBTN,
  //   setActiveMenuBTN,
  //   setScreenSize,
  //   screenSize,
  //   setMode,
  //   contactClicked,
  // } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 770) {
      setActiveMenuBTN(false);
    } else {
      setActiveMenuBTN(true);
    }
  }, [screenSize]);

  const [searchTerm, setSearchTerm] = useState("");

  const clearInput = () => {
    setSearchTerm("");
  };
  const handelInputChange = () => {
    setSearchTerm(event.target.value);
  };

  const getWidth = () => {
    return isOpen ? "50%" : "0px";
  };
 
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "backInOut" }}
      className="flex fixed w-full font-semibold justify-between items-center bg-[#EEEDDE]/90 dark:bg-[#2C3333]/80 z-30 h-24 border-solid border-b-1 border-black shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
    >
      {/* <div className="flex mb-1 mt-1 mr-1 text-sm text-sky-800 dark:text-sky-500 items-center text-md rounded-br-md rounded-md w-full h-8"> */}
        <Clock />
        {/* <RoundwallClock /> */}
      {/* </div> */}

      <m.div
        className="flex ml-10 p-3 h-full w-full justify-center items-center text-sm md:text-sm lg:text-4xl text-gray-600 dark:text-yellow-600 font-Gabriola"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></m.div>

      <m.div
        animate={{
          width: getWidth(),
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 15,
          },
        }}
        className="fixed right-48 h-24 -top-24 mr-4 mt-24 z-50  text-sm rounded-br-md items-center justify-center justify-items-center"
      >
        {/* {isAuthenticated && isOpen ? (
          <div className="flex text-red-400 w-20 bg-sky-500/20 text-lg h-24 items-center justify-center justify-items-center">
            <CgProfile
              className="text-green-400 text-5xl bg-black/80 p-2 items-center justify-center justify-items-center rounded-full"
              onClick={handleMobileMenu}
            />
          </div>
        ) : isOpen ? (
          <MdOutlineKeyboardDoubleArrowRight
            className="text-5xl w-8 top-24 h-24 bg-red-500/20 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)] items-center justify-center justify-items-center"
            onClick={handleMobileMenu}
          />
        ) : (
          <MdOutlineKeyboardDoubleArrowLeft
            className="text-5xl w-8 top-24 h-24 bg-red-500/20 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)] items-center justify-center justify-items-center"
            onClick={handleMobileMenu}
          />
        )} */}

        {isOpen && isAuthenticated ? (
          <>
            {/* <m.div
animate={{
width: isAuthenticated && isOpen ? "34%" : "-20px ",
transition: {
duration: 0.5,
type: "spring",
damping: 15,
},
}}
className="fixed right-48 text-red-400 -top-20 mr-4 mt-24 z-50 h-[65%] md:h-[70%] lg:h-[70%] text-sm rounded-br-md items-center justify-center justify-items-center"
> */}

            {/* </m.div> */}

            <m.div
              animate={{
                width: isAuthenticated && isOpen ? "39%" : "-20px ",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  damping: 15,
                },
              }}
              className="fixed  h-full right-48 text-red-400 font-BKamran -top-24 mr-4 mt-24 z-50  text-sm rounded-br-md items-center justify-center justify-items-center border-l-1"
            >
              {isAuthenticated && (
                <h1 className="flex  justify-start  mt-4 ml-2">
                  {"WellCome Dear : " + profileInfo.name} <br />
                  {"Role : " + profileInfo.role}
                </h1>
              )}
            </m.div>
          </>
        ) : null}

        {isOpen && isAuthenticated ? (
          <>
            {/* <m.div
animate={{
width: isAuthenticated && isOpen ? "34%" : "-20px ",
transition: {
duration: 0.5,
type: "spring",
damping: 15,
},
}}
className="fixed right-48 text-red-400 -top-20 mr-4 mt-24 z-50 h-[65%] md:h-[70%] lg:h-[70%] text-sm rounded-br-md items-center justify-center justify-items-center"
> */}

            {/* </m.div> */}
          </>
        ) : null}
      </m.div>

      <m.div
        animate={{
          width: getWidth(),
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 15,
          },
        }}
        className="fixed p-3 right-32 h-24 items-center justify-center justify-items-center text-red-400 text-md rounded-br-md"
      ></m.div>
      <div className="border-color flex">
        <div className="z-50 mr-2 p-2">
          <NavLink
            to={`/`}
            className="flex z-50 items-center flex-col text-yellow-500 text-3xl font-Gabriola"
            onClick={(event) => {
              setIsOpen(false);
            }}
          >
            <div className="bg-[url('./Pool/Images/Earth04-64x64.jpg')] ml-50 h-16 w-16 rounded-full justify-center items-center"></div>
          </NavLink>
        </div>
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.75, ease: "backInOut" }}
          className="flex flex-col items-center justify-between justify-items-center w-16 h-24 transition-colors duration-500 bg-[#EEEDDE]/90 dark:bg-[#2C3333]/80 border-solid border-b-1 border-black rounded-sm shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)] py-1 px-1"
        >
          <div className="relative">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="hidden"
              onChange={setMode}
              checked={currentMode === "Dark"}
              onMouseEnter={currentMode === "Dark"}
            />
            <label
              htmlFor="dark"
              className={`cursor-pointer flex items-center justify-center rounded-full ${
                currentMode === "Dark"
                  ? "bg-black text-yellow-500 w-6 h-6 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]"
                  : "bg-gray-300 text-gray-500 w-6 h-6"
              }`}
            >
              <RxMoon className="text-2xl" />
            </label>
          </div>

          <div className="relative mb-2">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="hidden"
              onChange={setMode}
              checked={currentMode === "Light"}
              onMouseEnter={currentMode === "Light"}
            />
            <label
              htmlFor="light"
              className={`cursor-pointer flex items-center justify-center rounded-full ${
                currentMode === "Light"
                  ? "bg-white text-yellow-500 w-6 h-6 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]"
                  : "bg-gray-300 text-gray-500 w-6 h-6"
              }`}
            >
              <GiSunflower className="text-3xl" />
            </label>
          </div>
        </m.div>
      </div>
    </m.div>
  );
};

export default Navbar;
