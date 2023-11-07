import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import RatingModal from "./RatingModal";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const axiosSecure = useAxiosSecure();

  const url = `/myBookings/${user?.email}`;

  const reFetchData = () => {
    axiosSecure.get(url).then((res) => {
      setBookings(res?.data);
    });
  };

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setBookings(res?.data);
      setLoading(false);
    });
  }, [axiosSecure, url]);

  const handleDelete = (userProductId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cancelled!",
          text: "Booking has been cancelled!",
          icon: "success",
        });
        axiosSecure.delete(`/myBookings/${userProductId}`).then(() => {
          reFetchData();
        });
      }
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRating = e =>{
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const message = form.message.value;
    console.log(rating,message);
  }

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-success text-5xl "></span>
        </div>
      ) : (
        <div className="rounded-lg max-w-max mx-auto">
          <h2 className="text-2xl font-bold text-center mt-5 mb-5 md:mb-10">
            My Bookings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bookings?.length ? (
              bookings.map((card) => (
                <CartCard
                  key={card._id}
                  card={card}
                  handleDelete={handleDelete}
                ></CartCard>
              ))
            ) : (
              <p className="text-5xl">
                No data found.{" "}
                <span className="text-red-500">Book Rooms to show!</span>
              </p>
            )}
          </div>
        </div>
      )}
      <RatingModal handleRating={handleRating}></RatingModal>
    </>
  );
};

export default MyBookings;
