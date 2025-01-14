
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import UserService from "../service/UserService";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";  // اضافه کردن این خط برای وارد کردن استایل

function UpdateUser() {
const navigate = useNavigate();
const { userId } = useParams();
const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "", city: "" });
const [roles, setRoles] = useState([]);
const [errorShown, setErrorShown] = useState(false);

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
setRoles([]);
}
};

const fetchUserDataById = async (userId) => {
try {
const token = localStorage.getItem("token");
const response = await UserService.getUserById(userId, token);
const { name, email, roles, city } = response.ourUsers;
const role = roles.length > 0 ? roles[0].roleCodePer : "";
setFormData({ name, email, role, city, password: "" });
} catch (error) {
console.error("خطا در واکشی دادههای کاربر:", error);
}
};

fetchRoles();
fetchUserDataById(userId);
}, [userId]);

const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
const token = localStorage.getItem("token");
const response = await UserService.updateUser(userId, formData, token);

if (response.statusCode === 400) {
setErrorShown(true);
Swal.fire({
icon: "",
title: "<h2 class='swal2-title'>کاربر گرامــی</h2>",
html: "<p class='swal2-html-container'>ایمیل استفاده شده تکراری است</p>",
showConfirmButton: false,
timer: 25000,
customClass: {
popup: 'swal2-popup',
title: 'swal2-title',
htmlContainer: 'swal2-html-container',
icon: 'swal2-icon'
}
}).then(() => setErrorShown(false));
return;
}

setFormData({ name: "", email: "", password: "", role: "", city: "" });
if (response.statusCode === 200) {
Swal.fire({
icon: "success",
title: "<h2 class='swal2-title'>موفق</h2>",
html: "<p class='swal2-html-container'>کاربر با موفقیت بهروزرسانی شد</p>",
showConfirmButton: false,
timer: 3000
});
navigate("/admin/user-management");
}
} catch (error) {
Swal.fire({
icon: "",
title: "<h2 class='swal2-title'>کاربر گرامــی</h2>",
html: "<p class='swal2-html-container'>خطایی در بهروزرسانی کاربر رخ داد</p>",
showConfirmButton: false,
timer: 3000
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
<motion.div className="flex items-center justify-center min-h-screen" initial="hidden" animate="visible" variants={containerVariants}>
<motion.div className="bg-green-400 p-8 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded shadow-md w-full max-w-md" initial="hidden" animate="visible" variants={containerVariants}>
<motion.h2 className="text-2xl font-bold mb-6 text-center" variants={itemVariants}>بهروزرسانی کاربر</motion.h2>
<motion.form onSubmit={handleSubmit} variants={itemVariants}>
<motion.div className="mb-4" variants={itemVariants}>
<label className="block text-gray-700">نام:</label>
<input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2 border rounded" />
</motion.div>
<motion.div className="mb-4" variants={itemVariants}>
<label className="block text-gray-700">ایمیل:</label>
<input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2 border rounded" />
</motion.div>
<motion.div className="mb-4" variants={itemVariants}>
<label className="block text-gray-700">رمز عبور:</label>
<input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" />
</motion.div>
<motion.div className="mb-4" variants={itemVariants}>
<label className="block text-gray-700">نقش:</label>
<select name="role" value={formData.role} onChange={handleInputChange} className="w-full px-3 py-2 border rounded">
<option value="">یک نقش انتخاب کنید</option>
{Array.isArray(roles) && roles.map((role) => (
<option key={role.id} value={role.roleCodePer}>
{role.roleCodePer}
</option>
))}
</select>
</motion.div>
<motion.div className="mb-4" variants={itemVariants}>
<label className="block text-gray-700">شهر:</label>
<input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="شهرتان را وارد کنید" required className="w-full px-3 py-2 border rounded" />
</motion.div>
<motion.button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" variants={itemVariants}>بهروزرسانی</motion.button>
</motion.form>
</motion.div>
</motion.div>
);
}

export default UpdateUser;
