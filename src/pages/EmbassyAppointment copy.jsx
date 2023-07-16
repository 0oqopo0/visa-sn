import React from "react";
import { Header } from "../components";
import { motion as m } from "framer-motion";
import beachVid from "../Pool/Videos/beachVid.mp4";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";
import { Link, NavLink } from "react-router-dom";



// swiper bundle styles
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
const EmbassyAppointment = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <m.div
    
    initial={{  y: "50%" }}
    animate={{  y: "0%" }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    // className="flex mt-24 ml-5 mr-5  bg-yellow-400 rounded-3xl justify-center items-center  p-9 ">
    className="">
      وقت سفارت



      {/* //////////////////////////////////////////////// */}
      {/* ///////////////////Section One////////////////// */}
      {/* //////////////////////////////////////////////// */}
      
      <m.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="flex flex-col  mt-20  h-60 p-2 group bg-white dark:bg-black  "
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
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex flex-col  mt-2 text-xl p-2 group bg-white dark:bg-black  hadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
        // className="flex flex-col  mt-2 text-xl p-2 group bg-white dark:bg-black  hadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]"
      >
       
        
        {/*/////////////////////// Video ///////////////////////////// */}







        <p className="flex mx-3 p-6 bg-black/50 rounded-2xl  justify-start text-justify ...  leading-10 text-yellow-200" dir="rtl"  >
        
با سفر کردن میتوانیم از استرس زندگی روزمره دوری کنیم، خلاقیت و مهارتهای ارتباطی خود را افزایش دهیم، با فرهنگها و آداب رسوم نو آشنا شویم و تجربههای جدید و ماندگاری کسب کنیم. سفر کردن یک تغییر پایدار در روح و شیوه زندگی ما ایجاد میکند.

سفر کردن چه مزایا و فوایدی دارد، با این فواید شگفت انگیز آشنا شوید ...
سفر کردن همیشه باعث ایجاد انگیزه زندگی و تقویت روحیه و نشاط در انسان می شود. آیا هیچ دقت کرده اید وقتی قصد سفر دارید از شب قبل دچار هیجان خاصی می شوید؟
سفر کردن نقشی بسیار مهم در کنترل مشکلات زندگی، روابط اعضای خانواده و رها شدن از یکنواختی در انسان ایجاد می کند.



      </p>













          
        </m.div>





    
        {/* ////////////////////////////////////////////////////////////////////////////// */}



        {/* ////////////////////////////////////////////////////////////////////////////// */}

        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
      className="flex-col bg-gray-500 h-full mb-2  flex-1 rounded-xl"
    >
      <SwiperSlide className="flex w-[500px] bg-red-300 rounded-md m-2 ">Slide 1</SwiperSlide>
      <SwiperSlide className="flex  w-[500px] bg-purple-300 rounded-md m-2 ">Slide 2</SwiperSlide>
      <SwiperSlide className="flex  w-[500px] bg-gray-300 rounded-md m-2 ">Slide 3</SwiperSlide>


      <SwiperSlide className="flex  w-[500px] bg-yellow-300 rounded-md  m-2">
      
      <div
          className=" h-full  flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"
          style={{
            backgroundImage: `url(${Data[0].subItem[1].img})`,
          }}
        >
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
        </div>
      </SwiperSlide>
    </Swiper>


      </m.div>





  );
};
export default EmbassyAppointment;
