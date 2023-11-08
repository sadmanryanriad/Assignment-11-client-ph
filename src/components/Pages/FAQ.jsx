const FAQ = () => {
    return (
      <>
        <div className="max-w-7xl mx-auto">
          <section className="">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  Get answers to the most common questions about your stay at our
                  hotel.
                </p>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="w-full lg:w-1/2 px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-300 dark:text-gray-700 rounded-md py-2 px-4">
                      How long can I stay at the hotel?
                    </summary>
                    <span>
                      You can stay at our hotel for as long as you have a
                      reservation. We offer short-term and long-term stays to
                      accommodate your needs.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-300 dark:text-gray-700 rounded-md py-2 px-4">
                      What amenities are included in my room?
                    </summary>
                    <span>
                      Each room at our hotel is equipped with modern amenities,
                      including a comfortable bed, TV, free Wi-Fi, and a private
                      bathroom. Some rooms may offer additional features like
                      kitchenettes or scenic views.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-300 dark:text-gray-700 rounded-md py-2 px-4">
                      Can I cancel or modify my reservation?
                    </summary>
                    <span>
                      Yes, you can cancel or modify your reservation, but there
                      may be specific terms and conditions. Please refer to our
                      cancellation policy or contact our reservations team for
                      assistance.
                    </span>
                  </details>
                </div>
                <div className="w-full lg:w-1/2 px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-300 dark:text-gray-700 rounded-md py-2 px-4">
                      Is breakfast included in my reservation?
                    </summary>
                    <span className="px-4 py-2">
                      Breakfast options vary depending on your room package. Some
                      reservations include a complimentary breakfast, while others
                      may offer it as an add-on. Check your reservation details for
                      specifics.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-300 dark:text-gray-700 rounded-md py-2 px-4">
                      How can I contact the hotel for assistance?
                    </summary>
                    <span className="px-4 py-2">
                      You can reach our customer support team through our website,
                      email, or by calling our customer service hotline. Were
                      here to assist you with any questions or concerns you may
                      have.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-300 dark:text-gray-700 rounded-md py-2 px-4">
                      Can I request additional services during my stay?
                    </summary>
                    <span className="px-4 py-2">
                      Absolutely! If you require additional services or have
                      special requests, please contact our front desk or
                      concierge, and well do our best to accommodate your needs.
                    </span>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  };
  
  export default FAQ;
  