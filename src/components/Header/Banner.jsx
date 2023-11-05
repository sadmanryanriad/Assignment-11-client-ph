import { Link } from "react-router-dom";

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });  },[])


  return (
    <div className="relative bg-cover bg-center h-[80vh]" data-aos="zoom-in-down">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/3Fc9sts/bed-3.jpg)",
        }}
      ></div>

      {/* Semi-transparent Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to Our Hotel Booking Platform
          </h1>
          <p className="text-lg mb-6">
            Find the Perfect Accommodation for Your Next Getaway
          </p>
          <Link to="/rooms">
            <button className="btn btn-primary px-8 py-3 rounded-full hover:bg-red-500 hover:scale-105 transform transition duration-300">
              Explore Rooms
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
