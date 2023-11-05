import PropTypes from 'prop-types';

const PromotionSectionImg = ({img}) => {
  return (
    <>
      <img
        className="w-full h-60 md:h-96 rounded-lg shadow-lg "
        src={img}
        alt=""
      />
    </>
  );
};

PromotionSectionImg.propTypes = {
    img: PropTypes.string
  };

export default PromotionSectionImg;
