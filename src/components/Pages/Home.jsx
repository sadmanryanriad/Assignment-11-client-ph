import Banner from "../Header/Banner";
import Services from "./services/Services";
import NewsLetter from "./pageComponents/NewsLetter";
import PromotionSection from "./pageComponents/PromotionSection";
import AddressSection from "../Address/AddressSection";
import FeaturedRooms from "../featured/FeaturedRooms";
import UserTestimonials from "./testimonial/UserTestimonials";
import useScrollToTop from "../../hooks/useScrollToTop";
import { BsArrowUpCircle } from "react-icons/bs";

const Home = () => {
  const { isScrollVisible, scrollToTop } = useScrollToTop(200);
  return (
    <div className="overflow-hidden">
      <Banner></Banner>
      <div className="w-full md:w-[90%] mx-auto">
        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
        <PromotionSection></PromotionSection>
        <UserTestimonials></UserTestimonials>
        <AddressSection></AddressSection>
        <NewsLetter></NewsLetter>

        {/* Render the scroll-to-top button when showScrollButton is true */}
        {isScrollVisible && (
          <button
            className="fixed bottom-10 right-10 border bg-black dark:text-black text-white dark:bg-white text-3xl md:text-4xl rounded-full cursor-pointer"
            onClick={scrollToTop}
          >
            <BsArrowUpCircle></BsArrowUpCircle>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
