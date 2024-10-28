import { useMutation } from "@tanstack/react-query";
import { getUsersByPageAPI } from "../../services/api/Customer";

export const useGetCustomers = (pageNo: number) => {
  return useMutation({
    mutationKey: ["getUsersByPage", { pageNo }],
    mutationFn: getUsersByPageAPI,
  });
};
