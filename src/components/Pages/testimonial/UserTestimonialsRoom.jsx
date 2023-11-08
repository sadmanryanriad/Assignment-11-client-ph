import PropTypes from "prop-types";
import { useState } from "react";
import TestimonialCard from "../testimonial/TestimonialCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";

const UserTestimonialsRoom = ({ roomId, ratingsCount }) => {
  const [expanded, setExpanded] = useState(false);

  const [ratings, setRatings] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/ratings/${roomId}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setRatings(res.data);
    });
  }, [axiosSecure, url]);

  //how many ratings to show
  const displayRatings = expanded ? ratings : ratings.slice(0, 3);

  // Check if there are 3 or fewer ratings
  const shouldShowSeeMoreButton = ratings.length > 3;

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center dark:text-slate-300">
          User Testimonials - ({ratingsCount})
        </h2>

        <div className="mt-8 grid grid-cols-1 p-2 md:grid-cols-3 gap-6">
          {displayRatings.map((testimonial) => (
            <TestimonialCard
              key={testimonial?._id}
              image={testimonial?.photoURL}
              name={testimonial?.displayName}
              rating={parseInt(testimonial?.rating)}
              content={testimonial?.message}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          {shouldShowSeeMoreButton && (
            <button
              className="btn bg-green-400 border-none px-8 py-3 rounded-full hover:bg-gray-600 hover:text-gray-200 hover:scale-105 transform transition duration-300"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

UserTestimonialsRoom.propTypes = {
  roomId: PropTypes.string,
  ratingsCount: PropTypes.number,
};

export default UserTestimonialsRoom;
