import React from "react";
import { useEffect, useState, useRef } from "react";
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
    <div className="mt-24 h-screen w-full ">
      
        {/*/////////////////////// Foter ///////////////////////////// */}

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
          className="flex flex-col  p-2 group bg-white dark:bg-black"
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

        {/*/////////////////////// Section Three ////////////////////////// */}
        {/*/////////////////////// Section Three ////////////////////////// */}
        {/*/////////////////////// Section Three ////////////////////////// */}





        <m.div
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="flex flex-col  p-2 group bg-white dark:bg-black items-center justify-center"
        >
          <m.div
            initial={{ opacity: 0, y: "30%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            // className="flex flex-col  mt-2 text-xl p-2 group bg-white dark:bg-black  hadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
            className="w-full h-full justify-start items-center rounded-md flex flex-col   bg-center bg-cover  border-b-1 border-l-1 border-r-1  border-red-600 "
            // className="flex flex-col  mt-2 text-xl p-2 group bg-white dark:bg-black  hadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
          >
            




            <div className="flex  h-full bg-neutral-900 items-center justify-center rounded-lg  w-[90%]">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log("swiper :" + swiper)}
                >
                  {Data.map((data, i) => (
                    <SwiperSlide key={i}>
                      <NavLink to={`/${data.eTitle}`} key={data.eTitle}>
                        <div className="h-96 w-72 flex m-5 p-5 bg-gray-300 ">
                          <div className={`card bg-green-800 `}>
                            {/* <div className={`card to-red-400 `}></div> */}
                            <h2
                              className="flex justify-center items-center bg-red-500 bg-black/50  rounded-tl-md rounded-tr-md p-3 "
                              dir="rtl"
                            >
                              {data.eTitle}
                            </h2>

                            {/* Image */}

                            <div
                              className=" h-full p-10 flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"
                              style={{
                                backgroundImage: `url(${data.img})`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </NavLink>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>






          </m.div>
        </m.div>













        {/*/////////////////////// Foter ///////////////////////////// */}
        {/*/////////////////////// Foter ///////////////////////////// */}
        {/*/////////////////////// Foter ///////////////////////////// */}

        <div>
          <Footer />
        </div>

    </div>
  );
};
export default EmbassyAppointment;
