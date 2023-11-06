import Lottie from "lottie-react";
import loading from "../../assets/loading.json";

const Spinner = () => {
  return (
    <div className="max-w-sm mx-auto text-center mt-12">
            <Lottie animationData={loading} loop={true} />
    </div>
  );
};

export default Spinner;
