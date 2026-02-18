import axios from "axios";

const port = 3000;

const API = axios.create({
  baseURL: `http://localhost:${port}/api/v1`,
  withCredentials: true,
});

// Only set JSON Content-Type for non-FormData requests
API.interceptors.request.use((config) => {
  if (!(config.data instanceof FormData)) {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

export default API;
