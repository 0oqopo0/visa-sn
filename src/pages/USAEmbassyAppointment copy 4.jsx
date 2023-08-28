import React from "react";
import { Header } from "../components";
import { motion as m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { Link, NavLink } from "react-router-dom";
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";
const USAEmbassyAppointment = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="h-screen bg-slate-400 flex items-center justify-center">
      {/* <div className='h-screen bg-slate-400 flex items-center justify-center'> */}
<div className="max-w-5xl">

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change" )}
        onSwiper={(swiper) => console.log(swiper)}
        >
        {Data.map(
          (data, i) =>
            data.eTitle == "EmbassyAppointment" &&
            // data.eTitle == "TouristVisa" &&
            data.subItem.map((item, i) => (
              <SwiperSlide key={i}
               onSlideChange={() => console.log("slideeeeeeeeee : "+i)}
              >
                <div className="h-[100%] flex p-2">
                  <NavLink to={`/${item.eName}`} key={item.eName}>
                    <div className={`flex-col  card bg-red-600/70 p-2 w-[900px] `} style={{
                          backgroundImage: `url(${item.img})`,
                        }}>
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
      </Swiper>
      
        </div>
    </div>
  );
};
export default USAEmbassyAppointment;
