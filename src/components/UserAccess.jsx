import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CgMenu, CgMenuRightAlt } from "react-icons/cg";
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

import { useStateContext } from "../contexts/ContextProvider";
import moment from "moment-jalaali";
import UserService from "../service/UserService";
import LoginPage from "../auth/LoginPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // استایلهای پیشفرض
import { confirmAlert } from "react-confirm-alert";
// //////////////////////////////////////////////////////////
import { AiOutlineLogin } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { MdOutlineAppRegistration } from "react-icons/md";
import {
  Navbar,
  Footer,
  ThemeSettings,
  Contact,
  SocialMediaBTN,
  SideBar,
} from "../components";
// //////////////////////////////////////////////////////////
const UserAccess = (
  {
    // isAuthenticated,
    // isAdmin,
    // handleLogout,
    // handleMobileMenu,
    // mobileMenu,
  }
) => {
  //--=================================================--//
  //--=============== Define Variables ================--//
  //--=================================================--//
  
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
    setIsOpen,
    isOpenUserAccess,
    setIsOpenUserAccess

  } = useStateContext();

  const handleUserAccess = () => {
     setMobileMenu(!mobileMenu);
    setIsOpenUserAccess(!isOpenUserAccess);
    // setIsOpen(!isOpen)
    
  };
 
 
 
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const [currentDate, setCurrentDate] = useState(
    moment().format("jYYYY/jM/jD")
  );

  const [isAuthenticated, setIsAuthenticated] = useState(
    UserService.isAuthenticated()
  );
  // ///////////////////////
  const [isgetAllUsers, setgetAllUsers] = useState(
    UserService.isAuthenticated()
  );
  // ///////////////////////
  const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());
  const [profileInfo, setProfileInfo] = useState({});

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
          <motion.div
            className="bg-red-400/40 p-4 rounded shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]"
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
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 "
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

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };
  // //////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////

  const [subItem, setSubItem] = useState(false);
  const [activeSearch, setActiveSearch] = useState(true);
  const [touristVisaItems, setTouristVisaItems] = useState(false);
  // const [mobileMenu, setMobileMenu] = useState(false);

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

  // console.log("mobileMenueeeeeeee : " + mobileMenu);

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

  const [searchTerm, setSearchTerm] = useState("");

  const clearInput = () => {
    setSearchTerm("");
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

  return (
    <>
      {/*////////////// <h1>پروفایل</h1> /////////*/}
      {/*////////////// <h1>پروفایل</h1> /////////*/}
      {/*////////////// <h1>پروفایل</h1> /////////*/}
      {isAuthenticated && (
        <Link
          to="/profile"
          onClick={(event) => {
            // handleDropDown();
            setIsOpen(false);
          }}
          // className="hover:text-yellow-400"
        >
          <motion.div
            // className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3   dark:text-sky-500 "
            // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md h-24 p-2  text-sky-800    text-lg mx-1"
                    // className="flex pr-3 text-lg gap-2  justify-end items-center  border-b-2 border-black  bg-[#18291c]/70 rounded-r-sm duration-1000 text-white p-1.5 md:p-2.5 lg:p-2.5 mr-1 mb-0.5"
            // className="  flex  font-bold font-BMehrBold.ttf text-lg items-center justify-center rounded-l-lg p-1 mb-1 bg-[#152D35]/50 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]  h-24  text-green-800 "
            className="  flex  text-3xl items-center  justify-center rounded-l-lg p-1 mb-1 bg-[#152D35]/50 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]  h-24  text-green-800 "
            initial={{ opacity: 0, x: -450 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaUser className="inline-block mr-2 text-3xl" />
            {/* پروفایل */}
            <h1>پروفایل</h1>
          </motion.div>
        </Link>
      )}


      {/* /////////////////////////////// */}
      {/*///// <h1>مدیریت کاربران</h1> /////*/}
      {/* /////////////////////////////// */}
      {isAdmin && (
        <Link
          to="/admin/user-management"
          onClick={(event) => {
            // handleDropDown();
            
            setIsOpen(false);
          }}
          // className="hover:text-yellow-400"
        >
          <motion.div
            // className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3   dark:text-sky-500 "
            // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md h-24 p-2  text-sky-800    text-lg  mx-1"
            // className="  flex items-center justify-center  bg-[#536464] dark:bg-[#152D35]/50 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-r-md h-24  text-green-800    text-lg  mx-0.25"
           className="  flex  items-center  text-3xl  justify-center rounded-l-lg p-1 mb-1 bg-[#152D35]/50 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]  h-24  text-green-800 "
            initial={{ opacity: 0, x: -750 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaUserCog className="inline-block mr-inline-block mr-2 text-3xl" />
            {/* مدیریت کاربران */}

            <h1>مدیریت کاربران</h1>
          </motion.div>
        </Link>
      )}


   {/* milad@milad */}
      {/* //////////// handleLogout ///////////// */}
      {/* //////////// handleLogout ///////////// */}
      {/* //////////// handleLogout ///////////// */}
       {/* {isAuthenticated && (
        <Link to="/" onClick={handleLogout} className="hover:text-yellow-400">
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
            className="flex imb-1 mt-1 mr-1 h-24  text-sm  bg-[#152D35]/50 text-sky-800 dark:text-sky-500  items-center justify-around text-md  rounded-br-md rounded-r-lg "
            // className=" text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3   dark:text-green-500 "
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaSignOutAlt className="inline-block text-md " />
            <h1>خروج</h1>
          </motion.div>
        </Link>
      )}  */}
      {/* ///////////////////////////// */}
      {/* //////// Registration  ////// */}
      {/* ///////////////////////////// */}
      {/* ////////////////////////////////////// */}
      {/* ///// LogIn && Registration BTN ///// */}
      {/* ////////////////////////////////////// */}

      {!isAuthenticated && (
        <>
          <motion.div
            // className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3   dark:text-red-500 "
            // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md h-24 p-2  text-green-800    text-lg  mx-1"
            // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md  p-2  text-green-800    text-lg  mx-1  hover:bg-gray-500/60 ml-4 mt-2 mb-2 mr-2 "
            // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md h-24 p-2  text-green-800    text-lg  mx-1"
            initial={{ opacity: 0, x: -1250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Link
              to="/Registration"
              onClick={(event) => {
                // handleDropDown();
                setIsOpen(false);
              }}
              // className="hover:text-yellow-400"
              // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md h-24 p-2  text-green-800    text-lg  mx-1"
              // className="  flex items-center justify-center  bg-[#536464] dark:bg-[#152D35]/50 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-r-md h-24 p-2  text-green-800    text-lg  "
             className="  flex  text-3xl items-center justify-center rounded-l-lg p-1 mb-1 bg-[#152D35]/50 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]  h-24  text-green-800 "
            >
              {/* <FaUserCog className="inline-block mr-2 text-3xl" /> */}
              <MdOutlineAppRegistration className="inline-block mr-2 text-3xl" />
              {/* ثبت نام */}
              <h1>ثبت نام</h1>
            </Link>
          </motion.div>
          {/* ///////////////////////////// */}
          {/* //////////// Login  ///////// */}
          {/* ///////////////////////////// */}
          <motion.div
            // className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3   dark:text-sky-500 "
            // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md  p-2  text-green-800    text-lg  mx-1  hover:bg-gray-500/60 ml-4 mt-2 mb-2 mr-2 "
            // className="  flex items-center justify-center  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md h-24 p-2  text-green-800    text-lg  mx-1"
            initial={{ opacity: 0, x: -850 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/Login"
              onClick={(event) => {
                // handleDropDown();
                setIsOpen(false);
              }}
              // className="  flex items-center justify-center  bg-[#536464] dark:bg-[#152D35]/50 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]    rounded-md h-24 p-2  text-green-800    text-lg  mx-1"
              // className="  flex h-full w-full text-xl gap-2  justify-end items-center  rounded-sm  bg-[#536464] dark:bg-[#152D35]/50 text-green-400 p-1.5 md:p-2.5 lg:p-2.5  "
              className="flex text-3xl items-center justify-center rounded-l-lg p-1 mb-1 bg-[#152D35]/50 shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]  h-24  text-green-800 "
            >
              {/* <AiOutlineLogin className="inline-block mr-2 text-3xl" /> */}
              {/* <FaUserCog className="inline-block mr-2 text-3xl" /> */}
              <CiLogin className="inline-block mr-2 text-3xl" />
              <h1>ورود</h1>
            </Link>



          </motion.div>
        </>
      )}
              
    </>
  );
};

export default UserAccess;
