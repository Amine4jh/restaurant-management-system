import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const Routing = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <HomePage /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
  ]);
  return <RouterProvider router={Routing}></RouterProvider>;
}

export default App;
