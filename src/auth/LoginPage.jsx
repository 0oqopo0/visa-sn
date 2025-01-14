
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";
import { useStateContext } from "../contexts/ContextProvider";
import Nature_159101 from "../Pool/Videos/Nature_159101.mp4"; // مسیر ویدیو
import mountain from "../Pool/Videos/mountain.mp4"; // مسیر ویدیو

function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();
const {
activeMenu,
activeMenuBTN,
setActiveMenuBTN,
setScreenSize,
screenSize,
contactClicked,
setMode,
clickName,
pasClickName,
setMobileMenu,
mobileMenu,
isOpen,
setIsOpen,
} = useStateContext();

const handleSubmit = async (e) => {
e.preventDefault();

try {
const userData = await UserService.login(email, password);
console.log(userData);
if (userData.token) {
localStorage.setItem("token", userData.token);
localStorage.setItem("role", userData.role);
navigate("/");
setIsOpen(true);
} else {
setError(userData.message);
}
} catch (error) {
console.log(error);
setError(error.message);
setTimeout(() => {
setError("");
}, 5000);
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
src={mountain}
// src={Nature_159101}
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
Login
</motion.h2>
{error && (
<motion.p className="text-red-500 mb-4" variants={itemVariants}>
{error}
</motion.p>
)}
<motion.form onSubmit={handleSubmit} variants={itemVariants}>
<motion.div className="mb-4" variants={itemVariants}>
<label className="block text-red-300">Email:</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
className="w-full px-3 py-2 border rounded"
/>
</motion.div>
<motion.div className="mb-4" variants={itemVariants}>
<label className="block text-red-500">Password:</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
className="w-full px-3 py-2 border rounded"
/>
</motion.div>
<motion.button
type="submit"
className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
variants={itemVariants}
>
Login
</motion.button>
</motion.form>
</motion.div>
</motion.div>
);
}

export default LoginPage;
