const NewsLetter = () => {
  return (
    <>
      <section className="dark:text-gray-300">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold dark:text-gray-300 sm:text-4xl dark:text-white">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <div className="join">
              <input
                className="input input-bordered join-item p-2"
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-lg bg-green-400 dark: border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
