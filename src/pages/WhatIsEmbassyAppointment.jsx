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
    <div className="flex  mt-28 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        // onSlideChange={() => console.log("slide change : ")}
        // onSwiper={(swiper) => console.log("swiper :" + swiper)}
        // loop ={true}
        centeredSlides ={true}
        speed={800}
        autoplay={{delay:3000,}}
        modules={[Autoplay]}
        
      >
        {/* {Data.subItem.map((data) => ( */}

        {Data.map(
          (data, i) =>
            data.eTitle == "EmbassyAppointment" &&
            // data.eTitle == "TouristVisa" &&
            data.subItem.map((item, i) => (
              <SwiperSlide key={i}
              // onSlideChange={() => console.log("slideeeeeeeeee : "+i)}
              >
                <div className="h-[50%] flex p-2">
                  <NavLink to={`/${item.eName}`} key={item.eName}>
                    <div className={`flex-col  card bg-yellow-600/70 p-2 w-[700px] `}>
                      {/* <div className={`card to-red-400 `}></div> */}
                      <h2
                        className="flex justify-center items-center  rounded-tl-md rounded-tr-md p-3  "
                        dir="rtl"
                      >
                        {item.eName}
                      </h2>
                      {/* Image */}
                      <div
                        className="  h-full flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-br-lg rounded-bl-lg "
                        style={{
                          backgroundImage: `url(${item.img})`,
                        }}
                      >

                      </div>

                    </div>
                  </NavLink>
                </div>
              </SwiperSlide>
            ))
        )}
        {/* ))} */}
      </Swiper>
    </div>
    // </m.div>
  );
};
export default WhatIsEmbassyAppointment;
