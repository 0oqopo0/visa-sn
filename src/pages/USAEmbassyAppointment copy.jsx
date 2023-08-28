import React from 'react';
import { Header } from '../components';
import { motion as m} from "framer-motion";
const USAEmbassyAppointment = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (

    <m.div 
    initial={{y: "80%"}} animate={{y: "15%"}} transition={{duration: 0.75,ease:'easeInOut' }}
    className="">
    <div className="flex mt-24 ml-5 mr-5  bg-purple-400 rounded-3xl justify-center items-center  p-9 ">
      USA - EmbassyAppointment
    </div>
    </m.div>
  );
};
export default USAEmbassyAppointment;
