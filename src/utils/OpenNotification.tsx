import { toast, ToastPosition } from "react-toastify";

export default function openNotification(
  status: "error" | "success" | "warning",
  message: string,
  position: ToastPosition = "top-right"
) {
  if (status === "success") {
    toast.success(message, {
      position,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else if (status === "error") {
    toast.error(message, {
      position,
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else {
    toast.warn(message, {
      position,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
}
