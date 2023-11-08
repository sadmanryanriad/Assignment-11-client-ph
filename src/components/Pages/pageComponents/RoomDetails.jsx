import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../Spinner/Spinner";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import BookingModal from "./BookingModal";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import UserTestimonialsRoom from "../testimonial/UserTestimonialsRoom";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [ratingsObj, setRatingsObj] = useState(0);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { id } = useParams();

  const url = `/rooms/${id}`;

  //for refetching data when user books a room
  const reFetchRooms = () => {
    axiosSecure.get(url).then((res) => {
      setDetails(res?.data);
    });
    axiosSecure.get(`/myBookings/${user.email}`).then((res) => {
      setBookings(res?.data);
    });
  };

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setDetails(res?.data);
      setIsLoading(false);
    });
    axiosSecure.get(`/myBookings/${user.email}`).then((res) => {
      setBookings(res?.data);
    });
    //find rating count
    axiosSecure.get(`/ratings/ratingsCount/${id}`)
    .then(res=>{
      setRatingsObj(res.data);
    })
  }, [axiosSecure, id, url, user.email]);

  //already booked by user? starts here
  const isBooked = bookings.find((element) => element.roomId === id);

  if (isLoading) return <Spinner></Spinner>;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBooking = () => {
    if (!selectedDate) return toast.error("Please select a date!");
    const bookingDetails = {
      roomId: id,
      userEmail: user.email,
      date: selectedDate,
    };

    axiosSecure.post("/bookings", bookingDetails).then((res) => {
      console.log("axios: ", res.data);
      if (res.data.acknowledged)
        Swal.fire({
          title: "Congratulations",
          text: "Room Booked!",
          icon: "success",
        });
      reFetchRooms();
    });
    closeModal();
  };

  return (
    <>
    <Helmet>
  <title>Room Details-Alpha Hotel</title>
</Helmet>
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold">Room No {details?.roomNo}</h1>
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
              <strong className="text-lg">Available Seat:</strong>
              <span className="text-xl text-orange-600">
                {details?.availability ? details.availability : "Not Available"}
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
              <span className="text-xl text-yellow-500">{ratingsObj.averageRating} ({ratingsObj.ratingsCount})</span>
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
          <button
            onClick={openModal}
            disabled={
              !details?.availability || details.availability === 0 || isBooked
            }
            className="mt-5 btn bg-green-400 border-none px-8 py-3 rounded-full hover:bg-gray-600 hover:text-gray-200 hover:scale-105 transform transition duration-300"
          >
            Book Now
          </button>
          <UserTestimonialsRoom ratingsCount={ratingsObj.ratingsCount} roomId={id}></UserTestimonialsRoom>
        </div>
      </div>

      {isModalOpen && (
        <BookingModal
          handleBooking={handleBooking}
          closeModal={closeModal}
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
          roomDetails={details}
        ></BookingModal>
      )}
    </>
  );
};

export default RoomDetails;
