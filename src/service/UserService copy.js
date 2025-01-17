import axios from "axios";

class UserService {
  static BASE_URL = "http://localhost:8585"; // اطمینان حاصل کنید که این آدرس با آدرس سرور شما تطابق دارد

  // ارسال درخواست ورود کاربر
  static async login(email, password) {
    try {
      const response = await axios.post(`${UserService.BASE_URL}/auth/login`, { email, password });
      return response.data;
    } catch (err) {
      throw new Error("Login failed. Please check your credentials.");
    }
  }

  // ثبت‌نام مدیر
  static async AdminRegistration(userData, token) {
    try {
      const response = await axios.post(`${UserService.BASE_URL}/auth/registerAdminUser`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      console.error("Admin registration failed:", err);
      throw new Error("Failed to register admin. Please try again.");
    }
  }

  // ثبت‌نام کاربر معمولی
  static async registeration(userData) {
    try {
      const response = await axios.post(`${UserService.BASE_URL}/auth/registerUser`, userData);
      return response.data;
    } catch (err) {
      console.error("User registration failed:", err);
      throw new Error("Failed to register user. Please try again.");
    }
  }

  // گرفتن لیست همه کاربران
  static async getAllUsers(token) {
    try {
      const response = await axios.get(`${UserService.BASE_URL}/admin/get-all-users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch users list.");
    }
  }

  // دریافت اطلاعات پروفایل کاربر
  static async getYourProfile(token) {
    try {
      const response = await axios.get(`${UserService.BASE_URL}/adminuser/get-profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch user profile.");
    }
  }

  // دریافت اطلاعات کاربر بر اساس شناسه
  static async getUserById(userId, token) {
    try {
      const response = await axios.get(`${UserService.BASE_URL}/admin/get-users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch user details.");
    }
  }

  // حذف کاربر
  static async deleteUser(userId, token) {
    try {
      const response = await axios.delete(`${UserService.BASE_URL}/admin/delete/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      throw new Error("Failed to delete user.");
    }
  }

  // به‌روزرسانی اطلاعات کاربر
  static async updateUser(userId, userData, token) {
    try {
      // ارسال داده‌های کاربر بدون نیاز به تبدیل نقش‌ها
      const updatedUserData = {
        ...userData,
        // نقش‌ها به صورت مستقیم از فرم می‌آیند
      };
  
      // ارسال درخواست PUT برای به‌روزرسانی کاربر
      const response = await axios.put(`${UserService.BASE_URL}/admin/update/${userId}`, updatedUserData, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      return response.data;
    } catch (err) {
      console.error("Error updating user:", err);
      throw new Error("Failed to update user.");
    }
  }
  
  // خروج کاربر
  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  // بررسی وضعیت ورود
  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  // بررسی نقش مدیر
  static isAdmin() {
    const role = localStorage.getItem("role");
    return role === "ADMIN";
  }

  // بررسی نقش کاربر
  static isUser() {
    const role = localStorage.getItem("role");
    return role === "USER";
  }

  // بررسی دسترسی مخصوص مدیر
  static adminOnly() {
    return this.isAuthenticated() && this.isAdmin();
  }

  // گرفتن لیست تمام نقش‌ها
  static async getAllRoles(token) {
    try {
      const response = await axios.get(`${UserService.BASE_URL}/roles`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch roles.");
    }
  }
}

export default UserService;
