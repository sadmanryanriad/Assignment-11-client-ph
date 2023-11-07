import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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
  const axiosSecure = useAxiosSecure();
  const url = `/rooms/${roomId}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setProduct(res?.data);
    //   console.log(res.data);
    });
  }, [axiosSecure, url]);

  return (
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
          <div className="mt-4">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  card: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default CartCard;
