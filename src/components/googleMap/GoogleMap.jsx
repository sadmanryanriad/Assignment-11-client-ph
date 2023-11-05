import GoogleMapReact from "google-map-react";
import {FaMapMarkerAlt} from "react-icons/fa";

const AnyReactComponent = () => (
  <div className="text-red-400 text-4xl">
    <FaMapMarkerAlt></FaMapMarkerAlt>
  </div>
);

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152,
    },
    zoom: 11,
  };

  return (
    <div className="mt-12 w-full mx-auto">
      {/* // Important! Always set the container height explicitly */}
      <div style={{ height: "600px", width: "80%",margin: "auto" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;
