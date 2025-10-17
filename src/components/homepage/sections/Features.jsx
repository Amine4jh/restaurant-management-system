import FeaturesCards from "../common/FeaturesCards";

const Features = () => {
  return (
    <div className="bg-dark text-beige text-center px-30 py-50">
      <h1 className="text-4xl font-bold">
        <span className="text-gold">Why</span> Choose RedSky?
      </h1>
      <p className="text-lg px-70 my-5 opacity-50">
        At RedSky, we go beyond delicious meals — we create a seamless dining
        experience. From effortless reservations to fast service, every detail
        is designed to make your visit unforgettable.
      </p>
      <FeaturesCards />
    </div>
  );
};

export default Features;
