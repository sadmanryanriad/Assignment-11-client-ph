import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Pages/Home";
import Registration from "../components/Pages/Registration";
import Login from "../components/Pages/Login";
import ErrorPage from "../components/Pages/ErrorPage";
import MyBookings from "../components/Pages/MyBookings";
import Rooms from "../components/Pages/Rooms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "rooms",
        element: <Rooms></Rooms>,
      },
    ],
  },
]);

export default router;
