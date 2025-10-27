const FeaturesCard = ({ title, desc }) => {
  return (
    <div className="bg-dark brightness-80 hover:brightness-100 rounded py-5 px-10 md:w-110 w-90 shadow/20 shadow-beige/30 transition duration-150 ease hover:scale-110 hover:shadow-xl/20">
      <h3 className="lg:text-2xl md:text-xl text-lg font-semibold">{title}</h3>
      <p className="lg:text-lg md:text-base text-sm opacity-60 mt-2">{desc}</p>
    </div>
  );
};

export default FeaturesCard;
