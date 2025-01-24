import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // وارد کردن sweetalert2
import UserService from "../service/UserService";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaUsers, FaArrowRight } from "react-icons/fa"; // آیکون‌ها
import "../index.css";

function UpdateUser() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    city: "",
  });
  const [roles, setRoles] = useState([]);

  // گرفتن نقش‌ها و داده‌های کاربر
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await UserService.getAllRoles(token);
        setRoles(response?.roles || []);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await UserService.getUserById(userId, token);

        if (response?.ourUsers) {
          const { name, email, roles, city } = response.ourUsers;
          const role = roles.length > 0 ? roles[0].roleCodeEng : ""; // تغییر به roleCodeEng
          setFormData({ name, email, password: "", role, city });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchRoles();
    fetchUserData();
  }, [userId]);

  // تغییر داده‌ها در فرم
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


// ارسال داده‌های فرم
const handleSubmit = async (e) => {
  e.preventDefault();

  const updatedData = {
    ...formData,
    roles: [{ roleCodeEng: formData.role }], // نقش مستقیماً از فرم گرفته می‌شود
  };

  try {
    const token = localStorage.getItem("token");
    const response = await UserService.updateUser(userId, updatedData, token);

    // اگر درخواست موفقیت‌آمیز بود (کد وضعیت 200)
    if (response.statusCode === 200) {
      Swal.fire({
        title: "موفقیت",
        text: "کاربر با موفقیت به‌روزرسانی شد.",
        icon: "success",
        confirmButtonText: "متوجه شدم ",
        timer: 5000,
        timerProgressBar: true,
        willOpen: () => {
          const swalElement = Swal.getPopup();
          swalElement.addEventListener("mouseover", () => Swal.stopTimer());
          swalElement.addEventListener("mouseout", () => Swal.resumeTimer());
        },
      }).then(() => navigate("/admin/user-management"));
    } else if (response.statusCode === 409) {
      Swal.fire({
        title: "ناموفق",
        text: "ایمیل تکراری است.",
        icon: "error",
        confirmButtonText: "متوجه شدم ",
        timer: 5000,
        timerProgressBar: true,
        willOpen: () => {
          const swalElement = Swal.getPopup();
          swalElement.addEventListener("mouseover", () => Swal.stopTimer());
          swalElement.addEventListener("mouseout", () => Swal.resumeTimer());
        },
      });
    } else if (response.statusCode === 404) {
      Swal.fire({
        title: "خطا",
        text: "کاربر موردنظر پیدا نشد.",
        icon: "error",
        confirmButtonText: "متوجه شدم ",
        timer: 5000,
        timerProgressBar: true,
        willOpen: () => {
          const swalElement = Swal.getPopup();
          swalElement.addEventListener("mouseover", () => Swal.stopTimer());
          swalElement.addEventListener("mouseout", () => Swal.resumeTimer());
        },
      });
    } else if (response.statusCode === 401) {
      Swal.fire({
        title: "خطا",
        text: "هیچ نقش معتبری پیدا نشد.",
        icon: "error",
        confirmButtonText: "متوجه شدم ",
        timer: 5000,
        timerProgressBar: true,
        willOpen: () => {
          const swalElement = Swal.getPopup();
          swalElement.addEventListener("mouseover", () => Swal.stopTimer());
          swalElement.addEventListener("mouseout", () => Swal.resumeTimer());
        },
      });
    } else if (response.statusCode === 402) {
      Swal.fire({
        title: "خطا",
        text: "هیچ نقشی برای کاربر انتخاب نشده است.",
        icon: "error",
        confirmButtonText: "متوجه شدم ",
        timer: 5000,
        timerProgressBar: true,
        willOpen: () => {
          const swalElement = Swal.getPopup();
          swalElement.addEventListener("mouseover", () => Swal.stopTimer());
          swalElement.addEventListener("mouseout", () => Swal.resumeTimer());
        },
      });
    } else {
      // اگر هیچ یک از شرایط بالا مطابقت نداشت
      Swal.fire({
        title: "خطای نامشخص",
        text: "خطای غیرمنتظره‌ای رخ داد.",
        icon: "error",
        confirmButtonText: "متوجه شدم ",
        timer: 5000,
        timerProgressBar: true,
        willOpen: () => {
          const swalElement = Swal.getPopup();
          swalElement.addEventListener("mouseover", () => Swal.stopTimer());
          swalElement.addEventListener("mouseout", () => Swal.resumeTimer());
        },
      });
    }
  } catch (error) {
    // مدیریت خطاهای سطح سرور یا شبکه
    Swal.fire({
      title: "خطا",
      text: "مشکلی در ارسال درخواست رخ داد. لطفاً دوباره امتحان کنید.",
      icon: "error",
      confirmButtonText: "متوجه شدم ",
      timer: 5000,
      timerProgressBar: true,
      willOpen: () => {
        const swalElement = Swal.getPopup();
        swalElement.addEventListener("mouseover", () => Swal.stopTimer());
        swalElement.addEventListener("mouseout", () => Swal.resumeTimer());
      },
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
              {/* <option value="">انتخاب نقش</option> */}
              {roles.map((role) => (
                <option key={role.id} value={role.roleCodeEng}>
                  {role.roleCodePer} {/* نمایش نام فارسی نقش */}
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
        </motion.form>

        <Link
          to="/admin/user-management"
          className="mt-6 inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 w-full"
        >
          <FaArrowRight className="ml-2 text-xl" />
          <span className="flex-grow text-center">مدیریت کاربران</span>
          <FaUsers className="mr-2 text-xl" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default UpdateUser;
