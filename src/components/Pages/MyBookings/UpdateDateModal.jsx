import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const UpdateDateModal = ({ handleUpdateModal, closeModal, handleDateChange, selectedDate, bookedDate }) => {
  const disabledDates = [bookedDate];

  return (
    <>
      <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  dark:bg-gray-800 bg-white">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-8">Select a new Date:</h2>
            <div className="mt-4">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                isClearable
                showYearDropdown
                placeholderText="Select a Date"
                minDate={new Date()}
                excludeDates={disabledDates}
                className="w-full border border-gray-300 rounded p-2 text-base text-gray-700"
              />
            </div>

            <div className="p-3 mt-4 text-center space-x-4 md:block">
              <button
                onClick={closeModal}
                className="mb-2 border-none md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateModal}
                className="mb-2 border-none md:mb-0 bg-green-500 border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-gray-600"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UpdateDateModal.propTypes = {
  handleUpdateModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  bookedDate: PropTypes.instanceOf(Date).isRequired,
};

export default UpdateDateModal;
