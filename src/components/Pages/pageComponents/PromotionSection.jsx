import Marquee from "react-fast-marquee";
import PromotionSectionImg from "./PromotionSectionImg";

const images = [
  {
    id: 1,
    img: "https://i.ibb.co/VtMhb5M/Special-60.jpg"
  },
  {
    id: 2,
    img: "https://i.ibb.co/Syx9JSY/columnbangkok-202309050303211.jpg"
  },
  {
    id: 3,
    img: "https://i.ibb.co/mSLq9xs/banner-promotion-quarterari-5.jpg"
  }
];

const imagesReverse = [
  {
    id: 1,
    img: "https://i.ibb.co/W3Zdt8B/Special-Offers-10-Percent.jpg"
  },
  {
    id: 2,
    img: "https://i.ibb.co/RTrFVnk/royalemivzaeimobile600x450.jpg"
  },
  {
    id: 3,
    img: "https://i.ibb.co/gdzMpVw/hotel-special-offers.jpg"
  }
];

const PromotionSection = () => {
  return (
    <section className="mt-20 md:mt-20 dark:text-gray-300">
      {/* text left and image right */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center">
        <div className="flex-1 px-3">
          <h2 className="text-4xl mb-8 font-extrabold text-orange-400">
            Special Offers
          </h2>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold ">Limited Time Offer</h3>
            <p className="">
              Book now and enjoy a <span className="text-red-600">15% discount</span> on your next stay. Dont miss out on this exclusive promotion!
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold ">Family Vacation Deal</h3>
            <p className="">
              Planning a family vacation? Children stay for free! Make the most of your family getaway.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold ">Honeymoon Package</h3>
            <p className="">
              Celebrate your love with our romantic honeymoon package. Create unforgettable memories at our hotel.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <Marquee speed={100} pauseOnClick>
            {images.map((image) => (
              <PromotionSectionImg key={image.id} img={image.img} />
            ))}
          </Marquee>
        </div>
      </div>
      {/* text right and image left */}
      <div className="mt-12 flex flex-col md:flex-row-reverse w-full max-w-7xl mx-auto items-center">
        <div className="flex-1 px-3 text-right">
          <h2 className="text-4xl mb-8 font-extrabold text-orange-400">
            Super luxury
          </h2>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold ">Last-Minute Deals</h3>
            <p className="">
              Grab our last-minute deal and get an extra <span className="text-red-600">10% off</span> your stay. An opportunity you wont want to miss!
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold ">Luxury Getaway</h3>
            <p className="">
              Experience the epitome of luxury with our exclusive offer. Indulge yourself in luxury.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold ">Business Travel</h3>
            <p className="">
              Planning a business trip? Our hotel offers the perfect environment for your work and relaxation needs.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <Marquee speed={100} pauseOnClick direction="right">
            {imagesReverse.map((image) => (
              <PromotionSectionImg key={image.id} img={image.img} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
