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
          onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop ={true}
          centeredSlides={true}
          speed={800}
          autoplay ={{
            delay: 3000,
          }}
          modules ={[Autoplay]}
        >
          {Data.map(
            (data, i) =>
              // data.eTitle == "EmbassyAppointment" &&
              data.eTitle == "TouristVisa" &&
              data.subItem.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="h-96 flex "                         style={{
                          backgroundImage: `url(${item.img})`,
                        }}>
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
