import AboutCard from "../common/AboutCard";

const About = () => {
  return (
    <div className="bg-lightRed text-beige">
      <div className="max-w-[1240px] mx-auto text-center py-50">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
          <span className="text-gold">About</span> RedSky
        </h1>
        <p className="lg:text-lg lg:px-60 md:px-30 px-10 my-5 opacity-50">
          At RedSky, we blend technology and taste. Our mission is to simplify
          restaurant operations while providing customers a delightful dining
          experience. Whether you're a restaurant owner managing daily
          operations or a foodie exploring new meals — we bring it all together
          seamlessly.
        </p>
        <div className="flex lg:flex-row flex-col justify-between items-center px-10 mt-20 lg:gap-0 gap-15">
          <div className="transition duration-150 ease hover:scale-110">
            <img
              src="./images/about.webp"
              alt="About Image"
              width={530}
              className="rounded shadow-xl"
            />
            <p className="opacity-50 mt-2">A photo of the restaurant team.</p>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <AboutCard
              title="Our Vision"
              desc="Empowering restaurants with smarter tools."
            />
            <AboutCard
              title="Our Values"
              desc="Quality, innovation, and customer satisfaction."
            />
            <AboutCard
              title="Our Mission"
              desc="To deliver unforgettable dining experiences."
            />
            <AboutCard
              title="Our Promise"
              desc="Exceptional service and a taste you'll always remember."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
