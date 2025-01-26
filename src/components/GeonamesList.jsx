import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Grid,
  Card,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaSave } from "react-icons/fa";
import GeoNamesService from "../service/GeoNamesService";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
const GeonamesList = () => {
  const [sourceRows, setSourceRows] = useState([]);
  const [destinationRows, setDestinationRows] = useState([]);
  const [checkedSource, setCheckedSource] = useState([]);
  const [checkedDestination, setCheckedDestination] = useState([]);
  const [sourcePage, setSourcePage] = useState(1);
  const [destinationPage, setDestinationPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GeoNamesService.fetchGeoNames("api");
        if (data && Array.isArray(data)) {
          const formattedData = data.map((item) => ({
            id: item.geonameId,
            geonameId: item.geonameId,
            toponymName: item.toponymName || "ناشناس",
            countryId: item.countryId || "N/A",
            countryCode: item.countryCode || "N/A",
            fcodeName: item.fcodeName || "N/A",
            lng: item.lng || 0,
            lat: item.lat || 0,
          }));
          setSourceRows(formattedData);
        } else {
          console.error("Invalid data format", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleToggleSource = (id) => () => {
    const newChecked = checkedSource.includes(id)
      ? checkedSource.filter((item) => item !== id)
      : [...checkedSource, id];
    setCheckedSource(newChecked);
  };

  const handleToggleDestination = (id) => () => {
    const newChecked = checkedDestination.includes(id)
      ? checkedDestination.filter((item) => item !== id)
      : [...checkedDestination, id];
    setCheckedDestination(newChecked);
  };

  const handleSelectAllSource = () => {
    if (checkedSource.length === sourceRows.length) {
      setCheckedSource([]);
    } else {
      setCheckedSource(sourceRows.map((row) => row.id));
    }
  };

  const handleSelectAllDestination = () => {
    if (checkedDestination.length === destinationRows.length) {
      setCheckedDestination([]);
    } else {
      setCheckedDestination(destinationRows.map((row) => row.id));
    }
  };

  const handleSelectPageSource = () => {
    setCheckedSource(
      sourceRows
        .slice((sourcePage - 1) * rowsPerPage, sourcePage * rowsPerPage)
        .map((row) => row.id)
    );
  };

  const handleSelectPageDestination = () => {
    setCheckedDestination(
      destinationRows
        .slice(
          (destinationPage - 1) * rowsPerPage,
          destinationPage * rowsPerPage
        )
        .map((row) => row.id)
    );
  };

  const handleTransferToDestination = () => {
    const selectedRows = sourceRows.filter((row) =>
      checkedSource.includes(row.id)
    );
    setDestinationRows([...destinationRows, ...selectedRows]);
    setSourceRows(sourceRows.filter((row) => !checkedSource.includes(row.id)));
    setCheckedSource([]);
  };

  const handleTransferToSource = () => {
    const selectedRows = destinationRows.filter((row) =>
      checkedDestination.includes(row.id)
    );
    setSourceRows([...sourceRows, ...selectedRows]);
    setDestinationRows(
      destinationRows.filter((row) => !checkedDestination.includes(row.id))
    );
    setCheckedDestination([]);
  };

  const handlePageChange = (type, page) => {
    if (type === "source") setSourcePage(page);
    if (type === "destination") setDestinationPage(page);
  };

  const filteredRows = (rows, filter) => {
    return rows.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

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

  // ////////////////////////////////

  const columns = [
    { field: "geonameId", headerName: "شناسه جغرافیایی", width: 150 },
    { field: "toponymName", headerName: "نام مکان", width: 180 },
    { field: "countryId", headerName: "کد کشور", width: 120 },
    { field: "countryCode", headerName: "کد منطقه", width: 140 },
    { field: "fcodeName", headerName: "نام نوع مکان", width: 160 },
    { field: "lng", headerName: "طول جغرافیایی", width: 140 },
    { field: "lat", headerName: "عرض جغرافیایی", width: 140 },
  ];

  const customTable = (
    title,
    rows,
    checked,
    handleToggle,
    handleSelectAll,
    page,
    type,
    handleSelectPage
  ) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Card sx={{ bgcolor: "red", color: "blue", direction: "rtl" }}>
        <CardHeader
          sx={{ px: 2, py: 1, bgcolor: "gray", color: "blue" }}
          title={title}
          subheader={`${checked.length}/${rows.length} انتخاب شده`}
        />
        <Divider sx={{ bgcolor: "yellow" }} />
        <div style={{ height: 400, width: "100%" }}>
          <Grid
            container
            className="flex bg-red-400 rounded-sm border-1 border-black justify-strat p-2 font-nazanin font-b gap-2"
          >
            <Grid item>
              <div className="flex bg-sky-400 rounded-sm border-1 border-black ">
                <Button onClick={handleSelectPage}>انتخاب تمامی صفحه</Button>
              </div>
            </Grid>
            <Grid item>
              <div className="flex bg-green-400 rounded-sm border-1 border-green-300 font-nazanin">
                <Button
                  // variant="outlined"
                  // color="primary"
                  onClick={handleSelectAll}
                >
                  انتخاب تمامی رکوردها
                </Button>
              </div>
            </Grid>
          </Grid>
          <DataGrid
            rows={filteredRows(rows, globalFilter)}
            columns={columns}
            pageSize={rowsPerPage}
            localeText={localeTextFa}
            rowsPerPageOptions={[5, 10, 20]} // اضافه کردن 5 به گزینه‌ها
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(newSelection) => {
              if (type === "source") setCheckedSource(newSelection);
              else setCheckedDestination(newSelection);
            }}
            components={{
              Toolbar: GridToolbar,
            }}
            selectionModel={checked}
            sx={{
              bgcolor: "#43794e",
              fontFamily: "Vazir, sans-serif",
              "& .MuiDataGrid-row:nth-of-type(odd)": {
                backgroundColor: "white",
              },
              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: "#79C7FF",
              },
            }}
          />
        </div>
      </Card>
    </motion.div>
  );

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-8 px-24  bg-[#3f93b9] font-nazanin"
      // className="flex flex-col items-center justify-center min-h-8 px-24  bg-[#43794e] font-nazanin"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 mt-28"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        مدیریت اطلاعات جغرافیایی
      </motion.h1>

      <TextField
        fullWidth
        label="جستجوی کلی"
        variant="outlined"
        margin="normal"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="bg-sky-400 rtl text-right"
        sx={{
          bgcolor: "#00BFFF",
          color: "green",
          direction: "rtl",
        }}
        InputLabelProps={{
          style: { textAlign: "right" }, // راست‌چین کردن لیبل
        }}
        InputProps={{
          style: { textAlign: "right" }, // راست‌چین کردن ورودی
        }}
      />

      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          {customTable(
            "مکان‌های منبع",
            sourceRows,
            checkedSource,
            handleToggleSource,
            handleSelectAllSource,
            sourcePage,
            "source",
            handleSelectPageSource
          )}
        </Grid>
        <div className="mt-4 flex justify-center">
          <Button
            onClick={handleTransferToDestination}
            variant="contained"
            color="primary"
            sx={{ marginRight: 2, fontFamily: "Vazir, sans-serif" }}
          >
            انتقال به مقصد <FaArrowRight />
          </Button>
          <Button
            onClick={handleTransferToSource}
            variant="contained"
            color="secondary"
          >
            انتقال به منبع <FaArrowLeft />
          </Button>
        </div>
        <Grid item xs={12}>
          {customTable(
            "مکان‌های مقصد",
            destinationRows,
            checkedDestination,
            handleToggleDestination,
            handleSelectAllDestination,
            destinationPage,
            "destination",
            handleSelectPageDestination
          )}
        </Grid>
      </Grid>

      <div className="mt-4">
        <Button
          variant="contained"
          color="success"
          startIcon={<FaSave />}
          onClick={() => alert("اطلاعات ذخیره شد!")}
        >
          ذخیره اطلاعات
        </Button>
      </div>
    </motion.div>
  );
};

export default GeonamesList;
