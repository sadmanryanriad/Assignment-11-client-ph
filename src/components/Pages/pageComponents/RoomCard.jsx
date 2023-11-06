import PropTypes from 'prop-types';

const RoomCard = ({ roomNo, roomDescription, pricePerNight, imageURL, rating}) => {
  return (
<>
<div className="card flex flex-col md:flex-row bg-base-100 shadow-xl">
  <img className="w-96 flex-1 rounded-lg" src={imageURL} alt="Album"/>
  <div className="card-body flex-1">
    <h2 className="card-title">Room No {roomNo}</h2>
    <p>{roomDescription}</p>
    <p className='text-yellow-500 font-semibold'>Rating: {rating}</p>
    <p className='font-semibold'>Price: {pricePerNight}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-sm bg-green-400 hover:bg-slate-800 hover:text-gray-200">Book Now</button>    </div>
  </div>
</div>
</>
  );
};

RoomCard.propTypes = {
    roomNo: PropTypes.string,
    roomDescription: PropTypes.string,
    pricePerNight: PropTypes.string,
    roomSize: PropTypes.string,
    availability: PropTypes.string,
    imageURL: PropTypes.string,
    specialOffer: PropTypes.string,
    rating: PropTypes.number,
  };
  

export default RoomCard;
