import AboutCards from "../homepage/AboutCards";

const About = () => {
  return (
    <div className="bg-lightRed text-beige text-center px-30 py-50">
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
            src="./images/about.webp"
            alt="About Image"
            width={530}
            className="rounded shadow-xl"
          />
          <p className="opacity-50 mt-2">A photo of the restaurant team.</p>
        </div>
        <AboutCards />
      </div>
    </div>
  );
};

export default About;
