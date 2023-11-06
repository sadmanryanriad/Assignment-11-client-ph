import RoomCard from "./pageComponents/RoomCard";

const Rooms = () => {

    const fakeRoomData = [
        {
          id: 1,
          roomNo: "101",
          roomDescription: "Deluxe Room with Ocean View",
          pricePerNight: 150,
          roomSize: "400 sq. ft.",
          availability: "Available",
          imageURL: "https://i.ibb.co/WH9HdMn/hotel-1330841-1280.jpg",
          specialOffer: "15% off",
          rating: 4.5,
          features: [
            "King-size bed",
            "Ocean view",
            "Air conditioning",
            "Free Wi-Fi",
          ],
        },
        {
          id: 2,
          roomNo: "102",
          roomDescription: "Standard Room with City View",
          pricePerNight: 120,
          roomSize: "350 sq. ft.",
          availability: "Available",
          imageURL: "https://i.ibb.co/ByZTm3p/hotel-room-high-quality-img-2.jpg",
          specialOffer: "No offer",
          rating: 4.0,
          features: [
            "Queen-size bed",
            "City view",
            "Air conditioning",
            "Free Wi-Fi",
          ],
        },
        {
          id: 3,
          roomNo: "103",
          roomDescription: "Luxury Suite with Pool Access",
          pricePerNight: 250,
          roomSize: "550 sq. ft.",
          availability: "Not Available",
          imageURL: "https://i.ibb.co/N9nDqXk/hotel-room-high-quality-img-1.jpg",
          specialOffer: "10% off",
          rating: 4.8,
          features: [
            "King-size bed",
            "Pool access",
            "Air conditioning",
            "Free Wi-Fi",
          ],
        },
        {
          id: 4,
          roomNo: "104",
          roomDescription: "Standard Room with Garden View",
          pricePerNight: 110,
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
        },
      ];
      
      

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
      {fakeRoomData.map((room, index) => (
        <RoomCard
          key={index}
          room={room}
        />
      ))}
    </div>
  );
};

export default Rooms;
