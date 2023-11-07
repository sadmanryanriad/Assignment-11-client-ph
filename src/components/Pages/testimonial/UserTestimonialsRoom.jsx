import { useState } from "react";
import TestimonialCard from "../testimonial/TestimonialCard";

const UserTestimonialsRoom = () => {
  const [expanded, setExpanded] = useState(false);

  const testimonials = [
    {
      id: 1,
      image: "https://i.ibb.co/wybYrpD/event.png",
      name: "Paul Starr",
      rating: 5,
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt...",
    },
    {
      id: 2,
      image: "https://i.ibb.co/wybYrpD/event.png",
      name: "Jane Doe",
      rating: 4,
      content: "Saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam! ",
    },
    // Add more initial testimonials here
    {
      id: 3,
      image: "https://i.ibb.co/image3.png",
      name: "John Smith",
      rating: 5,
      content: "The best hotel I've ever stayed in. The staff is friendly, and the rooms are clean and comfortable. Highly recommended!",
    },
  ];

  const displayedTestimonials = expanded ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center dark:text-slate-300">
          User Testimonials
        </h2>

        <div className="mt-8 grid grid-cols-1 p-2 md:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              content={testimonial.content}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          {expanded ? (
            <button
              className="btn bg-green-500 text-white hover:bg-gray-600"
              onClick={() => setExpanded(false)}
            >
              See Less
            </button>
          ) : (
            <button
              className="mt-3 btn bg-green-400 border-none px-8 py-3 rounded-full hover:bg-gray-600 hover:text-gray-200 hover:scale-105 transform transition duration-300"
              onClick={() => setExpanded(true)}
            >
              See More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserTestimonialsRoom;