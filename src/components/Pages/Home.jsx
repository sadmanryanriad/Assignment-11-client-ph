import Banner from "../Header/Banner";
import ScrollToTop from "react-scroll-to-top";
import UpCar from "./pageComponents/UpCar";
import Services from "./services/Services";
import NewsLetter from "./pageComponents/NewsLetter";
import PromotionSection from "./pageComponents/PromotionSection";

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
      <div className="w-full md:w-[90%] mx-auto">
        <Services></Services>
        <PromotionSection></PromotionSection>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default Home;
