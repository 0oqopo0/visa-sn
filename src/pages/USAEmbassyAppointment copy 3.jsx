import React from 'react';
import { Header } from '../components';
import { motion as m} from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Data,
  EmbassyAppointmentItem,
  TouristVisaItem,
} from "../data/mobileDummyData";
const USAEmbassyAppointment = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  
  return (

    <m.div 
    initial={{y: "100%"}} animate={{y: "0%"}} transition={{duration: 0.75,ease:'easeInOut' }}
    className="">
    {/* <div className="flex h-screen  mt-28 mx-5 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]  bg-[#F7F7CF]/70 rounded-md justify-center items-center   "> */}

    <Swiper
spaceBetween={50} // the gap between slides
slidesPerView={1} // how many slides to show at a time
loop={true} // enable looping
autoplay={{ delay: 3000 }} // enable autoplay with a delay of 3 seconds
>

// Map over the images array and create a SwiperSlide component for each image

{Data.map((image, index) => (
<SwiperSlide key={index}>
// Use an img tag to display the image
<img src={image} alt={`Image ${index + 1}`} />
</SwiperSlide>
))}
</Swiper>
    </m.div>
  );
};
export default USAEmbassyAppointment;
