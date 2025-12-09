import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import Login from "./pages/Auth/Login/Login";
import Bookings from "./pages/Bookings/Bookings";
import Dashboard from "./pages/Dashboard/Dashboard";
import Services from "./pages/Services/Services";
import Users from "./pages/Users/Users";
import Providers from "./Providers";


const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "services", element: <Services /> },
      { path: "users", element: <Users /> },
      { path: "bookings", element: <Bookings /> },
    ],
  },
]);
function App() {

  return (
    <>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </>
  )
}

export default App
