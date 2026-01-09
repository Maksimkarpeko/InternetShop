import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LINKS } from "./config/links.config";
import { HomePage } from "pages/HomePage/index.ts";
import { OrdersPage } from "pages/OrdersPage/index.ts";

const router = createBrowserRouter([
  { path: LINKS.mainPage, element: <HomePage /> },
  { path: LINKS.ordersPage, element: <OrdersPage />}
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
