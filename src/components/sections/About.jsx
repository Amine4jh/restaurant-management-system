const About = () => {
  return (
    <div className="bg-lightRed text-beige text-center p-30">
      <h1 className="text-4xl font-bold">
        <span className="text-gold">About</span> RedSky
      </h1>
      <p className="text-lg px-70 my-5 opacity-50">
        At RedSky, we blend technology and taste. Our mission is to simplify
        restaurant operations while providing customers a delightful dining
        experience. Whether you're a restaurant owner managing daily operations
        or a foodie exploring new meals — we bring it all together seamlessly.
      </p>
      <div className="flex justify-between px-10 mt-20">
        <div className="transition duration-150 ease hover:scale-110">
          <img
            src="./images/about.jpg"
            alt="About Image"
            width={530}
            className="rounded shadow-xl"
          />
          <p className="opacity-50 mt-2">A photo of the restaurant team.</p>
        </div>
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
              Exceptional service and a taste you'll always
              remember.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
