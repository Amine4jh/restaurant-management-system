const AboutCards = () => {
  return (
    <div className="flex flex-col gap-5 text-start">
      <div className="bg-primary rounded py-3 px-5 w-130 shadow transition duration-150 ease hover:scale-110 hover:shadow-xl hover:brightness-90">
        <h3 className="text-2xl font-semibold">Our Vision</h3>
        <p className="text-lg opacity-60">
          Empowering restaurants with smarter tools.
        </p>
      </div>
      <div className="bg-primary rounded py-3 px-5 w-130 shadow transition duration-150 ease hover:scale-110 hover:shadow-xl hover:brightness-90">
        <h3 className="text-2xl font-semibold">Our Values</h3>
        <p className="text-lg opacity-60">
          Quality, innovation, and customer satisfaction.
        </p>
      </div>
      <div className="bg-primary rounded py-3 px-5 w-130 shadow transition duration-150 ease hover:scale-110 hover:shadow-xl hover:brightness-90">
        <h3 className="text-2xl font-semibold">Our Mission</h3>
        <p className="text-lg opacity-60">
          To deliver unforgettable dining experiences.
        </p>
      </div>
      <div className="bg-primary rounded py-3 px-5 w-130 shadow transition duration-150 ease hover:scale-110 hover:shadow-xl hover:brightness-90">
        <h3 className="text-2xl font-semibold">Our Promise</h3>
        <p className="text-lg opacity-60">
          Exceptional service and a taste you'll always remember.
        </p>
      </div>
    </div>
  );
};

export default AboutCards;
