const AboutCard = ({ title, desc }) => {
  return (
    <div className="bg-primary rounded py-3 px-5 lg:w-130 md:w-120 w-100 shadow transition duration-150 ease hover:scale-110 hover:shadow-xl hover:brightness-90">
      <h3 className="lg:text-2xl md:text-xl text-lg font-semibold">{title}</h3>
      <p className="lg:text-lg md:text-base text-sm opacity-60">{desc}</p>
    </div>
  );
};

export default AboutCard;
