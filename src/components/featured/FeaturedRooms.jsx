import { Link } from "react-router-dom";

const FeaturedRooms = () => {
    return (
        <>
            <section className="mt-10">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Explore our <span className="text-green-400">featured Rooms</span></h2>
            <p className="mb-4">Indulge in luxury and comfort with our meticulously curated featured rooms. Whether you seek a tranquil ocean view or a vibrant cityscape, our rooms are designed to elevate your stay. As strategists, designers, and developers, we ensure a seamless experience tailored to your preferences.</p>
            <p>Experience innovation and problem-solving woven into every detail. Our commitment is to simplicity and speed, delivering the scope you desire at the pace you need.</p>
            <Link to={'/rooms'}>
            <button className="mt-3 btn bg-green-400 border-none px-8 py-3 rounded-full hover:bg-gray-600 hover:text-gray-200 hover:scale-105 transform transition duration-300">Book now</button>
            </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://i.ibb.co/YBbrQSH/bed-3804251-640.jpg" alt="featured room" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://i.ibb.co/Yyvfvzg/bedroom-window-1434067-640.jpg" alt="featured room" />
        </div>
    </div>
</section>
        </>
    );
};

export default FeaturedRooms;