import axios, { CreateAxiosDefaults } from "axios";
import env from "../../config/EnvironmentalVariables";
import { USER_DETAILS } from "../../data/Constants";
import { TLoginResponse } from "../../types/Auth";

const baseURL = env().VITE_APP_BASE_URL;

const config: CreateAxiosDefaults = {
  baseURL: baseURL + "/api/v1/",
  headers: {
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
  },
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (request) => {
    const sessionData = sessionStorage.getItem(USER_DETAILS);
    if (!sessionData) {
      return request;
    }
    const data = JSON.parse(sessionData) as TLoginResponse;
    request.headers.apiKey = data?.token;
    return request;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
