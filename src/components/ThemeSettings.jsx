import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { CgClose } from "react-icons/cg";


import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen text-black dark:text-white bg-white/70 dark:bg-black/90  w-300">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="bg-gray-500/30 text-2xl rounded-full hover:bg-gray-500/60 p-3 m-2 "
          >
            <CgClose className=" text-2xl text-red-600 " />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label className="ml-2 text-md cursor-pointer">Light Mode</label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "Dark"}
            />
            <label className="ml-2 text-md cursor-pointer">Dark Mode</label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              // <TooltipComponent
              //   key={index}
              //   content={item.name}
              //   position="TopCenter"
              // >
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              // </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
