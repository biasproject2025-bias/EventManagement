import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // ✅ your backend port
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api; // ✅ THIS LINE FIXES YOUR ERROR
