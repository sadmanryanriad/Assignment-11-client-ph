import { useEffect, useState } from "react";
import RoomCard from "./pageComponents/RoomCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Spinner from "../Spinner/Spinner";

const Rooms = () => {
  const axiosSecure = useAxiosSecure();

  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // Initial sort order
  const [sortedRooms, setSortedRooms] = useState([]); // State for sorted rooms

  const url = `/rooms`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setRooms(res?.data);
      setIsLoading(false);
    });
  }, [axiosSecure, url]);

  // Use useEffect to update sorted rooms whenever sortOrder or rooms change
  useEffect(() => {
    // Function to sort rooms based on the selected sortOrder
    const sortRooms = () => {
      return [...rooms].sort((room1, room2) => {
        const price1 = parseInt(room1.pricePerNight, 10) || 0;
        const price2 = parseInt(room2.pricePerNight, 10) || 0;
        if (sortOrder === "asc") {
          return price1 - price2;
        } else {
          return price2 - price1;
        }
      });
    };

    // Update the sorted rooms
    setSortedRooms(sortRooms());
  }, [sortOrder, rooms]);

  const handleSortedRooms = (e) => {
    setSortOrder(e.target.value);
  };

  if (isLoading) return <Spinner></Spinner>;
  return (
    <div className="max-w-7xl mx-auto">
      <form className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Sort by:</h2>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleSortedRooms}
          value={sortOrder}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedRooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
