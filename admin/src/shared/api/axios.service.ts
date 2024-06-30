import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

export const axiosClient = axios.create({
  baseURL: BACKEND_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});
