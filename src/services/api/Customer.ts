import { SUCCESS_CODE } from "../../data/Constants";
import { TGetCustomersPayload, TGetCustomersByPageResponse } from "../../types/Customer";
import axiosInstance from "../axiosInstance/AxiosInstance";

export const getUsersByPageAPI = async (payload: TGetCustomersPayload) => {
  try {
    const url = `user/all/page`;
    const { data } = await axiosInstance.post<TGetCustomersByPageResponse>(
      url,
      payload
    );

    if (data?.responseDto?.code === SUCCESS_CODE) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
