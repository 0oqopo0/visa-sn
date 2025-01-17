import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import UserService from "../service/UserService";
import UserManagementPageC from "../Pool/Images/Pub/UserManagementPageC.webp"; // مسیر تصویر پسزمینه
import { FaTrash, FaEdit } from "react-icons/fa"; // اضافه کردن آیکونهای حذف و بهروزرسانی
import { FaUserPlus } from "react-icons/fa"; // Importing the user icon
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from "moment-jalaali"; // استفاده از moment-jalaali به جای moment
import { Button } from "@mui/material";
import { useStateContext } from "../contexts/ContextProvider";

function UserManagementPage() {
  const {
    currentMode, // بررسی حالت روشن یا تاریک
  } = useStateContext();

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, []);

  // تابع برای دریافت کاربران
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getAllUsers(token);
      const sortedUsers = response.ourUsersList.sort((a, b) => b.id - a.id);
      setUsers(sortedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const recordsPerPage = users.length;

  // ستون‌های گرید
  const columns = [
    {
      field: "row",
      headerName: "ردیف",
      width: 70,
      renderCell: (params) => params.row.index + 1,
    },
    {
      field: "Actions",
      headerName: "به روز رسانی",
      width: 150,
      filterable: false,
      renderCell: (params) => (
        <div>
          <motion.div>
            <Link to={`/update-user/${params.row.id}`}>
              <Button>
                <div className="flex items-center justify-center bg-white rounded-lg bg-opacity-80 backdrop-filter backdrop-blur-lg text-sky-400 px-1 py-1 text-20 hover:bg-yellow-600 transition duration-300">
                  <FaEdit />
                </div>
              </Button>
            </Link>
            <Button onClick={() => deleteUser(params.row.id, params.row.name)}>
              <div className="flex items-center justify-center bg-black rounded-lg bg-opacity-80 backdrop-filter backdrop-blur-lg text-red-400 px-1 py-1 text-20 hover:bg-yellow-600 transition duration-300">
                <FaTrash />
              </div>
            </Button>
          </motion.div>
        </div>
      ),
    },
    { field: "id", headerName: "شناسه کاربری", width: 150 },
    { field: "name", headerName: "نام کاربری", width: 200 },
    { field: "email", headerName: "ایمیل", width: 250 },
    { field: "role", headerName: "نقش", width: 150 },
    {
      field: "createDate",
      headerName: "تاریخ ایجاد",
      width: 200,
      renderCell: (params) => {
        const dateString = params.value;
        const formattedDate = moment(dateString)
          .locale("fa")
          .format("HH:mm:ss jYYYY/jMM/jDD");
        return formattedDate;
      },
    },
  ];

  // ردیف‌ها برای گرید
  const rows = users.map((user, index) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.roles.map((role) => role.roleCodePer).join(", "),
    createDate: user.createDate,
    index: index,
  }));

  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url(${UserManagementPageC})`,
      }}
    >
      <ToastContainer />
      <motion.div
        className="relative bg-[#EEEDDE]/90 dark:bg-[#2C3333]/80 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded shadow-md w-11/12 border border-sky-400 mt-32 m-20 p-2"
      >
        <h2 className="text-2xl mb-6 text-center text-sky-500">مدیریت کاربران</h2>
        <Link
          to="/register"
          className="flex bg-sky-500 bg-opacity-90 backdrop-filter backdrop-blur-lg text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mb-2"
        >
          Add User
        </Link>
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={recordsPerPage}
            rowsPerPageOptions={[10, 20, 50]}
            pagination
            localeText={{
              noRowsLabel: "اطلاعاتی موجود نیست",
            }}
            components={{
              Toolbar: GridToolbar,
            }}
            sx={{
              direction: "rtl", // راست‌چین کردن تمامی مقادیر
              fontSize: "18px",
              color: currentMode === "Dark" ? "skyblue" : "#333", // رنگ فونت در حالت دارک به آبی آسمانی
              "& .MuiDataGrid-cell": {
                textAlign: "right", // متن تمام سلول‌ها راست‌چین شود
              },
              "& .MuiDataGrid-columnHeaders": {
                textAlign: "right",
                backgroundColor: currentMode === "Dark" ? "#3C4A4A" : "#d3f4d8",
                color: currentMode === "Dark" ? "skyblue" : "#000", // رنگ فونت هدر در حالت دارک
              },
              "& .MuiDataGrid-row": {
                transition: "background-color 0.5s ease",
              },
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default UserManagementPage;
