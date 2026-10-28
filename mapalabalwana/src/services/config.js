import axios from "axios";

// Mengambil URL dari .env jika ada, jika tidak default ke localhost:5000 (lokal) atau link produksi
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
export const IMAGE_URL =
  import.meta.env.VITE_IMAGE_URL || API_BASE_URL;

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk otomatis pasang token jika ada
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
