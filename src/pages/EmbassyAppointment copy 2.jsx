import React from "react";
import { useEffect, useState } from "react";
import { Header } from "../components";
import { motion as m } from "framer-motion";
import beachVid from "../Pool/Videos/beachVid.mp4";

import { Link, NavLink } from "react-router-dom";

// swiper bundle styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import nature_105936_720p from "../Pool/Videos/nature_105936_720p.mp4";
import Nature_159101 from "../Pool/Videos/Nature_159101.mp4";

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

const EmbassyAppointment = () => {
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

  //|||||||||||||||||||||||||||||||||||||||||||||||||||||
  //||||||||||||||||||||| Return ||||||||||||||||||||||||
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||

  return (
    <div className="mt-24 h-screen w-full ">
      {/* <div className="h-24 w-full bg-black">
    </div> */}
      <m.div
        initial={{ y: "50%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        // className="flex mt-24 ml-5 mr-5  bg-yellow-400 rounded-3xl justify-center items-center  p-9 ">
        className="h-full"
      >
        {/* //////////////////////////////////////////////// */}
        {/* ///////////////////Section One////////////////// */}
        {/* //////////////////////////////////////////////// */}
        <m.div
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="flex flex-col  mt-20  h-[20%] p-2 group bg-white dark:bg-black  "
        >
          {/*/////////////////////// Video ///////////////////////////// */}

          <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full justify-start items-center rounded-md flex flex-col   bg-center bg-cover  border-b-1 border-l-1 border-r-1  border-gray-600 "
          >
            <video
              className="flex h-full justify-center items-center  w-screen  object-cover rounded-bl-sm rounded-md "
              // src={Video00}
              src={beachVid}
              // src={Nature_159101}
              autoPlay
              loop
              muted
            >
              {/* <h2 className="z-50 absolute bg-red-600 py-4">در کمترین زمان ممکن</h2> */}
            </video>
            <m.h1
              className=" absolute mt-5  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] rounded-md p-2 text-yellow-100 bg-black/20 font-Gabriola  text-5xl"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Journey to infinity
            </m.h1>

            {/*/////////////////////// Title ///////////////////////////// */}

            <div
              //  initial={{x: "100%" }} animate={{x: "0%"}} transition={{duration: 1.5,ease:'easeInOut' }}
              // initial={{x: "100%" }} animate={{x: "0%"}} transition={{duration: 0.75,ease:'easeInOut' }}
              className="flex absolute w-full mt-28 justify-around h-24   text-xl  items-center  text-white  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] "
            >
              <m.div
                // initial={{x: "80%"}} animate={{x: "0%"}} transition={{duration: 0.5,ease:'backInOut' }}
                // initial={{opacity: 0 ,x:"100%"}} animate={{opacity: 1 ,x:"0%"}} exit={{opacity: 0}} transition={{duration: .75,ease:'easeIn' }}
                className="flex justify-center items-center overflow-hidden  w-full"
              >
                <m.h1
                  className="text-1xl flex w-[80%] justify-center items-center text-black  "
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  exit={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
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
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="flex flex-col  p-2 group bg-white dark:bg-red-200  "
        >
          <m.div
            initial={{ opacity: 0, y: "30%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            // className="flex flex-col  mt-2 text-xl p-2 group bg-white dark:bg-black  hadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
            // className="w-full h-full justify-start items-center rounded-md flex flex-col   bg-center bg-cover  border-b-1 border-l-1 border-r-1  border-gray-600 "
            // className="flex flex-col  mt-2 text-xl p-2 group bg-white dark:bg-black  hadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
          >
            <p
              className="flex  p-10 bg-[#E5E5CB] rounded-md justify-start text-justify ...  leading-10 text-black"
              dir="rtl"
            >
              با سفر کردن میتوانیم از استرس زندگی روزمره دوری کنیم، خلاقیت و
              مهارتهای ارتباطی خود را افزایش دهیم، با فرهنگها و آداب رسوم نو
              آشنا شویم و تجربههای جدید و ماندگاری کسب کنیم. سفر کردن یک تغییر
              پایدار در روح و شیوه زندگی ما ایجاد میکند. سفر کردن چه مزایا و
              فوایدی دارد، با این فواید شگفت انگیز آشنا شوید ... سفر کردن همیشه
              باعث ایجاد انگیزه زندگی و تقویت روحیه و نشاط در انسان می شود. آیا
              هیچ دقت کرده اید وقتی قصد سفر دارید از شب قبل دچار هیجان خاصی می
              شوید؟ سفر کردن نقشی بسیار مهم در کنترل مشکلات زندگی، روابط اعضای
              خانواده و رها شدن از یکنواختی در انسان ایجاد می کند.
            </p>
          </m.div>
        </m.div>
        {/* ////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////// Section Three //////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////// */}


        {/* //////////////////////////////////////////////// */}
        {/* ///////////////////Section Four////////////////// */}
        {/* //////////////////////////////////////////////// */}
        <m.div
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="flex flex-col h-full  py-5 pb-5 px-6  group bg-white dark:bg-black  rounded-lg"
        >
          {/* <div className=" h-screen m-auto mt-8 py-16  relative group bg-white dark:bg-black "> */}

          {/*/////////////////////// Image ///////////////////////////// */}
          {/*/////////////////////// Image ///////////////////////////// */}
          {/*/////////////////////// Image ///////////////////////////// */}
          <div
            className=" h-full  flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"
            style={{
              backgroundImage: `url(${Data[0].subItem[currentIndexFirstSlider].img})`,
            }}
          >
            <NavLink
              to={`/${Data[0].subItem[currentIndexFirstSlider].eName}`}
              key={Data[0].subItem[currentIndexFirstSlider].eName}
              // className={"flex flex-col justify-between"}
              className=" h-full flex flex-col justify-between  bg-center bg-cover duration-500 border-b-1 border-l-1 border-r-1  border-gray-600 rounded-lg mt-10"
            >
              <div className=" flex justify-around h-24  text-xl  items-center  text-white   border-1 border-gray-600 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
                <div className="flex  justify-center items-center w-[20%]">
                  {Data[0].subItem[currentIndexFirstSlider].flag != null
                    ? Data[0].subItem[currentIndexFirstSlider].flag
                    : Data[0].subItem[currentIndexFirstSlider].icon}
                </div>

                <div className="flex  justify-center items-center w-[60%]   text-black  text-xl   rounded-lg">
                  {Data[0].subItem[currentIndexFirstSlider].pName}
                </div>
                <div className="flex justify-center items-center w-[20%]"></div>
              </div>

              {/*/////////////////////// Description ///////////////////////////// */}
              <div
                className={
                  descrition
                    ? " flex-col justify-around h-56  items-center text-md text-justify ... dark:text-sky-500 text-black   shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] dark:bg-black/80 bg-white/60 leading-6"
                    : "hidden"
                }
              >
                <div className="flex justify-center items-center pr-2 pl-2 pt-2 text-center">
                  {Data[0].subItem[currentIndexFirstSlider].Description}
                </div>
              </div>
            </NavLink>
          </div>
          {/*/////////////////////// Image ///////////////////////////// */}

          {/*/////////////////////// Arrow BTN ///////////////////////////// */}
          {/*/////////////////////// Arrow BTN ///////////////////////////// */}
          {/*/////////////////////// Arrow BTN ///////////////////////////// */}
          {/* Left Arrow */}
          <div
            className="group-hover:block  absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
            onClick={function (event) {
              DataInfo(Data[0].subItem.length, Data[0].eTitle);
              prevSlide();
            }}
          >
            <BsChevronCompactLeft className="z-10" size={30} />
          </div>

          {/* Right Arrow */}
          <div
            className=" group-hover:block absolute top-[50%]  right-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
            onClick={function (event) {
              DataInfo(Data[0].subItem.length, Data[0].eTitle);
              nextSlide();
            }}
          >
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          {/*/////////////////////// Arrow BTN ///////////////////////////// */}

          {/*/////////////////////// Description BTN ///////////////////////////// */}
          {/*/////////////////////// Description BTN ///////////////////////////// */}
          {/*/////////////////////// Description BTN ///////////////////////////// */}

          <div
            className="  absolute top-[40%] md:top-[55%] lg:top-[55%]  right-[45%] text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse"
            onClick={function (event) {
              handleDescription();
            }}
            onMouseEnter={handleDescription}
          >
            {descrition ? (
              <MdWbIncandescent className="text-yellow-300 text-3xl " />
            ) : (
              <MdOutlineWbIncandescent className="text-gray-500 text-3xl animate-pulse" />
            )}
          </div>

          {/*/////////////////////// Description BTN ///////////////////////////// */}

          {/* ////////////////////////////////////////////////////////////////////////////// */}

          <div className="flex top-4 justify-center py-1 ">
            {Data[0].subItem.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                // onClick={() => goToSlide(slideIndex)}
                onClick={function (event) {
                  DataInfo(Data[0].subItem.length, Data[0].eTitle);
                  setcurrentIndexFirstSlider(slideIndex);
                }}
                className="text-4xl mt-3 cursor-pointer text-gray-400"
              >
                {/* <RxFilePlus /> */}
                <RxDotFilled />
              </div>
            ))}
          </div>
        </m.div>















        <m.div
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="flex flex-col h-full p-2  bg-white dark:bg-gray-300 "
        >
          <Swiper
            spaceBetween={1}
            slidesPerView={3}
            centeredSlides
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // className="flex-col bg-gray-500 h-full mb-2  flex-1 rounded-xl"
            // className="flex-col bg-gray-500 h-full mb-2  flex-1 rounded-xl"
            // className="flex flex-col h-full p-2 group  dark:bg-black bg-red-300 "
            className="flex w-full  bg-[#E5E5CB] rounded-md justify-start text-justify ...  leading-10 text-black"
          >
            <div
              className=" h-full  flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"
              style={{
                backgroundImage: `url(${Data[0].subItem[1].img})`,
              }}
            >
              <SwiperSlide className="">
                <NavLink
                  to={`/${Data[0].subItem[1].eName}`}
                  key={Data[0].subItem[1].eName}
                  // className={"flex flex-col justify-between"}
                  className=" h-full flex flex-col justify-between  bg-center bg-cover duration-500 border-b-1 border-l-1 border-r-1  border-gray-600 rounded-lg mt-10"
                >
                  <div className=" flex justify-around h-24  text-xl  items-center  text-white   border-1 border-gray-600 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
                    <div className="flex  justify-center items-center w-[20%]">
                      {Data[0].subItem[1].flag != null
                        ? Data[0].subItem[1].flag
                        : Data[0].subItem[1].icon}
                    </div>

                    <div className="flex  justify-center items-center w-[60%]   text-black  text-xl   rounded-lg">
                      {Data[0].subItem[1].pName}
                    </div>
                    <div className="flex justify-center items-center w-[20%]"></div>
                  </div>

                  {/*/////////////////////// Description ///////////////////////////// */}
                  <div
                    className={
                      " flex-col justify-around h-56  items-center text-md text-justify ... dark:text-sky-500 text-black   shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] dark:bg-black/80 bg-white/60 leading-6"
                    }
                  >
                    <div className="flex justify-center items-center pr-2 pl-2 pt-2 text-center">
                      {/* {Data[0].subItem[1].Description} */}
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            </div>

            <div
              className=" h-full  flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"
              style={{
                backgroundImage: `url(${Data[0].subItem[1].img})`,
              }}
            >
              <SwiperSlide className="">
                <NavLink
                  to={`/${Data[0].subItem[1].eName}`}
                  key={Data[0].subItem[1].eName}
                  // className={"flex flex-col justify-between"}
                  className=" h-full flex flex-col justify-between  bg-center bg-cover duration-500 border-b-1 border-l-1 border-r-1  border-gray-600 rounded-lg mt-10"
                >
                  <div className=" flex justify-around h-24  text-xl  items-center  text-white   border-1 border-gray-600 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
                    <div className="flex  justify-center items-center w-[20%]">
                      {Data[0].subItem[1].flag != null
                        ? Data[0].subItem[1].flag
                        : Data[0].subItem[1].icon}
                    </div>

                    <div className="flex  justify-center items-center w-[60%]   text-black  text-xl   rounded-lg">
                      {Data[0].subItem[1].pName}
                    </div>
                    <div className="flex justify-center items-center w-[20%]"></div>
                  </div>

                  {/*/////////////////////// Description ///////////////////////////// */}
                  <div
                    className={
                      " flex-col justify-around h-56  items-center text-md text-justify ... dark:text-sky-500 text-black   shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] dark:bg-black/80 bg-white/60 leading-6"
                    }
                  >
                    <div className="flex justify-center items-center pr-2 pl-2 pt-2 text-center">
                      {/* {Data[0].subItem[1].Description} */}
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            </div>

            <div
              className=" h-full  flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"
              style={{
                backgroundImage: `url(${Data[0].subItem[1].img})`,
              }}
            >
              <SwiperSlide className="">
                <NavLink
                  to={`/${Data[0].subItem[1].eName}`}
                  key={Data[0].subItem[1].eName}
                  // className={"flex flex-col justify-between"}
                  className=" h-full flex flex-col justify-between  bg-center bg-cover duration-500 border-b-1 border-l-1 border-r-1  border-gray-600 rounded-lg mt-10"
                >
                  <div className=" flex justify-around h-24  text-xl  items-center  text-white   border-1 border-gray-600 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
                    <div className="flex  justify-center items-center w-[20%]">
                      {Data[0].subItem[1].flag != null
                        ? Data[0].subItem[1].flag
                        : Data[0].subItem[1].icon}
                    </div>

                    <div className="flex  justify-center items-center w-[60%]   text-black  text-xl   rounded-lg">
                      {Data[0].subItem[1].pName}
                    </div>
                    <div className="flex justify-center items-center w-[20%]"></div>
                  </div>

                  {/*/////////////////////// Description ///////////////////////////// */}
                  <div
                    className={
                      " flex-col justify-around h-56  items-center text-md text-justify ... dark:text-sky-500 text-black   shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] dark:bg-black/80 bg-white/60 leading-6"
                    }
                  >
                    <div className="flex justify-center items-center pr-2 pl-2 pt-2 text-center">
                      {/* {Data[0].subItem[1].Description} */}
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            </div>
            <div
              className=" h-full  flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"
              style={{
                backgroundImage: `url(${Data[0].subItem[1].img})`,
              }}
            >
              <SwiperSlide className="">
                <NavLink
                  to={`/${Data[0].subItem[1].eName}`}
                  key={Data[0].subItem[1].eName}
                  // className={"flex flex-col justify-between"}
                  className=" h-full flex flex-col justify-between  bg-center bg-cover duration-500 border-b-1 border-l-1 border-r-1  border-gray-600 rounded-lg mt-10"
                >
                  <div className=" flex justify-around h-24  text-xl  items-center  text-white   border-1 border-gray-600 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
                    <div className="flex  justify-center items-center w-[20%]">
                      {Data[0].subItem[1].flag != null
                        ? Data[0].subItem[1].flag
                        : Data[0].subItem[1].icon}
                    </div>

                    <div className="flex  justify-center items-center w-[60%]   text-black  text-xl   rounded-lg">
                      {Data[0].subItem[1].pName}
                    </div>
                    <div className="flex justify-center items-center w-[20%]"></div>
                  </div>

                  {/*/////////////////////// Description ///////////////////////////// */}
                  <div
                    className={
                      " flex-col justify-around h-56  items-center text-md text-justify ... dark:text-sky-500 text-black   shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] dark:bg-black/80 bg-white/60 leading-6"
                    }
                  >
                    <div className="flex justify-center items-center pr-2 pl-2 pt-2 text-center">
                      {/* {Data[0].subItem[1].Description} */}
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            </div>
          </Swiper>
        </m.div>

        {/*/////////////////////// Foter ///////////////////////////// */}
        {/*/////////////////////// Foter ///////////////////////////// */}
        {/*/////////////////////// Foter ///////////////////////////// */}

        <div>
          <Footer />
        </div>
      </m.div>
    </div>
  );
};
export default EmbassyAppointment;
