import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // اضافه کردن SweetAlert
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
import beachVid from "../Pool/Videos/beachVid.mp4"; // مسیر ویدیو

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.registeration(formData, token);

      if (response.statusCode === 400) {
        Swal.fire({
          icon: "error",
          title: "<h2 class='swal2-title'>کاربر گرامــی</h2>",
          html: "<p class='swal2-html-container'>" + response.message + "</p>",
          showConfirmButton: false,
          timer: 2500,
        });
        return;
      }

      setFormData({
        name: "",
        email: "",
        password: "",
        city: "",
      });

      Swal.fire({
        icon: "success",
        title: "<h2 class='swal2-title'>موفق</h2>",
        html: "<p class='swal2-html-container'>کاربر با موفقیت ثبت شد</p>",
        showConfirmButton: false,
        timer: 3000,
      });

      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
      Swal.fire({
        icon: "error",
        title: "<h2 class='swal2-title'>کاربر گرامــی</h2>",
        html: "<p class='swal2-html-container'>خطایی در ثبت کاربر رخ داد</p>",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <motion.div
        className="relative bg-white/60 dark:bg-black/40 bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded shadow-md w-full max-w-md mx-auto my-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          ثبت‌نام
        </motion.h2>
        <motion.form onSubmit={handleSubmit} variants={itemVariants}>
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-gray-700">نام:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-gray-700">ایمیل:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-gray-700">رمز عبور:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-gray-700">شهر:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="شهرتان را وارد کنید"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            variants={itemVariants}
          >
            ثبت‌نام
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default Registration;