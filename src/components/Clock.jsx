import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/fa"; // تنظیم تاریخ به فارسی
import jMoment from "moment-jalaali"; // پشتیبانی از تاریخ شمسی
import { motion } from "framer-motion"; // برای انیمیشن‌ها
import { useStateContext } from "../contexts/ContextProvider";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const { currentMode } = useStateContext(); // حالت تم (لایت یا دارک)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
<motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    type: "spring",
    stiffness: 50,
    damping: 10,
    duration: 18,
  }}
  //className={`absolute left-0 flex flex-col items-center justify-center w-full sm:w-1/6 md:w-1/8 lg:w-1/10 h-24 
  //  bg-gradient-to-r ${
  //    currentMode === "Dark"
  //      ? "from-[#EEEDDE]/90 to-[#2C3333]/80" // دارک مود با رنگ غالب تر برای "#2C3333"
  //      : "from-[#2C3333]/80 to-[#EEEDDE]/80" // لایت مود با رنگ غالب تر برای "#EEEDDE"
  //  } 
  //  shadow-lg 
  //  text-${currentMode === "Dark" ? "white" : "gray-800"} 
  //  transition-all duration-300`}
   className={`absolute left-0 flex flex-col items-center justify-center w-full sm:w-1/6 md:w-1/8 lg:w-1/10 h-24  
     text-${currentMode === "Dark" ? "white" : "gray-800"} 
     transition-all duration-300`}
>
  {/* نمایش روز هفته */}
  <div className="flex items-center justify-center text-xs sm:text-sm md:text-base font-bold">
    {jMoment(currentTime).locale("fa").format("dddd")}
  </div>

  {/* نمایش تاریخ شمسی */}
  <div 
  // className="flex items-center justify-center text-xs sm:text-sm md:text-base  text-sky-400 "
  // className={`flex items-center justify-center text-xs sm:text-sm md:text-base  text-sky-400  text-${currentMode === "Dark" ? "white" : "gray-800"} transition-all duration-300`}
  >
    {jMoment(currentTime).locale("fa").format("jYYYY / jMM / jDD")}
  </div>

  {/* نمایش زمان */}
  <div 
  // className={`flex items-center justify-center text-xs sm:text-sm md:text-base  text-sky-400  text-${currentMode === "Dark" ? "white" : "gray-800"} transition-all duration-300`}
  // className="flex items-center justify-center font-DigitalNumbers-Regular text-sm sm:text-sm md:text-base text-green-600"
  >
    {currentTime.format("HH : mm : ss")}
  </div>
</motion.div>

  );
};

export default Clock;
