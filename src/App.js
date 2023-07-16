import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SlSettings } from "react-icons/sl";
import { FiSunrise } from "react-icons/fi";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Navbar,
  Footer,
  ThemeSettings,
  Contact,
  SocialMefiaBTN,
  SideBar,
} from "./components";
import {
  Home,
  WhatIsEmbassyAppointment,
  USAEmbassyAppointment,
  EmbassyAppointment,
  TouristVisaPage,
  WhatIsTouristVisa,
  GeneralPage,
} from "./pages";
import "./App.css";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
  PublicCategory,
} from "../src/data/mobileDummyData";

import { useStateContext } from "./contexts/ContextProvider";
import { IoLogoWhatsapp } from "react-icons/io";
import { FcCallback } from "react-icons/fc";
import { MdWifiCalling2 } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { VscCallOutgoing } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { BsArrowBarLeft } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    // Contact,
    setMode,
    themeSettings,
    setThemeSettings,
    mobileMenu,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const [isOpenSocial, setIsOpenSocial, childIsOpen, setchildIsOpen] =
    useState(true);

  const [contact, setContact] = useState(false);
  const handelContact = () => {
    setContact(true);
    setContact(!contact);
  };

  const handleMouseEnter = () => {
    setIsOpenSocial(true);
  };

  const handleMouseLeave = () => {
    setIsOpenSocial(false);
  };

  const handleClick = () => {
    setIsOpenSocial(!isOpenSocial);
  };

  ////////
  ///////////////////////////////////////

  function CallButton(props) {
    const { number, text } = props;
    return (
      <a href={`tel:${number}`} className="call-button">
        {
          // <MdWifiCalling2 dclassName="fixed bottom-5 left-20 z-10 flex text-4xl text-green-400  bg-white/60 dark:bg-black/60  rounded-full p-1 transition ease-in-out delay-3 " />
          // <VscCallOutgoing className="fixed bottom-5 left-20 z-10 flex text-4xl text-green-400  bg-white/60 dark:bg-black/60  rounded-full p-1 transition ease-in-out delay-3 " />
          <FcCallback className="absolute left-[50%] bottom-5 text-5xl rounded-full p-1 bg-green-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse " />
          // <FcCallback className="flex  items-center  justify-center m-1  p-1 gap-2  text-xl text-green-400 rounded-md  bg-white/60 dark:bg-black/60 hover:bg-gray-500/60 dark:green-sky-600 transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105   mb-4" />
        }
      </a>
    );
  }
  ///////////////////////////////////////////////

  console.log("mobileMenu bratan : " + mobileMenu);
  console.log("contact : " + contact);

  return (
    <m.div
      // initial={{x: "100%"}} animate={{x: "0%"}}  transition={{duration: 0.75,ease:'backInOut' }}
      className={currentMode === "Dark" ? "dark" : ""}
    >
      <AnimatePresence>
        <BrowserRouter>
          <div className="flex flex-col">
            {/* ////////////////////////////////////////////// */}
            {/* ////////////////// Settings BTN ////////////// */}
            {/* ////////////////////////////////////////////// */}
            {/* <div className="fixed right-5 bottom-5  " style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className="relative text-2xl rounded-full bg-gray-500/30 hover:bg-gray-500/60 p-3 m-2 dark:text-green-600"
              >
                <SlSettings />
              </button>
            </TooltipComponent>
          </div> */}
            {/* ////////////////////////////////////////////// */}
            {/* //////////////////// Contact BTN //////////// */}
            {/* ////////////////////////////////////////////// */}
            <m.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "0%" }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className={` flex justify-center  items-center fixed w-[45px] h-12 mb-2 right-[0%] bottom-[5%] shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] text-4xl dark:bg-black/80 bg-white/90 '
           ${
             contact
               ? //  ? " text-red-500  rounded-tr-full rounded-br-full "
                 " text-red-500  rounded-tl-full rounded-bl-full "
               : "text-green-600  rounded-tl-full rounded-bl-full "
           }


           
           `}
              style={{ zIndex: "2" }}
              onClick={function (event) {
                handelContact();
              }}
            >
              {contact ? (
                // <BsArrowBarRight className="animate-pulse"/>
                <IoMdArrowDropright className="flex  animate-pulse" />
              ) : (
                // <MdKeyboardDoubleArrowRight className="flex  animate-pulse" />
                // <BsArrowBarLeft className="animate-pulse"/>
                <IoMdArrowDropleft className="flex  animate-pulse" />
                // <MdKeyboardDoubleArrowLeft className="flex  animate-pulse" />
              )}
            </m.div>

            {/* ////////////////////////////////////////////// */}
            {/* ////////////////// Contact /////////////////// */}
            {/* ////////////////////////////////////////////// */}
            {contact ? (
              <m.div
                initial={{ x: "100%" }}
                animate={{ x: "0%", width: "full" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "backInOut" }}
                style={{ zIndex: "1" }}
                className=" flex flex-row fixed  w-full  bottom-[5%] left-0  justify-around h-16  text-xl  items-center  text-white  rounded-tl-sm rounded-tr-sm  z-50  bg-black/80 "
              >
                <div className="flex flex-row  h-16 justify-center items-center  ">
                  <SocialMefiaBTN />
                </div>
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* <m.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "0%" }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className={` flex justify-center  items-center fixed w-[40px] h-12 mb-2 right-[130%] bottom-[5%] shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] text-8xl dark:bg-black/80 bg-white/90 '
           ${
             contact
               ? "left-[0%]  text-red-500  rounded-tr-full rounded-br-full "
               : "right-[130%] text-green-600  rounded-tl-full rounded-bl-full "
           }


           
           `}
              style={{ zIndex: "2" }}
              onClick={function (event) {
                handelContact();
              }}
            >
              {contact ? (
                // <BsArrowBarRight className="animate-pulse"/>
                <IoMdArrowDropright className="flex  animate-pulse" />
              ) : (
                // <BsArrowBarLeft className="animate-pulse"/>
                <IoMdArrowDropleft className="flex  animate-pulse" />
              )}
            </m.div> */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
              </m.div>
            ) : (
              <></>
            )}

            {/* <div className="flex justify-center items-center w-[20%]"></div> */}

            {/* ////////////////////////////////////////////// */}
            {/* ////////////////// Navbar //////////////////// */}
            {/* ////////////////////////////////////////////// */}
            <div className="">
              <Navbar />
            </div>
            {/* ////////////////////////////////////////////// */}
            {/* ////////////////// SideBar //////////////////// */}
            {/* ////////////////////////////////////////////// */}
            <div className="">
              {/* helooooooooooooooooooooo */}
              <SideBar />
            </div>

            {/* ////////////////////////////////////////////// */}
            {/* ////////////////// Routes //////////////////// */}
            {/* ////////////////////////////////////////////// */}
            <div className="dark:bg-main-dark-bg  bg-gray-300 w-full min-h-screen ">
              <div>
                {/* <ThemeSettings /> */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/visa-sn" element={<Home />} />
                  <Route path="/GeneralPage" element={<GeneralPage />} />
                  <Route
                    path="/EmbassyAppointment"
                    element={<EmbassyAppointment />}
                  />
                  <Route
                    path="/WhatIsEmbassyAppointment"
                    element={<WhatIsEmbassyAppointment />}
                  />
                  <Route
                    path="/USAEmbassyAppointment"
                    element={<USAEmbassyAppointment />}
                  />
                  <Route
                    path="/TouristVisaPage"
                    element={<TouristVisaPage />}
                  />
                  <Route
                    path="/WhatIsTouristVisa"
                    element={<WhatIsTouristVisa />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </AnimatePresence>
    </m.div>
  );
};

export default App;
