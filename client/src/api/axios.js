import axios from "axios";

const port = 3000;

const API = axios.create({
  baseURL: `http://localhost:${port}/api/v1`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
