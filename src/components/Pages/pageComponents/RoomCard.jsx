import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { id, roomNo, roomDescription, pricePerNight, imageURL, rating } = room;
  return (
    <>
      <div className="card flex flex-col md:flex-row bg-base-100 shadow-xl">
        <img className="w-96 flex-1 rounded-lg" src={imageURL} alt="Album" />
        <div className="card-body flex-1">
          <h2 className="card-title">Room No {roomNo}</h2>
          <p>{roomDescription}</p>
          <p className="text-yellow-500 font-semibold">Rating: {rating}</p>
          <p className="font-semibold">Price: ${pricePerNight}</p>
          <div className="card-actions justify-end">
            <Link to={`/rooms/${id}`}>
            <button className="btn btn-sm bg-green-400 hover:bg-slate-800 hover:text-gray-200">
              See Details
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

RoomCard.propTypes = {
  room: PropTypes.node,
};

export default RoomCard;
