import { createBrowserRouter } from "react-router-dom";
import Customers from "./app/dashboard/customers/Customers";
import Dashboard from "./app/dashboard/dashboard/Dashboard";
import Orders from "./app/dashboard/orders/Orders";
import ProductCategories from "./app/dashboard/product/product-categories/ProductCategories";
import ProductDescription from "./app/dashboard/product/product-description/ProductDescription";
import Products from "./app/dashboard/product/product/Products";
import Receipt from "./app/dashboard/receipt/Receipt";
import Settings from "./app/dashboard/settings/Setting";
import Login from "./app/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-categories",
        element: <ProductCategories />,
      },
      {
        path: "product-descriptions",
        element: <ProductDescription />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "receipts",
        element: <Receipt />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
