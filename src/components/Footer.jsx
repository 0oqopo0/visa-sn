import React from "react";

import { AiFillGithub } from "react-icons/ai";

const Footer = () => (
  <div className="flex  justify-between fixed h-24 w-full text-sky-500 text-sm bg-white/80 dark:bg-black/90 items-center border-t-2 border-sky-500 z-50"
  // style={{ zIndex: "50" }}
  style={{ zIndex: "3" }}
  >
    {/* Company Information */}
    <div className=" border-r-2 border-red-500 flex-1 flex-col ">
      <a
        href="https://github.com/0oqopo0"
        target="_blank"
        className="flex   justify-center m-2 pr-1 pl-1  gap-2 text-md  rounded-3xl mb-1   bg-gray-800 dark:bg-black/60 hover:bg-green-200/40 dark:text-sky-600  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105 border-1 border-gray-500"
      ></a>
    </div>

    {/* Developer Information */}
    <div className=" flex-1 flex-col justify-center items-center ">
      <a
        href="https://github.com/0oqopo0"
        target="_blank"
        className="flex  items-center justify-center m-2 pr-1 pl-1  gap-2 text-md  rounded-3xl mb-1   bg-gray-800 dark:bg-black/60 hover:bg-green-200/40 dark:text-sky-600  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105 border-1 border-gray-500"
      >
        <a
          className="flex  justify-center items-center gap-1"
          href="https://github.com/0oqopo0"
          target="_blank"
        >
          <p>0oqopo0</p>
          <AiFillGithub />
        </a>
      </a>

      {/* SorceCode */}
      <a
        href="https://github.com/0oqopo0/visa-sn"
        target="_blank"
        className="flex  items-center justify-center m-1 pr-1 pl-1 gap-2 text-md rounded-3xl mb-1   bg-gray-800 dark:bg-black/60 hover:bg-green-200/40 dark:text-sky-600  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105 border-1 border-gray-500"
      >
        <a
          className="flex justify-center items-center gap-1"
          href="https://github.com/0oqopo0/visa-sn"
          target="_blank"
        >
          <p>SourceCode </p>
          <AiFillGithub />
        </a>
      </a>
    </div>

    {/* Onther Information */}
    <div className="border-l-2 border-red-500 flex-1 flex-col justify-center items-center ">
      <a
        href="https://github.com/0oqopo0"
        target="_blank"
        className="flex  items-center justify-center m-2 pr-1 pl-1  gap-2 text-md  rounded-3xl mb-1   bg-gray-800 dark:bg-black/60 hover:bg-green-200/40 dark:text-sky-600  transition ease-in-out delay-3  hover:-translate-y-.5 hover:scale-105 border-1 border-gray-500"
      ></a>
    </div>
  </div>
);

export default Footer;
