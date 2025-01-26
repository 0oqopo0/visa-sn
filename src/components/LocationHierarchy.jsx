import React, { useState, useEffect } from "react";
import { MenuItem, Select, FormControl, InputLabel, CircularProgress, Typography } from "@mui/material";
import LocationService from "../service/LocationService";

const LocationHierarchy = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [loadingProvinces, setLoadingProvinces] = useState(true);
  const [error, setError] = useState(null);

  // دریافت استان‌ها
  const fetchProvinces = async () => {
    setLoadingProvinces(true);
    try {
      const data = await LocationService.fetchGeoNamesFromAPI("Iran");
      const filteredProvinces = data.filter(
        (item) => item.type === "state" || item.addresstype === "province"
      );
      setProvinces(filteredProvinces);
    } catch (error) {
      console.error("Error fetching provinces:", error);
      setError("Failed to load provinces.");
    } finally {
      setLoadingProvinces(false);
    }
  };

  // دریافت شهرها
  const fetchCities = async () => {
    try {
      const data = await LocationService.fetchGeoNamesFromAPI(selectedProvince);
      const filteredCities = data.filter(
        (item) => item.type === "city" || item.addresstype === "city"
      );
      setCities(filteredCities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  // دریافت مناطق
  const fetchAreas = async () => {
    try {
      const data = await LocationService.fetchGeoNamesFromAPI(selectedCity);
      const filteredAreas = data.filter(
        (item) => item.type === "suburb" || item.addresstype === "suburb"
      );
      setAreas(filteredAreas);
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  // دریافت لیست استان‌ها هنگام بارگذاری کامپوننت
  useEffect(() => {
    fetchProvinces();
  }, []);

  // دریافت لیست شهرستان‌ها زمانی که استان انتخاب می‌شود
  useEffect(() => {
    if (selectedProvince) {
      fetchCities();
    }
  }, [selectedProvince]);

  // دریافت لیست مناطق زمانی که شهرستان انتخاب می‌شود
  useEffect(() => {
    if (selectedCity) {
      fetchAreas();
    }
  }, [selectedCity]);

  return (
    <div className="bg-green-500 mt-28" style={{ padding: "20px", direction: "rtl" }}>
      {/* نمایش خطا */}
      {error && <Typography color="error">{error}</Typography>}

      {/* کمبوی استان */}
      <FormControl fullWidth margin="normal" className="bg-red-300 text-black">
        <InputLabel>استان</InputLabel>
        <Select
          value={selectedProvince}
          onChange={(e) => {
            setSelectedProvince(e.target.value);
            setSelectedCity(""); // ریست شهرستان‌ها
            setAreas([]); // ریست مناطق
          }}
        >
          {loadingProvinces ? (
            <MenuItem disabled>
              <CircularProgress size={24} />
            </MenuItem>
          ) : (
            provinces.map((province) => (
              <MenuItem key={province.place_id} value={province.display_name}>
                {province.display_name}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>

      {/* کمبوی شهرستان */}
      {selectedProvince && (
        <FormControl fullWidth margin="normal">
          <InputLabel>شهرستان</InputLabel>
          <Select
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedArea(""); // ریست مناطق
            }}
          >
            {cities.map((city) => (
              <MenuItem key={city.place_id} value={city.display_name}>
                {city.display_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* کمبوی مناطق */}
      {selectedCity && (
        <FormControl fullWidth margin="normal">
          <InputLabel>منطقه</InputLabel>
          <Select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            {areas.map((area) => (
              <MenuItem key={area.place_id} value={area.display_name}>
                {area.display_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default LocationHierarchy;
