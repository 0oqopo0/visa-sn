import React from "react";
import { Header } from "../components";
import { motion as m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Link, NavLink } from "react-router-dom";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";
const USAEmbassyAppointment = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
     <div className="h-screen bg-white dark:bg-[#4B5D67]  flex items-center justify-center">
     {/* <div className="mt-28 h-full  flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"> */}
      {/* <div className='h-screen bg-slate-400 flex items-center justify-center'> */}
      <div className="max-w-sm md:max-w-[100%] lg:max-w-[100%] px-3">
      {/* <div className="max-w-sm  px-3"> */}
      {/* <div className="max-w-sm md:max-w-[100%] lg:md:max-w-[100%] px-3"> */}
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
          modules={[Autoplay]}
        >
          {Data.map(
            (data, i) =>
              // data.eTitle == "EmbassyAppointment" &&
              data.eTitle == "TouristVisa" &&
              data.subItem.map((item, i) => (
                <SwiperSlide key={i}>
                   <div
                    className="h-full   flex flex-col justify-between  bg-center bg-cover duration-700 border-b-1 border-l-1 border-r-1  border-gray-600   rounded-lg"
                      style={{backgroundImage: `url(${item.img})`,}}
                  >
                    <div className={`card card-active to-green-600/40 `}>
                      <div className="logo">
                        {item.flag ? item.flag : item.icon}
                      </div>
                      <h2 className="text-xl mt-2 font-NotoSans">
                        {item.Description}
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))
          )}
        </Swiper>
      </div>
    </div>
  );
};
export default USAEmbassyAppointment;
