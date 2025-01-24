import React, { useEffect } from "react";
import { Header } from "../components";
import { motion as m } from "framer-motion"; // For animations
import { useKeenSlider } from "keen-slider/react"; // Keen-Slider React hook
import "keen-slider/keen-slider.min.css"; // Import Keen-Slider styles
import { Data } from "../data/mobileDummyData"; // Import your dummy data
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"; // Import icons

const USAEmbassyAppointment = () => {
  // Keen-Slider configuration
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    spacing: 15,
  });

  // Autoplay logic
  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 5000); // 5 seconds delay

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [instanceRef]);

  return (
    <div className="bg-gradient-to-r from-black via-sky-500 via-green-500 via-blue-500 to-black flex flex-col items-center overflow-hidden min-h-screen">
      {/* Navbar Space */}
      <div className="h-28"></div>

      {/* Page header */}
      <m.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-5"
      >
        <Header title="USA Embassy Appointment" />
      </m.div>

      {/* Slider container */}
      <m.div
        className="keen-slider max-w-[90%] md:max-w-[80%] lg:max-w-[70%] max-h-[90%] md:max-h-[80%] lg:max-h-[70%] rounded-lg shadow-xl relative "
        ref={sliderRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {Data.map(
          (data) =>
            data.eTitle === "TouristVisa" &&
            data.subItem.map((item, index) => (
              <m.div
                key={index}
                className="keen-slider__slide"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Slide content */}
                <div
                  className="h-[400px] flex flex-col justify-end bg-center bg-cover rounded-lg overflow-hidden shadow-md border border-gray-300 dark:border-gray-700"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  {/* Overlay content */}
                  <div className="p-4 bg-black/50 text-white">
                    <h2 className="text-2xl font-bold mb-2 truncate">
                      {item.Description}
                    </h2>
                    <div className="flex items-center gap-2 text-xl">
                      {item.flag ? item.flag : item.icon}
                    </div>
                  </div>
                </div>
              </m.div>
            ))
        )}

        {/* Left Arrow */}
        <div
          className="absolute top-[50%] left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10 group-hover:block"
          onClick={() => instanceRef.current?.prev()}
        >
          <BsChevronCompactLeft size={30} />
        </div>

        {/* Right Arrow */}
        <div
          className="absolute top-[50%] right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] z-10 group-hover:block"
          onClick={() => instanceRef.current?.next()}
        >
          <BsChevronCompactRight size={30} />
        </div>
      </m.div>
    </div>
  );
};

export default USAEmbassyAppointment;
