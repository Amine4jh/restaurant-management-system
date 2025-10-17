const FeaturesCards = () => {
  return (
    <div className="grid grid-cols-2 gap-y-5 gap-x-15 px-40 mt-20 text-start">
      <div className="bg-dark brightness-80 hover:brightness-110 rounded py-5 px-10 w-110 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
        <h3 className="text-2xl font-semibold">Smart Reservations</h3>
        <p className="text-lg opacity-60 mt-2">
          Book your table online in seconds with instant confirmation.
        </p>
      </div>
      <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 w-110 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
        <h3 className="text-2xl font-semibold">Fast & Fresh Service</h3>
        <p className="text-lg opacity-60 mt-2">
          Your meals are prepared and served with precision and care.
        </p>
      </div>
      <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 w-110 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
        <h3 className="text-2xl font-semibold">Online Ordering</h3>
        <p className="text-lg opacity-60 mt-2">
          Enjoy your favorite dishes from home with our easy-to-use ordering
          system.
        </p>
      </div>
      <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 w-110 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
        <h3 className="text-2xl font-semibold">Secure Payments</h3>
        <p className="text-lg opacity-60 mt-2">
          Pay safely online or in person with our trusted payment system.
        </p>
      </div>
      <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 w-110 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
        <h3 className="text-2xl font-semibold">Real-Time Management</h3>
        <p className="text-lg opacity-60 mt-2">
          Admins can track orders, staff, and sales all in one dashboard.
        </p>
      </div>
      <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 w-110 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
        <h3 className="text-2xl font-semibold">Customer Satisfaction</h3>
        <p className="text-lg opacity-60 mt-2">
          Every guest is treated like family — because your happiness is our
          success.
        </p>
      </div>
    </div>
  );
};

export default FeaturesCards;
