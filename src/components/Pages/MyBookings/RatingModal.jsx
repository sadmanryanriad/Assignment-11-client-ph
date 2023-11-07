import PropTypes from "prop-types";

const RatingModal = ({ handleRating, closeModal }) => {



  return (
    <>
      <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
          <div className="text-center">
            <form onSubmit={handleRating}>
              <select name="rating" className="select select-bordered w-full max-w-xs">
                {/* <option disabled selected>
                  select a rating
                </option> */}
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
              <textarea required name="message" className="textarea textarea-lg mt-5 textarea-warning w-full max-w-xs" placeholder="Write message"></textarea>
              <div className="p-3 mt-4 text-center space-x-4 md:block">
              <p onClick={closeModal} className="btn btn-sm">
                Cancel
              </p>
              <button 
              type="submit"
              className="btn btn-success btn-sm ">
                Rate
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

RatingModal.propTypes = {
    handleRating: PropTypes.func,
    closeModal: PropTypes.func,
  };

export default RatingModal;
