import React, { useEffect, useState, useRef } from "react";
import beachVid from "../Pool/Videos/beachVid.mp4";
import sunrise from "../Pool/Videos/sunrise.mp4";
import nature_105936_720p from "../Pool/Videos/nature_105936_720p.mp4";
import Nature_159101 from "../Pool/Videos/Nature_159101.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { Link, NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";
// import { Navigation, Pagination, Autoplay } from "swiper";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";
import { v4 as uuid } from "uuid";

const Home = () => {
  const intervalRef = useRef(null);
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
  const startInterval = (direction) => {
    intervalRef.current = setInterval(() => {
      if (direction === "prev") {
        prevSlide();
      } else {
        nextSlide();
      }
    }, 200); // تغییر اسلاید هر 200 میلیثانیه
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  const [currentIndexFirstSlider, setcurrentIndexFirstSlider] = useState(0);
  const [currentIndexSecSlider, setcurrentIndexSecSlider] = useState(0);
  // const [currentIndexSecSlider, setcurrentIndexSecSlider] = useState(0);
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

  // const handelClick = (name) => {
  //   setClickName(name);
  // };
  //////////////////////////////////////////////////////
  /////////////////// console.log //////////////////////
  //////////////////////////////////////////////////////

  const subItemLength = Data.map((item) => item.subItem.length);
  // console.log("subItemLength : " + subItemLength); //
  // console.log(Data[0].subItem.length);
  // console.log("screenSize :" + screenSize);
  // console.log("mScreen :" + mScreen);
  // console.log("sScreen :" + sScreen);
  // console.log("lScreen :" + lScreen);
  // console.log(" SubItemDataLength :" + DataLen + " SlidTitle : " + DataTitle);
  // console.log(" clickName :" + clickName);
  // console.log(" currentIndexFirstSlider :" + currentIndexFirstSlider);
  // console.log(" currentIndexSecSlider :" + currentIndexSecSlider);
  // const subItemLength = Data.map((item) => item.subItem.length);
  // console.log("subItemLength : "+subItemLength); //

  //|||||||||||||||||||||||||||||||||||||||||||||||||||||
  //||||||||||||||||||||| Return ||||||||||||||||||||||||
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||

  return (
    <m.div
      // initial={{ x: "100%" }}
      //  animate={{ x: "0%" }}
      //  exit={{ opacity: 0 }}
      //  transition={{ duration: 1, ease: "easeInOut" }}
      className="flex-col w-full h-screen   justify-center items-start absolute  bg-slate-100 dark:bg-black "
    >
      {/* //////////////////////////////////////////////// */}
      {/* //////////////////// Header //////////////////// */}
      {/* //////////////////////////////////////////////// */}

      <div className="flex justify-center h-24 ">
        <video
          className="flex h-full   w-screen  object-cover "
          // src={Video00}
          src={sunrise}
          // src={Nature_159101}
          autoPlay
          loop
          muted
        >
          {/* <h2 className="z-50 absolute bg-red-600 py-4">در کمترین زمان ممکن</h2> */}
        </video>
      </div>

      {/* //////////////////////////////////////////////// */}
      {/* ///////////////////Section One////////////////// */}
      {/* //////////////////////////////////////////////// */}

      <NavLink
        // to={`/${Data[0].subItem[currentIndexFirstSlider].eName}`}
        to={"/USAEmbassyAppointment"}
        // to={"/EmbassyAppointment"}
        // key={uuid()}
      >
        <m.div
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="flex flex-col h-[85%] mt-2 py-2  px-2  group bg-white dark:bg-black  "
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
              src={sunrise}
              // src={Nature_159101}
              autoPlay
              loop
              muted
            >
              {/* <h2 className="z-50 absolute bg-red-600 py-4">در کمترین زمان ممکن</h2> */}
            </video>
            <m.h1
              className=" absolute mt-5  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] rounded-md p-2 text-gray-300 pr-4 pl-4 bg-black/20 font-Gabriola  text-3xl md:text-5xl g:text-5xl"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Journey To Infinity
            </m.h1>

            {/*/////////////////////// Title ///////////////////////////// */}

            <div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              // initial={{x: "100%" }} animate={{x: "0%"}} transition={{duration: 0.75,ease:'easeInOut' }}
              className="flex absolute w-full mt-28 justify-around h-24   text-xl  items-center  text-white  shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] "
            >
              <m.div
                // initial={{x: "80%"}} animate={{x: "0%"}} transition={{duration: 0.5,ease:'backInOut' }}
                // initial={{opacity: 0 ,x:"100%"}} animate={{opacity: 1 ,x:"0%"}} exit={{opacity: 0}} transition={{duration: .75,ease:'easeIn' }}
                className="flex justify-center items-center overflow-hidden  w-full"
              >
                <m.h1
                  className="text-3xl font-AGol flex w-[80%] justify-center items-center text-black  "
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
      </NavLink>

      {/* //////////////////////////////////////////////// */}
      {/* ///////////////////Section Two////////////////// */}
      {/* //////////////////////////////////////////////// */}
      <m.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="flex flex-col  h-screen py-2  px-2   group bg-white dark:bg-black  "
      >
        {/* <div className="max-w-sm  px-3"> */}
        {/* <div className="max-w-sm md:max-w-[100%] lg:md:max-w-[100%] px-3"> */}

        {/*/////////////////////// Arrow BTN ///////////////////////////// */}
        {/*/////////////////////// Arrow BTN ///////////////////////////// */}
        {/*/////////////////////// Arrow BTN ///////////////////////////// */}
        {/* Left Arrow */}
        <div
          className="group-hover:block  absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10"
          onClick={function (event) {
            DataInfo(Data[0].subItem.length, Data[0].eTitle);
            prevSlide();
          }}
        >
          <BsChevronCompactLeft className="z-10" size={30} />
        </div>

        {/* Right Arrow */}
        <div
          className=" group-hover:block absolute top-[50%]  right-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10"
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

        {/*/////////////////////// Description BTN ///////////////////////////// */}

        <div
          className="  absolute top-[20%] md:top-[25%] lg:top-[25%]  right-[45%] md:right-[47%] lg:right-[47%] text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse z-10"
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
        {/* //////////////////////////////////////////// */}
        {/* //////////////////////////////////////////// */}
        {/* //////////////////////////////////////////// */}
        <div className="">
          {/* <div className="mt-2  md:max-w-[100%] lg:max-w-[100%] px-1 "> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            centeredSlides={true}
            speed={800}
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
          >
            {Data.map(
              (data, i) =>
                data.eTitle == "EmbassyAppointment" &&
                //data.eTitle == "TouristVisa" &&
                data.subItem.map((item, i) => (
                  <SwiperSlide key={uuid()}>
                    <NavLink
                      to={`/${item.eName}`}
                      key={uuid()}
                      // className={"flex flex-col justify-between"}
                      // className=" h-full flex flex-col justify-between  bg-center bg-cover duration-500 border-b-1 border-l-1 border-r-1  border-gray-600 rounded-lg mt-10"
                    >
                      <div
                        className=" flex flex-col h-screen  justify-between  bg-center bg-cover  border-b-1 border-l-1 border-r-1  border-gray-600 rounded-lg  "
                        //style={{backgroundImage: `url(${Data[0].subItem[currentIndexSecSlider].img})`,}}
                        // style={{backgroundImage: `url(${Data[0].subItem[currentIndexSecSlider].img})`,}}
                        style={{ backgroundImage: `url(${item.img})` }}
                      >
                        <div className="w-full cursor-pointer  rounded-md bg-gradient-to-t from-black/40 to-green-400/40 h-60 text-center px-3  self-end shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
                          {/* <div className={`card card-active to-green-600/40 `}> */}
                          <div className="logo">
                            {item.flag ? item.flag : item.icon}
                          </div>
                          <h2 className="text-xl mt-2 font-NotoSans">
                            {item.pName}
                          </h2>
                        </div>
                      </div>
                    </NavLink>
                  </SwiperSlide>
                ))
            )}
          </Swiper>
        </div>
      </m.div>

      <m.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="flex flex-col h-screen py-2 px-2 group bg-white dark:bg-black"
      >
        <div
          className="group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10"
          onMouseDown={() => startInterval("prev")}
          onMouseUp={stopInterval}
          onMouseLeave={stopInterval}
        >
          <BsChevronCompactLeft className="z-10" size={30} />
        </div>

        <div
          className="group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10"
          onMouseDown={() => startInterval("next")}
          onMouseUp={stopInterval}
          onMouseLeave={stopInterval}
        >
          <BsChevronCompactRight className="z-10" size={30} />
        </div>

        <div
          className="absolute top-[20%] md:top-[25%] lg:top-[25%] right-[45%] md:right-[47%] lg:right-[47%] text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse z-10"
          onClick={handleDescription}
          onMouseEnter={handleDescription}
        >
          {descrition ? (
            <MdWbIncandescent className="text-yellow-300 text-3xl" />
          ) : (
            <MdOutlineWbIncandescent className="text-gray-500 text-3xl animate-pulse" />
          )}
        </div>

        <div>
          
<div className="relative">
<Swiper
spaceBetween={50}
slidesPerView={1}
onSlideChange={() => console.log("slide change")}
onSwiper={(swiper) => console.log(swiper)}
loop={true}
centeredSlides={true}
speed={800}
autoplay={{
delay: 3000,
}}
modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
coverflowEffect={{
rotate: 0,
stretch: 0,
depth: 100,
modifier: 2.5,
}}
pagination={{ el: '.swiper-pagination', clickable: true }}
navigation={{
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
clickable: true,
}}
>
{Data.map(
(data, i) =>
data.eTitle === "EmbassyAppointment" &&
data.subItem.map((item, i) => (
<SwiperSlide key={uuid()}>
<NavLink to={`/${item.eName}`} key={uuid()}>
<div
className="flex flex-col h-screen justify-between bg-center bg-cover border-b-1 border-l-1 border-r-1 border-gray-600 rounded-lg"
style={{ backgroundImage: `url(${item.img})` }}
>
<div className="w-full cursor-pointer rounded-md bg-gradient-to-t from-black/40 to-green-400/40 h-60 text-center px-3 self-end shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
<div className="logo">
{item.flag ? item.flag : item.icon}
</div>
<h2 className="text-xl mt-2 font-NotoSans">
{item.pName}
</h2>
</div>
</div>
</NavLink>
</SwiperSlide>
))
)}
</Swiper>

{/* دکمههای ناوبری */}
<div
className="swiper-button-prev absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10"
>
<BsChevronCompactLeft size={30} />
</div>
<div
className="swiper-button-next absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10"
>
<BsChevronCompactRight size={30} />
</div>
</div>
        </div>
      </m.div>
      {/* //////////////////////////////////////////////// */}
      {/* ///////////////////Section Three /////////////// */}
      {/* //////////////////////////////////////////////// */}

      <m.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="flex flex-col h-[85%] py-2  px-2   group bg-white dark:bg-black  "
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
            key={uuid()}
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
          className=" group-hover:block absolute top-[50%]  right-5 text-2xl rounded-full p-2 bg-gray-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
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

      {/* //////////////////////////////////////////////// */}
      {/* //////////////// Section Three ///////////////// */}
      {/* //////////////////////////////////////////////// */}
      {/* <div className=" h-screen m-auto relative group bg-white dark:bg-black "> */}
      <m.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="flex flex-col h-[85%] py-2  px-2   group bg-white dark:bg-black  "
      >
        {/*/////////////////////// Image ///////////////////////////// */}
        {/*/////////////////////// Image ///////////////////////////// */}
        {/*/////////////////////// Image ///////////////////////////// */}
        <div
          className=" h-full  flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"
          style={{
            backgroundImage: `url(${Data[1].subItem[currentIndexSecSlider].img})`,
          }}
        >
          <NavLink
            to={`/${Data[1].subItem[currentIndexSecSlider].eName}`}
            // key={Data[1].subItem[currentIndexSecSlider].eName}
            key={uuid()}  // استفاده از uuid برای key یکتا
            // className={"flex flex-col justify-between"}
            className=" h-full rounded-bl-sm flex flex-col justify-between rounded-br-sm bg-center bg-cover duration-500 border-b-1 border-l-1 border-r-1  border-gray-600 rounded-lg"
          >
            <div className=" flex justify-around h-24  text-xl  items-center  text-white   border-1 border-gray-600 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]  mt-10">
              <div className="flex  justify-center items-center w-[20%]">
                {Data[1].subItem[currentIndexSecSlider].flag != null
                  ? Data[1].subItem[currentIndexSecSlider].flag
                  : Data[1].subItem[currentIndexSecSlider].icon}
              </div>
              <div className="flex  justify-center items-center w-[60%]   text-black  text-xl   rounded-lg  ">
                {Data[1].subItem[currentIndexSecSlider].pName}
              </div>
              <div className="flex justify-center items-center w-[20%]"></div>
            </div>

            {/* /////////////////// Description ////////////////////////// */}

            <div
              className={
                descrition
                  ? "flex-col justify-around h-56  items-center text-md text-justify ... dark:text-sky-500 text-black   shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] dark:bg-black/80 bg-white/60 leading-6"
                  : "hidden"
              }
            >
              <div
                className=" justify-center items-center p-5 text-center"
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {Data[1].subItem[currentIndexSecSlider].Description}
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
          // onClick={() => DataInfo(Data[0].subItem.length , Data[0].eTitle)}
          onClick={function (event) {
            DataInfo(Data[1].subItem.length, Data[1].eTitle);
            prevSlide();
          }}
        >
          <BsChevronCompactLeft className="z-10" size={30} />
        </div>

        {/* Right Arrow */}
        <div
          className=" group-hover:block absolute top-[50%]  right-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
          // className=" group-hover:block absolute top-[50%]  right-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
          // onClick={() => DataInfo(Data[0].subItem.length , Data[0].eTitle)}
          onClick={function (event) {
            DataInfo(Data[1].subItem.length, Data[1].eTitle);
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
          className=" absolute top-[40%] md:top-[55%] lg:top-[55%]  right-[45%] text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse"
          // onClick={() => DataInfo(Data[0].subItem.length , Data[0].eTitle)}
          onClick={function (event) {
            handleDescription();
          }}
          onMouseEnter={handleDescription}
        >
          {descrition ? (
            // <MdWbIridescent onClick={nextSlide} size={30} />
            <MdWbIncandescent className="text-yellow-300 text-3xl " />
          ) : (
            // <MdOutlineWbIridescent OutlineWbIridescent onClick={nextSlide} size={30} />
            <MdOutlineWbIncandescent className="text-red-500 text-3xl animate-pulse" />
          )}
        </div>
        {/* handleDescription */}

        {/*/////////////////////// Description BTN ///////////////////////////// */}

        {/* ////////////////////////////////////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////////////////////////////////////// */}

        <div className="flex top-4 justify-center py-1 ">
          {Data[1].subItem.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              // onClick={() => goToSlide(slideIndex)}
              onClick={function (event) {
                DataInfo(Data[1].subItem.length, Data[1].eTitle);
                setcurrentIndexSecSlider(slideIndex);
              }}
              className="text-4xl mt-3 cursor-pointer text-gray-400"
            >
              {/* <RxFilePlus /> */}
              <RxDotFilled />
            </div>
          ))}
        </div>
      </m.div>

      {/* //////////////////////////////////////////////// */}
      {/* ///////////////////Section Five//////////////// */}
      {/* //////////////////////////////////////////////// */}
      <Footer />
    </m.div>
  );
};
export default Home;
