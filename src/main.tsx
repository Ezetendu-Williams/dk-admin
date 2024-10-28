import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./App.tsx";
import Providers from "./providers/Providers.tsx";
import { ToastContainer } from "react-toastify";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <ToastContainer />
    <RouterProvider router={router} />
  </Providers>
);
