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

////////////////////////////////////////////////////////////////////

function UserManagementPage() {
  // استفاده از State ها
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = 10; // تعداد رکوردها در هر صفحه

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
  const recordsPerPage = users.length; // تعداد رکوردها در هر صفحه
   
  // تابع برای حذف کاربر
  const deleteUser = async (userId, userName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <motion.div
            className="custom-ui bg-red-400 p-4 rounded shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-xl mb-4">Confirm Deletion</h1>
            <p className="mb-4">
              Are you sure you want to delete user <strong>{userName}</strong>?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-red-300 p-4 py-2 rounded hover:bg-gray-400 transition duration-300"
                onClick={onClose}
              >
                No
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                onClick={async () => {
                  try {
                    const token = localStorage.getItem("token");
                    await UserService.deleteUser(userId, token);
                    fetchUsers();
                    onClose();
                  } catch (error) {
                    console.error("Error deleting user:", error);
                  }
                }}
              >
                Yes, Delete
              </button>
            </div>
          </motion.div>
        );
      },
    });
  };

  // محاسبه صفحات برای پجینیشن
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(users.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ///////////////////////////////////////

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // تعریف ستون‌ها برای DataGrid
  const columns = [
    {
      field: "row",
      headerName: "ردیف",
      width: 70,
      renderCell: (params) => params.row.index + 1,
    },
    {
      field: "Actions",
      headerName: "عملیات",
      width: 150,
      filterable: false,
      cellClassName: "yellow-background",
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

  // تنظیم ردیف‌ها برای DataGrid
  const rows = currentRecords.map((user, index) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.roles.map((role) => role.roleCodePer).join(", "),
    createDate: user.createDate,
    index: index, // اضافه کردن اندیس برای ردیف
  }));

  const localeTextFa = {
    noRowsLabel: "اطلاعاتی موجود نیست",
    columnMenuSortAsc: "مرتب‌سازی صعودی",
    columnMenuSortDesc: "مرتب‌سازی نزولی",
    columnMenuFilter: "فیلتر",
    columnMenuHideColumn: "مخفی کردن ستون",
    columnMenuShowColumns: "نمایش ستون‌ها",
    columnMenuManageColumns: "مدیریت ستــون ها",
    columnMenuUnsort: "بازگشت به حالت قبل",
    TooltipLableValue: "مدیریت ها",
  };

  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover "
      style={{
        backgroundImage: `url(${UserManagementPageC})`,
      }}
    >
      <ToastContainer />
      <motion.div
        className="relative bg-green-400 bg-opacity-30 backdrop-filter backdrop-blur-lg p-2 rounded shadow-md w-full max-w-4xl border border-sky-400 mt-32 mb-28"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-2xl mb-6 text-center text-sky-500">
          مدیریت کاربران
        </h2>
        <div className="flex flex-row-reverse justify-center mb-4">
          <p className="text-lg">مجمــوع کاربــران : ( {users.length} )</p>
        </div>

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
    rowsPerPageOptions={[10, 20, 50]} // گزینه‌های تعداد رکورد در هر صفحه
    pagination
    onPageChange={(params) => setCurrentPage(params.page + 1)} // بروزرسانی صفحه
    localeText={localeTextFa} // ترجمه متن‌ها
    components={{
      Toolbar: GridToolbar, // افزودن نوار ابزار برای فیلتر و مرتب‌سازی
    }}
    sx={{
      direction: "rtl",
      fontSize: "18px",
      color: "#333",
      "& .MuiDataGrid-root": {
        backgroundColor: "#f5f5f5",
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "#d3f4d8",
        color: "#000",
      },
      "& .MuiDataGrid-cell": {
        textAlign: "right",
      },
      "& .MuiDataGrid-row:nth-of-type(odd)": {
        backgroundColor: "#e6f7e6", // سبز کم‌رنگ برای ردیف‌های فرد
      },
      "& .MuiDataGrid-row:nth-of-type(even)": {
        backgroundColor: "#ffffff", // سفید برای ردیف‌های زوج
      },
      "& .MuiDataGrid-footerContainer": {
        backgroundColor: "#f5f5f5",
      },
    }}
  />
</div>

      </motion.div>
    </motion.div>
  );
}

export default UserManagementPage;
