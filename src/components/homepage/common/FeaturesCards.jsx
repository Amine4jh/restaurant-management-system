const FeaturesCards = () => {
  return (
    <div className="flex mt-20 items-center text-start justify-evenly lg:flex-row flex-col lg:gap-0 gap-10">
      <div className="flex flex-col justify-between gap-10">
        <div className="bg-dark brightness-80 hover:brightness-110 rounded py-5 px-10 md:w-110 w-90 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold">
            Smart Reservations
          </h3>
          <p className="lg:text-lg md:text-base text-sm opacity-60 mt-2">
            Book your table online in seconds with instant confirmation.
          </p>
        </div>
        <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 md:w-110 w-90 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold">
            Fast & Fresh Service
          </h3>
          <p className="lg:text-lg md:text-base text-sm opacity-60 mt-2">
            Your meals are prepared and served with precision and care.
          </p>
        </div>
        <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 md:w-110 w-90 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold">
            Online Ordering
          </h3>
          <p className="lg:text-lg md:text-base text-sm opacity-60 mt-2">
            Enjoy your favorite dishes from home with our easy-to-use ordering
            system.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10">
        <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 md:w-110 w-90 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold">
            Secure Payments
          </h3>
          <p className="lg:text-lg md:text-base text-sm opacity-60 mt-2">
            Pay safely online or in person with our trusted payment system.
          </p>
        </div>
        <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 md:w-110 w-90 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold">
            Real-Time Management
          </h3>
          <p className="lg:text-lg md:text-base text-sm opacity-60 mt-2">
            Admins can track orders, staff, and sales all in one dashboard.
          </p>
        </div>
        <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 md:w-110 w-90 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold">
            Customer Satisfaction
          </h3>
          <p className="lg:text-lg md:text-base text-sm opacity-60 mt-2">
            Every guest is treated like family — because your happiness is our
            success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCards;
