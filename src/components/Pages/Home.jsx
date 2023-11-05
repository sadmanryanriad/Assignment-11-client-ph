import Banner from "../Header/Banner";
import ScrollToTop from "react-scroll-to-top";
import UpCar from "./pageComponents/UpCar";

const Home = () => {
  return (
    <div className="">
      <ScrollToTop
        // Classname to add/override styling (note, !important for overrides might be needed)
        smooth
        color="#EF4444"
        component={<UpCar></UpCar>}
      />
      <Banner></Banner>
      <div className="w-[90%] mx-auto">
      </div>
    </div>
  );
};

export default Home;
