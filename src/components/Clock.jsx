
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/fa"; // برای فارسی
import jMoment from "moment-jalaali";
import { motion } from "framer-motion";
import { useStateContext } from "../contexts/ContextProvider";
import UserService from "../service/UserService";
const RoundwallClock = ({}) => {
    const [currentTime, setCurrentTime] = useState(moment());
    const { profileInfo } = useStateContext();
    
  const [isAuthenticated, setIsAuthenticated] = useState(
    UserService.isAuthenticated()
  );
    // /////////////////////////////////////
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
// /////////////////////////////////////
useEffect(() => {
const interval = setInterval(() => {
setCurrentTime(moment());
}, 1000);
return () => clearInterval(interval);
}, []);

const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setIsOpen(!isOpen);
    // setMobileMenu(true);
  };
//   /////////////////////////////////
return (
<motion.div
initial={{ opacity: 0, x: 850 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 2 }}
// className="fixed col left-0 dark:bg-[#323331] flex-col items-center w-[20%] font-semibold justify-center h-24 text-sky-700 text-lg rounded-r-md shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]"
className="fixed col left-0 flex-col items-left justify-items-start w-[20%] font-semibold  h-24 text-sky-700 text-lg rounded-r-md ] hover:shadow-[inset_0_5px_26px_rgba(8,_112,_184,_0.7)]"
onClick={(event) => {
    // handleDropDown();
    // setIsOpen(false);
    
     handleMobileMenu();
  }}
  onMouseEnter={handleMobileMenu}
>
<div className="flex items-center text-xl justify-center font-B Farnaz text-white">
{jMoment(currentTime).locale("fa").format("dddd")}
</div>

<div className="flex items-center  text-xl justify-center text-red-600 ">
{jMoment(currentTime).locale("fa").format(" jYYYY / jMM / jDD ")}
</div>

<div className="flex items-center font-DigitalNumbers-Regular justify-center text-red-500 text-sm">
{currentTime.format("HH : mm : ss")}
</div>

{/* {isAuthenticated && (
<div className="flex items-center justify-center text-red-500 text-sm pb-6">
WellCome : {profileInfo.name} Role : {profileInfo.role}
</div>
)} */}
</motion.div>
);
};

export default RoundwallClock;
