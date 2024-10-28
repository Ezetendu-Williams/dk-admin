import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../../services/api/Auth";
import { SUCCESS_CODE } from "../../data/Constants";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutAPI,
    onSuccess: (data) => {
      if (data?.resp?.code === SUCCESS_CODE) {
        queryClient.clear();
        navigate("/", { replace: true });
      }
    },
    onError: (error) => {
      queryClient.clear();
      navigate("/", { replace: true });
      return Promise.reject(error);
    },
  });
};
