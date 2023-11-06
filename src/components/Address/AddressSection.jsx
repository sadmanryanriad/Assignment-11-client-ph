import LocationOnMap from "../Pages/pageComponents/LocationOnMap";
import GoogleMap from "../googleMap/GoogleMap";

const AddressSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row  mt-10 md:mt-20">
      <div className="flex-1  text-center">
        <div className="flex flex-col p-4 ">
          <div className="flex-1  mt-5">
            <h2 className="text-4xl mb-8 font-extrabold">Find us on <span className="text-green-600">G<span className="text-yellow-400">oo</span>gle <span className="text-red-500">Map</span></span></h2>
            <address className="text-xl md:text-2xl">
              <p>123 Hotel Street</p>
              <p>Dhaka, Bangladesh</p>
              <p>Postal Code: 12345</p>
            </address>
          </div>
            <div className="flex-1  mx-auto">
                <LocationOnMap></LocationOnMap>
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <GoogleMap></GoogleMap>
      </div>
    </div>
  );
};

export default AddressSection;
