import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[url(./images/home-bg.webp)] bg-no-repeat bg-cover">
      <div className="backdrop-brightness-30 px-100 py-65 text-center">
        <h1 className="text-beige text-6xl font-bold">
          Experience the Taste of Perfection
        </h1>
        <h3 className="text-lightRed text-6xl font-bold">
          Anytime, <span className="text-gold">Anywhere</span>
        </h3>
        <p className="text-beige px-5 my-10 text-xl opacity-75">
          Welcome to <b>RedSky</b>, your all-in-one restaurant management and
          dining experience. From table reservations to online orders — we've
          got you covered.
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link
            to={"/signup"}
            className="text-xl px-5 py-2 bg-gold text-dark border-2 border-gold rounded font-bold hover:bg-transparent hover:text-gold transition duration-300 ease hover:scale-110"
          >
            Get Started For Free!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
