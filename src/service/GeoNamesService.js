import axios from 'axios';

class GeoNamesService {
  static BACKEND_URL = 'http://localhost:8080/fetch-geonames'; // URL بک‌اند شما
  static API_URL = 'http://api.geonames.org/searchJSON';

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

// متدی برای دریافت داده مستقیم از API خارجی
static async fetchGeoNamesFromAPI() {
  try {
    const response = await axios.get(this.API_URL, {
      params: {
        q: 'iran', // جستجوی ایران
        maxRows: 1000, // تعداد نتایج
        username: 'miladsh', // نام کاربری
        featureCode: 'ADM1', // فقط استان‌ها
        country: 'IR', // کد کشور ایران
      },
    });

    return response.data.geonames; // داده‌های دریافتی از API خارجی
  } catch (error) {
    console.error('Error fetching GeoNames data from API:', error);
    throw error;
  }
}


  // متدی برای مدیریت تغییر بین بک‌اند و API
  static async fetchGeoNames(source = 'backend') {
    if (source === 'backend') {
      return this.fetchGeoNamesFromBackend(); // دریافت از بک‌اند
    } else if (source === 'api') {
      return this.fetchGeoNamesFromAPI(); // دریافت مستقیم از API
    } else {
      throw new Error('Invalid source. Use "backend" or "api".');
    }
  }
}

export default GeoNamesService;
