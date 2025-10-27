import FeaturesCard from "../common/FeaturesCard";

const Features = () => {
  return (
    <div className="bg-dark text-beige">
      <div className="max-w-[1240px] mx-auto text-center py-50">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
          <span className="text-gold">Why</span> Choose RedSky?
        </h1>
        <p className="lg:text-lg lg:px-60 md:px-30 px-10 my-5 opacity-50">
          At RedSky, we go beyond delicious meals — we create a seamless dining
          experience. From effortless reservations to fast service, every detail
          is designed to make your visit unforgettable.
        </p>
        <div className="flex mt-20 items-center text-start justify-evenly lg:flex-row flex-col lg:gap-0 gap-10">
          <div className="flex flex-col justify-between gap-10">
            <FeaturesCard
              title="Smart Reservations"
              desc="Book your table online in seconds with instant confirmation."
            />
            <FeaturesCard
              title="Fast & Fresh Service"
              desc="Your meals are prepared and served with precision and care."
            />
            <FeaturesCard
              title="Online Ordering"
              desc="Enjoy your favorite dishes from home with our easy-to-use ordering system."
            />
          </div>
          <div className="flex flex-col justify-between gap-10">
            <FeaturesCard
              title="Secure Payments"
              desc="Pay safely online or in person with our trusted payment system."
            />
            <FeaturesCard
              title="Real-Time Management"
              desc="Admins can track orders, staff, and sales all in one dashboard."
            />
            <FeaturesCard
              title="Customer Satisfaction"
              desc="Every guest is treated like family — because your happiness is our success."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
