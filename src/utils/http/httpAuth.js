import axios from "axios";
import ENV from "../../configs/env";
import { getBearerToken } from "../../configs/api";

export const httpAuth = axios.create({
  baseURL: ENV.host,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpAuth.interceptors.request.use(
  async (config) => {
    const token = getBearerToken();
    config.headers.Authorization = token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
