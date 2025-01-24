import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Grid,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import GeoNamesService from "../service/GeoNamesService";

const GeonamesList = () => {
  const [sourceRows, setSourceRows] = useState([]);
  const [destinationRows, setDestinationRows] = useState([]);
  const [checkedSource, setCheckedSource] = useState([]);
  const [checkedDestination, setCheckedDestination] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GeoNamesService.fetchGeoNames("api");
        console.log("Fetched Data:", data);

        if (data && Array.isArray(data)) {
          const formattedData = data.map((item) => ({
            geonameId: item.geonameId,
            toponymName: item.toponymName || "Unknown",
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
    const currentIndex = checkedSource.indexOf(id);
    const newChecked = [...checkedSource];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedSource(newChecked);
  };

  const handleToggleDestination = (id) => () => {
    const currentIndex = checkedDestination.indexOf(id);
    const newChecked = [...checkedDestination];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedDestination(newChecked);
  };

  const handleTransferToDestination = () => {
    const selectedRows = sourceRows.filter((row) => checkedSource.includes(row.geonameId));
    setDestinationRows([...destinationRows, ...selectedRows]);
    setSourceRows(sourceRows.filter((row) => !checkedSource.includes(row.geonameId)));
    setCheckedSource([]);
  };

  const handleTransferToSource = () => {
    const selectedRows = destinationRows.filter((row) => checkedDestination.includes(row.geonameId));
    setSourceRows([...sourceRows, ...selectedRows]);
    setDestinationRows(destinationRows.filter((row) => !checkedDestination.includes(row.geonameId)));
    setCheckedDestination([]);
  };

  const customTable = (title, rows = [], checked = [], handleToggle) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        title={title}
        subheader={`${checked.length}/${rows.length} selected`}
      />
      <Divider />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Geoname ID</TableCell>
              <TableCell>Toponym Name</TableCell>
              <TableCell>Country ID</TableCell>
              <TableCell>Country Code</TableCell>
              <TableCell>Fcode Name</TableCell>
              <TableCell>Longitude</TableCell>
              <TableCell>Latitude</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.length > 0 ? (
              rows.map((row) => (
                <TableRow
                  key={row.geonameId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                  onClick={handleToggle(row.geonameId)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={checked.includes(row.geonameId)} />
                  </TableCell>
                  <TableCell>{row.geonameId}</TableCell>
                  <TableCell>{row.toponymName}</TableCell>
                  <TableCell>{row.countryId}</TableCell>
                  <TableCell>{row.countryCode}</TableCell>
                  <TableCell>{row.fcodeName}</TableCell>
                  <TableCell>{row.lng}</TableCell>
                  <TableCell>{row.lat}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-black via-green-500 via-yellow-500 via-blue-500 to-black">
      <motion.h1
        className="text-4xl font-bold text-white mb-6 mt-28"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        
      >
        Dual Grid Transfer with Animation
      </motion.h1>

      <motion.div
        className="w-full max-w-4xl mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Source Grid
        </h2>
        {customTable("Source Locations", sourceRows, checkedSource, handleToggleSource)}
      </motion.div>

      <motion.div
        className="flex gap-4 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleTransferToDestination}
          disabled={checkedSource.length === 0}
          startIcon={<FaArrowRight />}
        >
          Transfer to Destination
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleTransferToSource}
          disabled={checkedDestination.length === 0}
          startIcon={<FaArrowLeft />}
        >
          Transfer to Source
        </Button>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Destination Grid
        </h2>
        {customTable("Destination Locations", destinationRows, checkedDestination, handleToggleDestination)}
      </motion.div>
    </div>
  );
};

export default GeonamesList;
