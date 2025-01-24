import React, { useEffect, useState, useRef } from "react";
import { Footer } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Data } from "../data/mobileDummyData";
import beachVid from "../Pool/Videos/beachVid.mp4";
import sunrise from "../Pool/Videos/sunrise.mp4";
import { MdWbIncandescent } from "react-icons/md";
import { MdOutlineWbIncandescent } from "react-icons/md";
// ////////////////////////////////////////////
const Home = () => {
  const [descrition, setDescription] = useState(false);

  const handleDescription = () => {
    setDescription(!descrition);
  };

  // تنظیمات Keen-Slider
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    spacing: 50,
    centered: true,
  });

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);

    return () => clearInterval(timer);
  }, [instanceRef]);

  return (
    <m.div className="flex-col w-full h-screen justify-center items-start absolute bg-slate-100 dark:bg-black ">
      {/* //////////////////////////////////////////////// */}
      {/* //////////////////// Header //////////////////// */}
      {/* //////////////////////////////////////////////// */}
      <div className="flex justify-center h-24 ">
        {/* <video className="flex h-full w-screen object-cover" src={sunrise} autoPlay loop muted /> */}
        <video
          className="flex h-full w-screen object-cover"
          src={beachVid}
          autoPlay
          loop
          muted
        />
      </div>
      {/* //////////////////////////////////////////////// */}
      {/* ///////////////////Section One////////////////// */}
      {/* //////////////////////////////////////////////// */}
      <NavLink to="/GeonamesList">
        <m.div
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="flex flex-col h-[85%] mt-2 py-2 px-2 group bg-white dark:bg-black"
        >
          {/*/////////////////////// Video ///////////////////////////// */}
          <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full justify-start items-center rounded-md flex flex-col bg-center bg-cover border-b-1 border-l-1 border-r-1 border-gray-600 "
          >
            <video
              className="flex h-full justify-center items-center w-screen object-cover rounded-bl-sm rounded-md"
              // src={sunrise}
              src={beachVid}
              autoPlay
              loop
              muted
            />
            <m.h1 className="absolute mt-5 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] rounded-md p-2 text-gray-300 pr-4 pl-4 bg-black/20 font-Gabriola text-3xl md:text-5xl g:text-5xl">
              Journey To Infinity
            </m.h1>
          </m.div>
        </m.div>
      </NavLink>
      {/* //////////////////////////////////////////////// */}
      {/* ///////////////////Section Two////////////////// */}
      {/* //////////////////////////////////////////////// */}

      <m.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="flex flex-col h-screen py-2 px-2 group bg-white dark:bg-black"
      >
        {/* فلش سمت چپ */}
        <div
          className="group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10"
          onClick={() => instanceRef.current?.prev()} // حرکت به اسلاید قبلی
        >
          <BsChevronCompactLeft className="z-10" size={30} />
        </div>

        {/* فلش سمت راست */}
        <div
          className="group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10"
          onClick={() => instanceRef.current?.next()} // حرکت به اسلاید بعدی
        >
          <BsChevronCompactRight className="z-10" size={30} />
        </div>

        {/* توضیحات */}
        <div
          className="absolute top-[20%] md:top-[25%] lg:top-[25%] right-[45%] md:right-[47%] lg:right-[47%] text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse z-10"
          onClick={handleDescription}
        >
          {descrition ? (
            <MdWbIncandescent className="text-yellow-300 text-3xl" />
          ) : (
            <MdOutlineWbIncandescent className="text-green-500 text-3xl animate-pulse" />
          )}
        </div>

        {/* اسلایدر */}
        <div className="relative mt-2 md:max-w-[100%] lg:max-w-[100%] px-1">
          <div ref={sliderRef} className="keen-slider">
            {Data.map(
              (data) =>
                // data.eTitle === "EmbassyAppointment" &&
                data.eTitle === "EmbassyAppointment" &&
                data.subItem.map((item, i) => (
                  <div className="keen-slider__slide" key={i}>
                    <NavLink to={`/${item.eName}`}>
                      <div
                        className="flex flex-col h-screen justify-between bg-center bg-cover border border-gray-600 rounded-lg"
                        style={{ backgroundImage: `url(${item.img})` }}
                      >
                        <div className="w-full cursor-pointer rounded-md bg-gradient-to-t from-black/40 to-green-400/40 h-60 text-center px-3 self-end shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]">
                          <h2 className="text-white font-semibold text-2xl">
                            {item.eName}
                          </h2>

                          {/* ///////////////////////////////////////////  */}
                        </div>
                        {/* /////////////////// Description ////////////////////////// */}
                        {/* /////////////////// Description ////////////////////////// */}
                        {/* /////////////////// Description ////////////////////////// */}

                        <div
                          className={
                            descrition
                              ? "flex-col  h-56  items-center text-md text-justify ... dark:text-sky-500 text-black   shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] dark:bg-black/80 bg-white/60 leading-6"
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
                            {item.Description}
                          </div>
                        </div>

                      </div>
                    </NavLink>
                  </div>
                ))
            )}
          </div>
        </div>
      </m.div>
      {/* //////////////////////////////////////////////// */}
      {/* //////////////////// Footer //////////////////// */}
      {/* //////////////////////////////////////////////// */}
      <Footer />
    </m.div>
  );
};

export default Home;
