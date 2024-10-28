import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProductAPI,
  addProductsCategoryAPI,
  getAllProductsAPI,
  getAllProductsCategoriesAPI,
  getAllProductsCategoriesByPageAPI,
  updateProductAPI,
  updateProductsCategoryAPI,
} from "../../services/api/Products";

// ============================ Products ==================================
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: getAllProductsAPI,
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addProduct"],
    mutationFn: addProductAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateProduct"],
    mutationFn: updateProductAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
    },
  });
};

// ============================ Products Categories ==================================
export const useGetAllProductsCategories = () => {
  return useQuery({
    queryKey: ["getAllProductsCategories"],
    queryFn: getAllProductsCategoriesAPI,
  });
};

export const useGetAllProductsCategoriesByPage = () => {
  return useMutation({
    mutationKey: ["getAllProductsCategoriesByPage"],
    mutationFn: getAllProductsCategoriesByPageAPI,
  });
};

export const useAddProductCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addProductsCategory"],
    mutationFn: addProductsCategoryAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllProductsCategories"],
      });
    },
  });
};

export const useUpdateProductCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateProductsCategory"],
    mutationFn: updateProductsCategoryAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllProductsCategories"],
      });
    },
  });
};

// ============================ Products Description ==================================
export const useGetAllProductsDescriptions = () => {};
export const useAddProductsDescriptions = () => {};
export const useUpdateProductsDescriptions = () => {};
