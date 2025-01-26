import axios from 'axios';

class LocationService {
  static BACKEND_URL = 'http://localhost:8080/fetch-geonames'; // URL بک‌اند شما
  static API_URL = 'https://nominatim.openstreetmap.org/search';

  // متدی برای دریافت داده از بک‌اند
  static async fetchGeoNamesFromBackend() {
    try {
      const response = await axios.get(this.BACKEND_URL);
      return response.data; // داده‌های برگشتی از بک‌اند
    } catch (error) {
      console.error('Error fetching GeoNames data from backend:', error);
      throw error;
    }
  }

  // متدی برای دریافت داده مستقیم از OpenStreetMap API
  static async fetchGeoNamesFromAPI(query = "Iran") {
    try {
      const response = await axios.get(this.API_URL, {
        params: {
          q: query.trim(), // مقدار جستجو (پیش‌فرض ایران)
          format: "json",
        },
      });
      return response.data; // بازگرداندن داده
    } catch (error) {
      console.error("Error fetching GeoNames data from OpenStreetMap API:", error);
      throw error;
    }
  }

  // متدی برای دریافت استان‌ها، شهرستان‌ها یا مناطق
  static async fetchLocations(type, query = 'Iran') {
    try {
      const data = await this.fetchGeoNamesFromAPI(query);
      return data.filter((item) => item.type === type || item.addresstype === type); // فیلتر بر اساس نوع (استان، شهرستان یا منطقه)
    } catch (error) {
      console.error(`Error fetching ${type}s:`, error);
      throw error;
    }
  }

  // متدی برای مدیریت تغییر بین بک‌اند و API
  static async fetchGeoNames(source = 'api', query = 'Iran', type = 'state') {
    if (source === 'backend') {
      return this.fetchGeoNamesFromBackend(); // دریافت از بک‌اند
    } else if (source === 'api') {
      return this.fetchLocations(type, query); // دریافت از API با نوع خاص
    } else {
      throw new Error('Invalid source. Use "backend" or "api".');
    }
  }
}

export default LocationService;
