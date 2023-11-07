import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import RatingModal from "./RatingModal";

const CartCard = ({ card, handleDelete }) => {
  const { roomId, _id, date } = card;
//   console.log(roomId, _id, date);

  const dateStringFromDatabase = date;
  const dateObject = new Date(dateStringFromDatabase);
  
  // Get the day, month, and year from the date object
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1; // Months are zero-based, so we add 1
  const year = dateObject.getFullYear();
  
  // Create a formatted date string in the 'mm/dd/yyyy' format
  const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    
  const [product, setProduct] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const url = `/rooms/${roomId}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setProduct(res?.data);
    //   console.log(res.data);
    });
  }, [axiosSecure, url]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRating = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const message = form.message.value;
    console.log(rating, message);
  };

  return (
    <>
    <div>
      <div className="border p-4 m-4 md:m-0 rounded-lg text-center">
        <img
          src={product?.imageURL}
          alt=""
          className="w-80 h-48 mx-auto rounded-lg"
        />
        <div className="p-3">
          <p className="mt-2 text-lg">Room Number: {product?.roomNo}</p>
          <p className="text-sm text-gray-500">
            {product?.roomDescription}
          </p>
          <p className="text-sm text-gray-500 font-semibold">Date: {formattedDate}</p>
          <p className="text-green-600 text-lg font-semibold">
            Price: ${product?.pricePerNight}
          </p>
          <p className="text-sm text-yellow-500">Rating: {product?.rating}</p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-error hover:scale-105"
            >
              Cancel
            </button>
            <button
              className="btn btn-sm btn-info hover:scale-105"
            >
              Update
            </button>
            <button
            onClick={openModal}
              className="btn btn-sm btn-warning hover:scale-105"
            >
              Give Rating
            </button>
          </div>
        </div>
      </div>
    </div>
    {isModalOpen && <RatingModal roomId={roomId} handleRating={handleRating} closeModal={closeModal}></RatingModal>}

    </>
  );
};

CartCard.propTypes = {
  card: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default CartCard;
