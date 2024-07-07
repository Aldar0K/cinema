import axios from "axios";
import Cookies from "js-cookie";
import { CookieNames } from "../constants";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

const $api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Authorization: `Bearer ${Cookies.get(CookieNames.ACCESS_TOKEN)}`,
  },
});

const axiosClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const axiosPrivate = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      Cookies.remove(CookieNames.ACCESS_TOKEN);
    }
    return Promise.reject(error);
  },
);

export { $api, axiosClient, axiosPrivate };
