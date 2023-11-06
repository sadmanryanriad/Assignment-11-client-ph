import { Link } from "react-router-dom";

const details = () => {
    const details =     {
        roomNo: "104",
        roomDescription: "Standard Room with Garden View",
        pricePerNight: "$110",
        roomSize: "330 sq. ft.",
        availability: "Available",
        imageURL: "https://i.ibb.co/3Fc9sts/bed-3.jpg",
        specialOffer: "No offer",
        rating: 3.7,
        features: [
            "King-size bed",
            "Garden view",
            "Air conditioning",
            "Free Wi-Fi",
          ],
      }
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold">
          Room No {details.roomNo}
        </h1>
        <img
          src={details.imageURL}
          alt={details.roomDescription}
          className="w-full md:w-[70%] mx-auto h-auto mt-4 rounded-lg shadow-md"
        />
        <p className="text-lg mt-6">{details.roomDescription}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <strong className="text-lg">Price per night:</strong>
            <span className="text-xl">{details.pricePerNight}</span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-lg">Room Size:</strong>
            <span className="text-xl">{details.roomSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-lg">Availability:</strong>
            <span className="text-xl text-green-600">
              {details.availability}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-lg">Special Offer:</strong>
            <span className="text-xl text-green-600">
              {details.specialOffer}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-lg">Rating:</strong>
            <span className="text-xl">{details.rating}</span>
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
            <button className="btn mt-5 bg-green-400 hover:bg-slate-800 hover:text-gray-200">
              Book Now
            </button></Link>
      </div>
    </div>
  );
};

export default details;
