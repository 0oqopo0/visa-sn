import React from "react";
import { useEffect, useState, useRef } from "react";
import { Header } from "../components";
import { motion as m } from "framer-motion";
import beachVid from "../Pool/Videos/beachVid.mp4";
import sunrise from "../Pool/Videos/sunrise.mp4";
import { Link, NavLink } from "react-router-dom";

// swiper bundle styles
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// swiper core styles
// import "swiper/swiper.min.css";

// modules styles
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
import nature_105936_720p from "../Pool/Videos/nature_105936_720p.mp4";
import Nature_159101 from "../Pool/Videos/Nature_159101.mp4";

// import { v4 as uuid } from "uuid";

import images from "../images";

import { Footer } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { RxFilePlus } from "react-icons/rx";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdWbIncandescent } from "react-icons/md";
import { MdOutlineWbIncandescent } from "react-icons/md";
import { MdWbIridescent } from "react-icons/md";
import { MdOutlineWbIridescent } from "react-icons/md";
import { MdWifiCalling2 } from "react-icons/md";
import { Tooltip, Button } from "@material-tailwind/react";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";
import { v4 as uuid } from "uuid";
const EmbassyAppointment = () => {
  console.log("imagesss : " + images);

  function List(props) {
    const { items } = props;
  }

  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };

  const [searchTerm, setSearchTerm] = useState("");
  const [divceSize, setDivceSize] = useState("");
  //  const [clickName, setClickName] = useState("");
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
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 770) {
      setSscreen(true);
    } else {
      setSscreen(false);
    }
  }, [screenSize]);

  useEffect(() => {
    if (screenSize > 770 && screenSize < 1190) {
      setMscreen(true);
    } else {
      setMscreen(false);
    }
  }, [screenSize]);

  useEffect(() => {
    if (screenSize >= 1190) {
      setLscreen(true);
    } else {
      setLscreen(false);
    }
  }, [screenSize]);

  const [currentIndexFirstSlider, setcurrentIndexFirstSlider] = useState(0);
  const [currentIndexSecSlider, setcurrentIndexSecSlider] = useState(0);
  const [DataLen, setdataLen] = useState(0);
  const [DataTitle, setDataTitle] = useState("");
  const [sScreen, setSscreen] = useState(false);
  const [mScreen, setMscreen] = useState(false);
  const [lScreen, setLscreen] = useState(false);
  const [descrition, setDescription] = useState(false);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const handleDataLen = (len) => {
    setdataLen(len);
  };

  const handleDescription = () => {
    setDescription(!descrition);
  };

  const DataInfo = (len, title) => {
    setdataLen(len);
    setDataTitle(title);
  };

  const prevSlide = () => {
    if (DataTitle == "EmbassyAppointment") {
      const isFirstSlide = currentIndexFirstSlider === 0;
      const newIndex = isFirstSlide ? DataLen - 1 : currentIndexFirstSlider - 1;
      setcurrentIndexFirstSlider(newIndex);
    } else if (DataTitle == "TouristVisa") {
      const isFirstSlide = currentIndexSecSlider === 0;
      const newIndex = isFirstSlide ? DataLen - 1 : currentIndexSecSlider - 1;
      setcurrentIndexSecSlider(newIndex);
    }
  };

  const nextSlide = () => {
    if (DataTitle == "EmbassyAppointment") {
      const isLastSlide = currentIndexFirstSlider === DataLen - 1;
      const newIndex = isLastSlide ? 0 : currentIndexFirstSlider + 1;
      setcurrentIndexFirstSlider(newIndex);
      console.log(" isLastSlide :" + isLastSlide);
      console.log(" newIndex :" + newIndex);
    } else if (DataTitle == "TouristVisa") {
      const isLastSlide = currentIndexSecSlider === DataLen - 1;
      const newIndex = isLastSlide ? 0 : currentIndexSecSlider + 1;
      setcurrentIndexSecSlider(newIndex);
      console.log(" isLastSlide :" + isLastSlide);
      console.log(" newIndex :" + newIndex);
    }
  };

  const goToSlide = (slideIndex) => {
    setcurrentIndexFirstSlider(slideIndex);
  };
  const goToSlideSecSlider = (slideIndex) => {
    setcurrentIndexSecSlider(slideIndex);
  };

  //////////////////////////////////////////////////////
  /////////////////// console.log //////////////////////
  //////////////////////////////////////////////////////

  const subItemLength = Data.map((item) => item.subItem.length);

  useEffect(() => {
    // console.log("carousel.current :"+carousel.current.scrollWidth , carousel.current.offsetWidth);;
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  //|||||||||||||||||||||||||||||||||||||||||||||||||||||
  //||||||||||||||||||||| Return ||||||||||||||||||||||||
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||

  return (
    <m.div
      // initial={{ x: "100%" }}
      //  animate={{ x: "0%" }}
      //  exit={{ opacity: 0 }}
      //  transition={{ duration: 1, ease: "easeInOut" }}
      className="flex-col w-full h-[85%]   justify-center items-start absolute  bg-slate-100 dark:bg-black "
    >
      <div className="mt-24 h-full w-full bg-white dark:bg-[#2C3333]  ">




        {/* //////////////////////////////////////////////// */}
        {/* ///////////////////Section One////////////////// */}
        {/* //////////////////////////////////////////////// */}
        <div>
          
        </div>
        
        <m.div
          // initial={{ x: "100%" }}
          // animate={{ x: "0%" }}
          // exit={{ opacity: 0 }}
          // transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col  mt-20  h-[25%] pl-2 pr-2 pt-2 group bg-white dark:bg-[#2C3333]  "
        >
          {/* <m.div
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="flex flex-col  mt-20  h-[25%] pl-2 pr-2 pt-2 group bg-white dark:bg-[#2C3333]  "
        > */}
          {/*/////////////////////// Video ///////////////////////////// */}

          <m.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full justify-start items-center rounded-md flex flex-col   bg-center bg-cover "
          >
            <video
              className="flex h-full justify-center items-center  w-screen  object-cover  rounded-md "
              // src={Video00}
              src={sunrise}
              // src={Nature_159101}
              autoPlay
              loop
              muted
            >
              {/* <h2 className="z-50 absolute bg-red-600 py-4">در کمترین زمان ممکن</h2> */}
            </video>
            
            {/*/////////////////////// ETitle ///////////////////////////// */}
            <m.h1
              className=" absolute mt-2 md:mt-5 lg:mt-5  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] rounded-md p-2 text-yellow-100 bg-black/20 font-Gabriola  text-3xl md:text-5xl lg:text-5xl"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              >
              Journey to infinity
            </m.h1>

              {/*/////////////////////// PTitle ///////////////////////////// */}

            <div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              //  initial={{x: "100%" }} animate={{x: "0%"}} transition={{duration: 0.75,ease:'easeInOut' }}
              className="flex bg-black/40 absolute w-full mt-16  md:mt-24 lg:mt-24 justify-around h-10 md:h-24 lg:h-24  items-center  text-white  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] "
            >
              <m.div
                // initial={{x: "80%"}} animate={{x: "0%"}} transition={{duration: 0.5,ease:'backInOut' }}
                // initial={{opacity: 0 ,x:"100%"}} animate={{opacity: 1 ,x:"0%"}} exit={{opacity: 0}} transition={{duration: .75,ease:'easeIn' }}
                className="flex justify-center items-center overflow-hidden  w-full"
              >
                <m.h1
                  className="text-1xl flex w-[80%] justify-center items-center text-[#181D31] text-2xl md:text-3xl lg:text-3xl "
                  initial={{ opacity: 0, x: "90%" }}
                  animate={{ opacity: 2.5, x: "0%" }}
                  // exit={{ opacity: 1.5, x: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  {/* {Data[0].subItem[currentIndexFirstSlider].pName} */}
                  سفــر تا بــیکــران
                </m.h1>
              </m.div>

              {/*/////////////////////// Title ///////////////////////////// */}

              {/* <div className="flex justify-center items-center w-[20%]"></div> */}
            </div>
        
          </m.div>

          {/* ////////////////////////////////////////////////////////////////////////////// */}

          {/* ////////////////////////////////////////////////////////////////////////////// */}
        </m.div>



        {/* //////////////////////////////////////////////// */}
        {/* ///////////////////Section  Two //////////////// */}
        {/* //////////////////////////////////////////////// */}
        <m.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: .5, ease: "easeInOut" }}
          // className="flex flex-col  p-2 group bg-white dark:bg-black"
          // className="flex h-screen p-10 bg-[#EEEDDE] rounded-md justify-start text-justify ...  leading-10 text-black font-NotoSans text-xl "
          className="  flex flex-col h-full  justify-between m-2 bg-center duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg text-black  dark:text-white "
        >
          <m.div
            className="  flex flex-col h-full md:h-[50%] lg:h-[50%] justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg text-black  dark:text-white "
            style={{
              // backgroundImage: `url(${Data[0].subItem[1].img})`,
              // backgroundImage: `url(${Data[1].subItem[3].img})`,
            }}

            // initial={{ opacity: 0, y: "10%" }}
            // animate={{ opacity: 1, y: "0%" }}
            // transition={{ duration: 1.5, ease: "easeInOut" }}
            // className="flex flex-col  mt-2 text-xl p-2 group bg-white dark:bg-black  hadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
            // className="w-full h-full justify-start items-center rounded-md flex flex-col   bg-center bg-cover  border-b-1 border-l-1 border-r-1  border-gray-600 "
            // className="flex flex-col  mt-2 text-xl p-2 group bg-white dark:bg-black  hadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
            // className="flex h-screen p-10 bg-[#D4ECDD] rounded-md justify-start text-justify ...  leading-10 text-black font-NotoSans text-xl mr-2 ml-2"
            // className="flex  p-2  bg-white dark:bg-[#76BA99]   justify-start text-justify ...  leading-10 text-black dark:text-white font-NotoSans text-xl "
          >
            <m.p
              initial={{ opacity: 0, y: "30%", x: "0%" }}
              animate={{ opacity: 1, y: "0%", x: "0%" }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
              className=" flex h-full p-5 bg-bg-[#5c7979]/70 dark:bg-[#5c7979]/70 rounded-md justify-start text-justify ...  leading-10 text-black  dark:text-white font-NotoSans text-sm md:text-lg lg:text-lg shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
              // className=" flex h-full p-5 bg-[#FAF0D7]/90 dark:bg-[#5c7979]/70 rounded-md justify-start text-justify ...  leading-10 text-black  dark:text-white font-NotoSans text-sm md:text-lg lg:text-lg shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
              // className=" flex p-5 bg-[#FAF0D7]/80 dark:bg-[#5c7979]/70 rounded-md justify-start text-justify ...  leading-10 text-black  dark:text-white font-NotoSans text-sm md:text-lg lg:text-lg shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
              dir="rtl"
            >
              با سفر کردن میتوانیم از استرس زندگی روزمره دوری کنیم، خلاقیت و
              مهارتهای ارتباطی خود را افزایش دهیم، با فرهنگها و آداب رسوم نو
              آشنا شویم و تجربههای جدید و ماندگاری کسب کنیم. سفر کردن یک تغییر
              پایدار در روح و شیوه زندگی ما ایجاد میکند. سفر کردن چه مزایا و
              فوایدی دارد، با این فواید شگفت انگیز آشنا شوید ... سفر کردن همیشه
              باعث ایجاد انگیزه زندگی و تقویت روحیه و نشاط در انسان می شود. آیا
              هیچ دقت کرده اید وقتی قصد سفر دارید از شب قبل دچار هیجان خاصی می
              شوید؟ سفر کردن نقشی بسیار مهم در کنترل مشکلاتs زندگی، روابط اعضای
              خانواده و رها شدن از یکنواختی در انسان ایجادs می کند.
            </m.p>
          </m.div>
        </m.div>

        {/*/////////////////////// Section Three ////////////////////////// */}
        {/*/////////////////////// Section Three ////////////////////////// */}
        {/*/////////////////////// Section Three ////////////////////////// */}

        {/*/////////////////////// Foter ///////////////////////////// */}
        {/*/////////////////////// Foter ///////////////////////////// */}
        {/*/////////////////////// Foter ///////////////////////////// */}

        {/* <div className="absolute bottom-24 z-1000" style={{ zIndex: "1500" }}> */}
      </div>

      {/* //////////////////////////////////////////////// */}
      {/* ///////////////////Section Five//////////////// */}
      {/* //////////////////////////////////////////////// */}
      <Footer />
    </m.div>
    // </m.div>
  );
};
export default EmbassyAppointment;
