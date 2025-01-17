import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // وارد کردن sweetalert2
import UserService from "../service/UserService";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaUsers, FaArrowLeft , FaArrowRight } from "react-icons/fa"; // آیکون‌ها
import "../index.css";

function UpdateUser() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", // نقش فارسی
    city: "",
  });
  const [roles, setRoles] = useState([]);
  const [errorShown, setErrorShown] = useState(false);

  // نقشه تبدیل نقش فارسی به کد انگلیسی
  const roleMapping = {
    "کاربر عادی": "USER",
    "مدیر سیستم": "ADMIN",
    "مدیر": "MANAGER",
    // اضافه کردن سایر نقش‌ها
  };

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await UserService.getAllRoles(token);

        if (response && Array.isArray(response.roles)) {
          setRoles(response.roles);
        } else {
          setRoles([]);
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
        setRoles([]);
      }
    };

    const fetchUserDataById = async (userId) => {
      try {
        const token = localStorage.getItem("token");
        const response = await UserService.getUserById(userId, token);
        if (response && response.ourUsers) {
          const { name, email, roles, city } = response.ourUsers;
          const role = roles?.length > 0 ? roles[0].roleCodePer : "";
          setFormData({ name, email, role, city, password: "" });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchRoles();
    fetchUserDataById(userId);
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roleInEnglish = roleMapping[formData.role] || formData.role;

    const updatedFormData = {
      ...formData,
      roles: [{ roleCodeEng: roleInEnglish }],
    };

    try {
      const response = await fetch('http://localhost:8585/admin/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        // در صورت عدم موفقیت، بررسی وضعیت پاسخ
        console.error('Error from server:', response.statusText);
        Swal.fire({
          title: 'خطا',
          text: 'در هنگام بروزرسانی کاربر مشکلی پیش آمد.',
          icon: 'error',
          confirmButtonText: 'باشه',
        });
        return;
      }

      const result = await response.json();
      console.log('User updated successfully:', result);

      // پس از به‌روزرسانی موفق، به صفحه مدیریت کاربران هدایت می‌شود
      navigate("/admin/user-management");

    } catch (error) {
      console.error('An error occurred while sending the request:', error);
      Swal.fire({
        title: 'خطا',
        text: 'در ارتباط با سرور مشکلی پیش آمد.',
        icon: 'error',
        confirmButtonText: 'باشه',
      });
    }
  };

  return (
    <motion.div className="flex items-center justify-center min-h-screen">
      <motion.div className="bg-green-400 p-8 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded shadow-md w-full max-w-md">

        <motion.h2 className="text-2xl font-bold mb-6 text-center">به‌روزرسانی کاربر</motion.h2>
        <motion.form onSubmit={handleSubmit}>
          <motion.div className="mb-4">
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
          <motion.div className="mb-4">
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
          <motion.div className="mb-4">
            <label className="block text-gray-700">رمز عبور:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </motion.div>
          <motion.div className="mb-4">
            <label className="block text-gray-700">نقش:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">انتخاب نقش</option>
              {roles.map((role) => (
                <option key={role.id} value={role.roleCodeEng}>
                  {role.roleCodePer} {/* نمایش نقش به زبان فارسی */}
                </option>
              ))}
            </select>
          </motion.div>
          <motion.div className="mb-4">
            <label className="block text-gray-700">شهر:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            به‌روزرسانی
          </motion.button>

                  

                {/* دکمه مدیریت کاربران */}
                <Link
          to="/admin/user-management"
          className="mt-6 inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 opacity-90 hover:opacity-100 transition-opacity duration-300 w-full"
        >
          <FaUsers className="mr-2 text-xl" /> {/* آیکون مدیریت کاربران سمت چپ */}
          <span className="flex-grow text-center">مدیریت کاربران</span> {/* عنوان وسط */}
          <FaArrowRight className="ml-2 text-xl" /> {/* آیکون فلش برگشت سمت راست */}
        </Link>
        </motion.form>

      </motion.div>
      
    </motion.div>
  );
}

export default UpdateUser;
