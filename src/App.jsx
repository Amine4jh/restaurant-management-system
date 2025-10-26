import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLayout from "./pages/AdminLayout";
import AdminMenu from "./components/admin/management/menu/AdminMenu";
import AdminOrders from "./components/admin/management/orders/AdminOrders";
import AdminReservations from "./components/admin/management/reservations/AdminReservations";
import AdminTables from "./components/admin/management/tables/AdminTables";

function App() {
  const Routing = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "*", element: <HomePage /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        {
          path: "/admin",
          element: <AdminLayout />,
          children: [
            { index: true, element: <AdminDashboard /> },
            { path: "/admin/menu", element: <AdminMenu /> },
            { path: "/admin/orders", element: <AdminOrders /> },
            { path: "/admin/reservations", element: <AdminReservations /> },
            { path: "/admin/tables", element: <AdminTables /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={Routing} />;
}

export default App;
