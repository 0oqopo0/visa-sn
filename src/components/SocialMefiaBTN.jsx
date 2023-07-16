import React from "react";
import { FaTelegram } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";
import { IoLogoWhatsapp } from "react-icons/io";
import { FcCallback } from "react-icons/fc";
import { MdWifiCalling2 } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { Tooltip, Button } from "@material-tailwind/react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";
const SocialMefiaBTN = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();

///////////////////////////////////////////////

function CallButton(props) {
  const { number, text } = props;
  return (
    <a href={`tel:${number}`} className="call-button">
      {
        // <MdWifiCalling2 dclassName="fixed bottom-5 left-20 z-10 flex text-4xl text-green-400  bg-white/60 dark:bg-black/60  rounded-full p-1 transition ease-in-out delay-3 " />
        // <VscCallOutgoing className="fixed bottom-5 left-20 z-10 flex text-4xl text-green-400  bg-white/60 dark:bg-black/60  rounded-full p-1 transition ease-in-out delay-3 " />
        <FcCallback className="flex dark:bg-black/80 bg-white/90  bottom-3 m-3 text-4xl rounded-md p-2  text-green-500/80 cursor-pointer duration-100  transition ease-out-in delay-0.5  hover:-translate-x-.5 hover:scale-125 " />
      }
    </a>
  );
}
///////////////////////////////////////////////

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      // className={`flex flex-row absolute bottom-3 text-7xl rounded-full p-2 bg-green-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse`}
      // className={`flex flex-row absolute bottom-2 gap-8 bg-green-400/10 text-7xl rounded-full  text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse`}
      className={`flex flex-1 absolute h-20 w-full justify-around pt-2 px-16 overflow-y-scroll shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)]  `}
    >
      {/* {<FaTelegram className='p-1 text-9xl'/>}  */}
      {
        // <ImYoutube className="flex bottom-3 m-2 text-5xl rounded-md p-2  text-white cursor-pointer duration-100 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] transition ease-out-in delay-0.5  hover:-translate-x-.5 hover:scale-125" />
      }
      {
        // <FaTelegram className="flex bottom-3 m-2 text-5xl rounded-md p-2 bg-green-500/40 text-white cursor-pointer duration-100 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] transition ease-out-in delay-0.5  hover:-translate-x-.5 hover:scale-125" />
      }
      {
                    
        <ImInstagram className="flex dark:bg-black/80 bg-white/90  bottom-3 text-4xl rounded-md p-2 m-3 text-red-400 cursor-pointer duration-100  transition ease-out-in delay-0.5  hover:-translate-x-.5 hover:scale-125" />
      }
      {
        // <FcCallback className="flex bottom-3 m-2 text-5xl rounded-md p-2  text-green-500/80 cursor-pointer duration-100 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] transition ease-out-in delay-0.5  hover:-translate-x-.5 hover:scale-125 animate-pulse" />
        <CallButton className="" 
        
                    number="+0000000000"
                    text="Call me"
                    
                  />
      }
      {
        <IoLogoWhatsapp className="flex  dark:bg-black/80 bg-white/90  bottom-3 m-3 text-4xl rounded-md p-2  text-green-300 cursor-pointer duration-100 transition ease-out-in delay-0.5  hover:-translate-x-.5 hover:scale-125" />
      }
      {/* {"Telegram"} */}
    </button>
  );
};

export default SocialMefiaBTN;
