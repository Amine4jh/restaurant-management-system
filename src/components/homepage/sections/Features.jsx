import FeaturesCards from "../common/FeaturesCards";

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
        <FeaturesCards />
      </div>
    </div>
  );
};

export default Features;
