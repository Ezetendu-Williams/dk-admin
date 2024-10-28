import {
  TAddProductCategoryPayload,
  TAddProductCategoryResponse,
  TAddProductPayload,
  TAddProductResponse,
  TGetAllProductCategoriesResponse,
  TGetAllProductsResponse,
  TProductCategoriesByPagePayload,
  TUpdateProductCategoryPayload,
  TUpdateProductCategoryResponse,
} from "../../types/Products";
import { SUCCESS_CODE } from "../../data/Constants";
import axiosInstance from "../axiosInstance/AxiosInstance";


// Product
export const getAllProductsAPI = async () => {
  try {
    const url = `products/all`;
    const { data } = await axiosInstance.get<TGetAllProductsResponse>(url);
    if (data?.responseDto?.code === SUCCESS_CODE) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addProductAPI = async (payload: TAddProductPayload) => {
  try {
    const url = `products/add`;
    const { data } = await axiosInstance.post<TAddProductResponse>(
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

export const updateProductAPI = async (payload: TAddProductPayload) => {
  try {
    const url = `products/update`;
    const { data } = await axiosInstance.post<TAddProductResponse>(
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

// Product Categories
export const getAllProductsCategoriesAPI = async () => {
  try {
    const url = `productcategorycode/all`;
    const { data } = await axiosInstance.get<TGetAllProductCategoriesResponse>(
      url
    );
    if (data?.responseDto?.code === SUCCESS_CODE) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllProductsCategoriesByPageAPI = async (
  payload: TProductCategoriesByPagePayload
) => {
  try {
    const url = `productcategorycode/all/page`;
    const { data } = await axiosInstance.post<TGetAllProductCategoriesResponse>(
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

export const addProductsCategoryAPI = async (
  payload: TAddProductCategoryPayload
) => {
  try {
    const url = `productcategorycode/add`;
    const { data } = await axiosInstance.post<TAddProductCategoryResponse>(
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

export const updateProductsCategoryAPI = async (
  payload: TUpdateProductCategoryPayload
) => {
  try {
    const url = `productcategorycode/update`;
    const { data } = await axiosInstance.post<TUpdateProductCategoryResponse>(
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
