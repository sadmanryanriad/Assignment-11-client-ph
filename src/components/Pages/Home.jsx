import Banner from "../Header/Banner";
import Services from "./services/Services";
import NewsLetter from "./pageComponents/NewsLetter";
import PromotionSection from "./pageComponents/PromotionSection";
import AddressSection from "../Address/AddressSection";
import FeaturedRooms from "../featured/FeaturedRooms";
import UserTestimonials from "./testimonial/UserTestimonials";
import useScrollToTop from "../../hooks/useScrollToTop";
import { BsArrowUpCircle } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import ContactForm from "../ContactMe/ContactForm";

const Home = () => {
  const { isScrollVisible, scrollToTop } = useScrollToTop(200);
  return (
<>
<Helmet>
  <title>Home-Alpha Hotel</title>
</Helmet>
<div className="overflow-hidden">
      <Banner></Banner>
      <div className="w-full md:w-[90%] mx-auto">
        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
        <PromotionSection></PromotionSection>
        <UserTestimonials></UserTestimonials>
        <AddressSection></AddressSection>
        <NewsLetter></NewsLetter>
        <ContactForm></ContactForm>

        {/* Render the scroll-to-top button when showScrollButton is true */}
        {isScrollVisible && (
          <button
            className="z-10 fixed bottom-10 right-10 border bg-black dark:text-black text-white dark:bg-white 
            text-4xl md:text-5xl rounded-full cursor-pointer"
            onClick={scrollToTop}
          >
            <BsArrowUpCircle></BsArrowUpCircle>
          </button>
        )}
      </div>
    </div>
</>
  );
};

export default Home;
