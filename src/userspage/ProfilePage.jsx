import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import UserService from "../service/UserService";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaCity, FaCalendarAlt } from "react-icons/fa";
import ProfilePage00 from "../Pool/Images/Pub/ProfilePage00.webp"; // مسیر تصویر پسزمینه









const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.25 },
  }),
};

const cellVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getYourProfile(token);
      setProfileInfo(response.ourUsers);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات پروفایل:", error);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundImage: `url(${ProfilePage00})`,
      }}
      // className="custom-ui bg-sky-800/60 p-4 rounded shadow-md mt-28"
      // className="custom-ui bg-[#5b6b47]/40 p-4 rounded shadow-md mt-28"
      className="custom-ui bg-[#0c2a36] p-4 rounded shadow-md h-screen"
    >
      <Container maxWidth="md" className="mt-28">
        <Paper elevation={3} className="p-4">
          <Typography variant="h4" align="center" gutterBottom>
            اطلاعات پروفایل
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className="bg-yellow-500">
                  <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', color: '#34abda' }}>
                    Title
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', color: '#34abda' }}>
                    مقدار
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', color: '#34abda' }}>
                    مشخصه
                  </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="bg-black/80">
                <motion.tr initial="hidden" animate="visible" variants={rowVariants}>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    Name
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    {profileInfo.name}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    نام
                  </TableCell>
                  <TableCell align="center">
                    <motion.div initial="hidden" animate="visible" variants={cellVariants} className="text-3xl text-yellow-500">
                      <FaUser />
                    </motion.div>
                  </TableCell>
                </motion.tr>
                <motion.tr initial="hidden" animate="visible" variants={rowVariants}>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    Email
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    {profileInfo.email}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    ایمیل
                  </TableCell>
                  <TableCell align="center">
                    <motion.div initial="hidden" animate="visible" variants={cellVariants} className="text-3xl text-yellow-500">
                      <FaEnvelope />
                    </motion.div>
                  </TableCell>
                </motion.tr>
                <motion.tr initial="hidden" animate="visible" variants={rowVariants}>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    City
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    {profileInfo.city}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    شهر
                  </TableCell>
                  <TableCell align="center">
                    <motion.div initial="hidden" animate="visible" variants={cellVariants} className="text-3xl text-yellow-500">
                      <FaCity />
                    </motion.div>
                  </TableCell>
                </motion.tr>
                <motion.tr initial="hidden" animate="visible" variants={rowVariants}>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    Created At
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    {profileInfo.createdAt}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', color: '#34abda' }}>
                    تاریخ ایجاد
                  </TableCell>
                  <TableCell align="center">
                    <motion.div initial="hidden" animate="visible" variants={cellVariants} className="text-3xl text-yellow-500">
                      <FaCalendarAlt />
                    </motion.div>
                  </TableCell>
                </motion.tr>
                {profileInfo.role === "ADMIN" && (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      <motion.div variants={buttonVariants} whileHover="hover">
                        <Button variant="contained" color="primary" component={Link} to={`/update-user/${profileInfo.id}`} className="mt-4">
                          ویرایش این پروفایل
                        </Button>
                      </motion.div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default ProfilePage;
