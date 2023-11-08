import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Pages/Home";
import Registration from "../components/Pages/Registration";
import Login from "../components/Pages/Login";
import ErrorPage from "../components/Pages/ErrorPage";
import Rooms from "../components/Pages/Rooms";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import RoomDetails from "../components/Pages/pageComponents/RoomDetails";
import MyBookings from "../components/Pages/MyBookings/MyBookings";
import TestimonialPage from "../components/Pages/testimonial/TestimonialPage";
import FAQ from "../components/Pages/FAQ";

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
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
      },
      {
        path: "rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "rooms/:id",
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      },
      {
        path: "testimonials",
        element: <TestimonialPage></TestimonialPage>
      },
      {
        path: "faq",
        element: <FAQ></FAQ>
      }
    ],
  },
]);

export default router;
