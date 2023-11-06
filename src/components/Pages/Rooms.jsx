import { useEffect, useState } from "react";
import RoomCard from "./pageComponents/RoomCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Spinner from "../Spinner/Spinner";

const Rooms = () => {
  const axiosSecure = useAxiosSecure();

  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
      
      const url = `/rooms`;
       
      useEffect(()=>{
        axiosSecure.get(url)
        .then(res=>{
          console.log(res.data);
          setRooms(res?.data);
          setIsLoading(false);
        })

      },[axiosSecure, url])
      
      if(isLoading) return <Spinner></Spinner>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
      {rooms.map((room) => (
        <RoomCard
          key={room?._id}
          room={room}
        />
      ))}
    </div>
  );
};

export default Rooms;
