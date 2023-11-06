import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import ScrollToTopEffect from "../Utilities/ScrollToTopEffect";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="dark:text-base-100 dark:bg-gray-800">
      <ScrollToTopEffect></ScrollToTopEffect>
      <Navbar />
      <Outlet />
      <Footer></Footer>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Root;
