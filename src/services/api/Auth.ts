import { SUCCESS_CODE } from "../../data/Constants";
import {
  TLoginPayload,
  TLoginResponse,
  TLogoutResponse,
} from "../../types/Auth";
import axiosInstance from "../axiosInstance/AxiosInstance";

export const loginAPI = async (payload: TLoginPayload) => {
  try {
    const url = `login/admin`;
    const { data } = await axiosInstance.post<TLoginResponse>(url, payload);
    if (data?.responseDto?.code === SUCCESS_CODE) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logoutAPI = async () => {
  try {
    const url = `logout`;
    const { data } = await axiosInstance.get<TLogoutResponse>(url);
    if (data?.resp?.code === SUCCESS_CODE) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
