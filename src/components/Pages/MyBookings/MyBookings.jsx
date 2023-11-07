import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]); 
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const url = `/myBookings/${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setBookings(res?.data);
      setLoading(false);
    });
  }, [axiosSecure, url]);

  const handleDelete = (userProductId) => {
    console.log(userProductId);
  };

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
                <span className="text-red-500">Add product to show!</span>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MyBookings;
