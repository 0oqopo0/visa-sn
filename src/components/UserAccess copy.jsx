import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CgMenu, CgMenuRightAlt } from 'react-icons/cg';
import {
    FaBars,
    FaHome,
    FaLock,
    FaMoneyBill,
    FaUser,
    FaSignOutAlt,
    FaUserCog,
    FaEraser,
  } from "react-icons/fa";



const UserAccess = ({ isAuthenticated, isAdmin, handleLogout, handleMobileMenu, mobileMenu }) => {
    return (
    ///////////////// mobileMenu //////////////
    ///////////////// mobileMenu //////////////
    ///////////////// mobileMenu //////////////
    <div className="flex mb-1 mt-1 mr-1 text-sm bg-[#152D35]/50 text-sky-800 dark:text-sky-500 items-center justify-between text-md rounded-br-md rounded-md w-full h-24">
    <motion.div
    initial={{ y: "80%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.5, ease: "backIn" }}
    onClick={handleMobileMenu}
    className="flex items-center justify-start relative text-3xl p-3 rounded-full bg-black/80"
    >
    {mobileMenu ? (
    <CgMenu className="text-orange-400" />
    ) : (
    <CgMenuRightAlt className="text-red-800" />
    )}
    </motion.div>
    

    {/* mobileMenu///////////// */}






    {isAuthenticated && (
    <motion.div
    className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3 dark:text-sky-500"
    initial={{ opacity: 0, x: -250 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    >
    <Link to="/" 
     className="hover:text-yellow-400">
    
    onClick={(event) => {  
              handleLogout();
              setIsOpen(false);
            }}
    <FaSignOutAlt className="inline-block mr-2" />
    خروج
    </Link>
    </motion.div>
    )}
    
    {isAdmin && (
    <motion.div
    className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3 dark:text-sky-500"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    >
    <Link to="/admin/user-management" className="hover:text-yellow-400"
        onClick={(event) => {  
            
            setIsOpen(false);
          }}
    >
    <FaUserCog className="inline-block mr-2 text-4xl" />
    مدیریت کاربران
    </Link>
    </motion.div>
    )}
    
    {isAuthenticated && (
    <motion.div
    className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3 dark:text-sky-500"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    >
    <Link to="/profile" className="hover:text-yellow-400"
        onClick={(event) => {  
            setIsOpen(false);
          }}
    >
    <FaUser className="inline-block mr-2 text-4xl" />
    پروفایل
    </Link>
    </motion.div>
    )}
    
    {!isAuthenticated && (
    <>
    <motion.div
    className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3 dark:text-sky-500"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    >
    <Link to="/Registration" className="hover:text-yellow-400">
    <FaUserCog className="inline-block mr-2 text-4xl" />
    ثبت نام
    </Link>
    </motion.div>
    
    <motion.div
    className="ml-4 mt-2 mb-2 mr-2 text-lg rounded-md bg-black/90 hover:bg-gray-500/60 p-3 dark:text-sky-500"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    >
    <Link to="/Login" className="hover:text-yellow-400">
    <FaUserCog className="inline-block mr-2 text-4xl" />
    ورود
    </Link>
    </motion.div>
    </>
    )}
    </div>
    );
    };
    
    export default UserAccess;
    