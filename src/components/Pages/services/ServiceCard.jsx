import PropTypes from "prop-types";

const ServiceCard = ({ id, title, image }) => {
  return (
    <div
      key={id}
      className="group p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center 
    transition transform hover:-translate-y-1 hover:shadow-xl"
    >
      <img src={image} alt={title} className="w-16 h-16 mx-auto mb-2" />
      <div className="text-lg dark:text-white group-hover:text-orange-400">
        {title}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

export default ServiceCard;
