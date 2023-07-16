import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeMenuBTN, setActiveMenuBTN] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [contactClicked, setcontactClicked] = useState(false);
  let [clickName, setClickName] = useState("firsssssst");
  const [mobileMenu, setMobileMenu] = useState(true);
  // const [mobileMenu, setMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });



  const pasClickName = (DataLen,DataTitle,subItem,name) => {
    setClickName("DataLen :" + DataLen + " DataTitle : " + DataTitle +" subItem : " + subItem + " name : " + name);
    // localStorage.setItem('colorMode', color);
  };





  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu ,activeMenuBTN, screenSize, isClicked, initialState ,themeSettings ,contactClicked ,clickName ,mobileMenu ,isOpen , setScreenSize, handleClick, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, setActiveMenuBTN, setThemeSettings ,setcontactClicked ,setClickName ,pasClickName, setMobileMenu,setIsOpen}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
