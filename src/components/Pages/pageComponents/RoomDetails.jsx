import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../Spinner/Spinner";
import { AuthContext } from "../../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomDetails = () => {

  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(user.email)

  const {id} = useParams();
      
      const url = `/rooms/${id}`;
       
      useEffect(()=>{
        axiosSecure.get(url)
        .then(res=>{
          setDetails(res?.data);
          setIsLoading(false);
        })

      },[axiosSecure, url])
      
      if(isLoading) return <Spinner></Spinner>


      const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
      const handleBooking = () => {
        const bookingDetails = {
          userEmail: user.email,
          selectedDate: selectedDate, // Include the selected date in bookingDetails
        };
        console.log(bookingDetails);
      };
  return (
<>
<div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold">
          Room No {details?.roomNo}
        </h1>
        <img
          src={details?.imageURL}
          alt={details?.roomDescription}
          className="w-full md:w-[70%] mx-auto h-auto mt-4 rounded-lg shadow-md"
        />
        <p className="text-lg mt-6">{details?.roomDescription}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <strong className="text-lg">Price per night:</strong>
            <span className="text-xl">{details?.pricePerNight}</span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-lg">Room Size:</strong>
            <span className="text-xl">{details?.roomSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-lg">Availability:</strong>
            <span className="text-xl text-green-600">
              {details?.availability}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-lg">Special Offer:</strong>
            <span className="text-xl text-green-600">
              {details?.specialOffer}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-lg">Rating:</strong>
            <span className="text-xl">{details?.rating}</span>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Features:</h2>
          <ul className="list-disc pl-6 mt-2">
            {details.features.map((feature, index) => (
              <li key={index} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Link >
            <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="mt-5 btn bg-green-400 border-none px-8 py-3 rounded-full hover:bg-gray-600 hover:text-gray-200 hover:scale-105 transform transition duration-300">
              Book Now
            </button></Link>
      </div>
    </div>

    {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Total price: {details?.pricePerNight}</h3>
    <p className="py-4">{details?.roomDescription}</p>
    {/* add a datepicker here */}
    <div className="min-w-max">
    <form method="dialog" className="flex gap-10">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy" // Customize the date format as needed
                isClearable
                showYearDropdown
              />
              <button onClick={handleBooking} className="btn bg-green-400">
                Book
              </button>
              <button className="btn btn-error" onClick={() => document.getElementById('my_modal_5').close()}>Cancel</button>
            </form>
    </div>
  </div>
</dialog>
</>
  );
};

export default RoomDetails;
