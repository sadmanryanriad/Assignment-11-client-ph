import Lottie from "lottie-react";
import locationOnMap from "../../../assets/locationOnMap.json";

const LocationOnMap = () => {
    return (
        <div className="w-60 ">
            <Lottie animationData={locationOnMap} loop={true} />
        </div>
    );
};

export default LocationOnMap;