import React, { createContext, useContext, useState, useEffect } from 'react';
import UserService from '../service/UserService';

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
const [currentMode, setCurrentMode] = useState('Dark');
const [themeSettings, setThemeSettings] = useState(false);
const [activeMenu, setActiveMenu] = useState(false);
const [activeMenuBTN, setActiveMenuBTN] = useState(false);
const [isClicked, setIsClicked] = useState(initialState);
const [contactClicked, setcontactClicked] = useState(true);
const [clickName, setClickName] = useState("firsssssst");
const [mobileMenu, setMobileMenu] = useState(true);
const [isOpen, setIsOpen] = useState(false);
const [isOpenUserAccess, setIsOpenUserAccess] = useState(false);

// وضعیت احراز هویت و اطلاعات کاربر
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [profileInfo, setProfileInfo] = useState({});

useEffect(() => {
const checkAuth = () => {
const authStatus = UserService.isAuthenticated();
setIsAuthenticated(authStatus);
if (authStatus) {
fetchProfileInfo();
}
};

checkAuth();
const interval = setInterval(checkAuth, 1000); // چک کردن وضعیت احراز هویت هر ثانیه

return () => clearInterval(interval); // پاک کردن اینتروال هنگام خروج از کامپوننت
}, []);

const fetchProfileInfo = async () => {
try {
const token = localStorage.getItem('token'); // Retrieve the token from localStorage
const response = await UserService.getYourProfile(token);
setProfileInfo(response.ourUsers);
} catch (error) {
console.error('Error fetching profile information:', error);
}
};

const setMode = (e) => {
setCurrentMode(e.target.value);
localStorage.setItem('themeMode', e.target.value);
};

const setColor = (color) => {
setCurrentColor(color);
localStorage.setItem('colorMode', color);
};

const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

const pasClickName = (DataLen, DataTitle, subItem, name) => {
setClickName("DataLen :" + DataLen + " DataTitle : " + DataTitle + " subItem : " + subItem + " name : " + name);
};

return (
<StateContext.Provider value={{
currentColor, currentMode, activeMenu, activeMenuBTN, screenSize, isClicked, initialState, themeSettings, contactClicked, clickName, mobileMenu, isOpen, isOpenUserAccess, isAuthenticated, profileInfo,
setScreenSize, handleClick, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, setActiveMenuBTN, setThemeSettings, setcontactClicked, setClickName, pasClickName, setMobileMenu, setIsOpen, setIsOpenUserAccess
}}>
{children}
</StateContext.Provider>
);
};

export const useStateContext = () => useContext(StateContext);