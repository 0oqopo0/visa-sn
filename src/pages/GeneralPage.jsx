import React, { useState } from "react";

import { useStateContext } from "../contexts/ContextProvider";







const GeneralPage = () => {
  const toolbarOptions = ["Search"];
  const [searchTerm, setSearchTerm] = useState("");
  
  // const [clickName, setClickName] = useState("");
  
  
  const {
    activeMenu,
    activeMenuBTN,
    setActiveMenuBTN,
    setScreenSize,
    screenSize,
    contactClicked,
    setMode,
     clickName
  } = useStateContext();
  
  console.log(" clickNameeeeeeeeeeeeeeee :" + clickName);


  return (
    <div className="flex mt-28 ml-5 mr-5  bg-green-400/60 rounded-3xl justify-center items-center  p-9 flex-col">
      <p className="flex bg-black/50 rounded-2xl p-3 justify-start text-justify ..." dir="rtl"  >
      GeneralPageGeneralPageGeneralPageGeneralPage
      </p>
      <>
     
    </>
    </div>
  );
};
export default GeneralPage;
