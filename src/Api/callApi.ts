import axios from "axios";

const createApiInstance = (baseUrl?: string, timeOut?: number) => {
  const instance = axios.create({
    baseURL: baseUrl || "",
    timeout: timeOut || 60000,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("authToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  )

  return instance;
};

export default createApiInstance;
