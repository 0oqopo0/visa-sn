import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";
// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Autoplay } from "swiper";

import { Link, NavLink } from "react-router-dom";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { MdOutlineWbIncandescent } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";


import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../images/img_1.jpg';
import slide_image_2 from '../images/img_2.jpg';
import slide_image_3 from '../images/img_3.jpg';
import slide_image_4 from '../images/img_4.jpg';
import slide_image_5 from '../images/img_5.jpg';
import slide_image_6 from '../images/img_6.jpg';
import slide_image_7 from '../images/img_7.jpg';



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


const WhatIsEmbassyAppointment = () => {
  const [descrition, setDescription] = useState(false);
  const [currentIndexFirstSlider, setcurrentIndexFirstSlider] = useState(0);
  const [currentIndexSecSlider, setcurrentIndexSecSlider] = useState(0);
  const toolbarOptions = ["Search"];
  const [searchTerm, setSearchTerm] = useState("");
  return (
    // <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2,ease:'easeInOut' }}
    // <m.div
    //   initial={{ y: "80%" }}
    //   animate={{ y: "0%" }}
    //   transition={{ duration: 0.5, ease: "easeInOut" }}
    //   className="flex mt-28 ml-5 mr-5  bg-green-400/60 rounded-3xl justify-center items-center  p-9 flex-col"
    // >
    //  <div className="flex  mt-28 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] bg-red-200">
    <m.div
    initial={{ opacity: 0, y: "30%" }}
    animate={{ opacity: 1, y: "0%" }}
    transition={{ duration: 0.75, ease: "easeInOut" }}
    className="flex flex-col  h-screen py-24  px-2   group bg-white dark:bg-black/40  "
  >
        <div className="flex mt-24 ml-5 mr-5  bg-yellow-400 rounded-3xl justify-center items-center  p-9 ">
WhatIsEmbassyAppointment
WhatIsEmbassyAppointment
WhatIsEmbassyAppointment
    </div>
    </m.div>
    // </m.div>
  );
};
export default WhatIsEmbassyAppointment;
