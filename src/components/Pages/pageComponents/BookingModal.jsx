import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

// eslint-disable-next-line react/prop-types
const BookingModal = ({handleBooking,closeModal,handleDateChange,selectedDate}) => {

 
  return (
    <>
      <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-8">Price: $200</h2>
            <p className="text-lg mb-2"><span className="font-bold">Room Number:</span> 403</p>
            <p className="text-lg mb-2"><span className="font-bold">Room:</span> Deluxe Luxury Room</p>
            <p className="text-lg"><span className="font-bold">Email:</span> sadmanryanriad@gmail.com</p>
            {/* Style the date picker */}
            <div className="mt-4">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                isClearable
                showYearDropdown
                placeholderText="Select a Date"
                minDate={new Date()}
                className="w-full border border-gray-300 rounded p-2 text-base text-gray-700"
              />
            </div>

            <div className="p-3 mt-4 text-center space-x-4 md:block">
              <button onClick={closeModal} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Cancel
              </button>
              <button
                onClick={handleBooking}
                className="mb-2 md:mb-0 bg-green-500 border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-gray-600"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
