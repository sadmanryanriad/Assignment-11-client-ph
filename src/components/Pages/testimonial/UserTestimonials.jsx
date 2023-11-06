import { useState } from "react";
import TestimonialCard from "../testimonial/TestimonialCard";

const UserTestimonials = () => {
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
    {
      id: 4,
      image: "https://i.ibb.co/image4.png",
      name: "Alice Johnson",
      rating: 4,
      content: "Had a great experience at this hotel. The location is perfect, and the amenities are excellent.",
    },
    {
      id: 5,
      image: "https://i.ibb.co/image5.png",
      name: "David Brown",
      rating: 5,
      content: "Outstanding service and beautiful rooms. I'll definitely stay here again on my next trip.",
    },
    {
      id: 6,
      image: "https://i.ibb.co/image6.png",
      name: "Sarah White",
      rating: 4,
      content: "A pleasant stay with courteous staff. The view from the room was breathtaking.",
    },
    {
      id: 7,
      image: "https://i.ibb.co/image7.png",
      name: "Michael Clark",
      rating: 5,
      content: "I've been to many hotels, but this one stands out. The food was delicious, and the room was cozy.",
    },
  ];

  const displayedTestimonials = expanded ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center dark:text-slate-300">
          User Testimonials
        </h2>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
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
              className="hidden md:block mx-auto btn bg-green-400 border-none px-8 py-3 rounded-full hover:bg-gray-800 hover:text-gray-200 hover:scale-105 transform transition duration-300"
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

export default UserTestimonials;
