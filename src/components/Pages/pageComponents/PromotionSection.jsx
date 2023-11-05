
const PromotionSection = () => {
  return (
    <section className="mt-20 md:mt-32 dark:text-gray-300">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center px-4 md:px-0">
        <div className="flex-1">
        <h2 className="text-4xl mb-8 font-extrabold text-orange-400">
            Special Offers
          </h2>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold ">
              Limited Time Promotion
            </h3>
            <p className="">
              Book now and get a <span className="text-red-600">15% discount</span> on your stay. Dont miss out!
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold ">
              Family Vacation Deal
            </h3>
            <p className="">
              Planning a family vacation? Get a free nights stay for your kids.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold ">
              Honeymoon Package
            </h3>
            <p className="">
              Celebrate your love with our exclusive honeymoon package.
            </p>
          </div>
          </div> 
          <div className="flex-1 mt-10 md:mt-0">
            <img className="w-full h-auto rounded-lg shadow-lg " src="https://i.ibb.co/N9nDqXk/hotel-room-high-quality-img-1.jpg" alt="" />
          </div>
      </div>
    </section>
  );
};

export default PromotionSection;



// const PromotionSection = () => {
//   return (
//     <section className="py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
//         {/* Left side with colorful headings and promotional messages */}
//         <div className="flex-1 text-center md:text-left">
//           <h2 className="text-4xl font-extrabold text-indigo-600">
//             Special Offers
//           </h2>
//           <div className="mb-4">
//             <h3 className="text-2xl font-semibold text-gray-800">
//               Limited Time Promotion
//             </h3>
//             <p className="text-gray-600">
//               Book now and get a 15% discount on your stay. Dont miss out!
//             </p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-2xl font-semibold text-gray-800">
//               Family Vacation Deal
//             </h3>
//             <p className="text-gray-600">
//               Planning a family vacation? Get a free nights stay for your kids.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800">
//               Honeymoon Package
//             </h3>
//             <p className="text-gray-600">
//               Celebrate your love with our exclusive honeymoon package.
//             </p>
//           </div>
//         </div>
//         {/* Right side with a stunning image */}
//         <div className="flex-1">
//           <img
//             src="https://i.ibb.co/N9nDqXk/hotel-room-high-quality-img-1.jpg"
//             alt="Stunning Image"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromotionSection;
