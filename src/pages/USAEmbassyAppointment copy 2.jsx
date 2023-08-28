import React from "react";
import { Header } from "../components";
import { motion as m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
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
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
          <div className="h-96  flex ">
            <div className={`card bg-green-600/40`}>
              <div className="logo">
                <ion-icon name="logo-angular"></ion-icon>
              </div>
              <h2 className="text-3xl mt-2 font-semibold"> Angular js</h2>
              <p className="para">{Data[1].pTitle}</p>
              <di className="bg-red-600 skill-level">80%</di>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-96  flex ">
            <div className={`card card-active to-red-600/40`}>
              <div className="logo">
                <ion-icon name="logo-angular"></ion-icon>
              </div>
              <h2 className="text-3xl mt-2 font-semibold"> Angular js</h2>
              <p className="para">{Data[1].pTitle}</p>
              <di className="bg-red-600 skill-level">80%</di>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
        </div>
    </div>
  );
};
export default USAEmbassyAppointment;
