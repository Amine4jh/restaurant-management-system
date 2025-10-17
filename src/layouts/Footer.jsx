import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-beige">
      <div className="pt-30 max-w-[1240px] mx-auto">
        <div className="flex lg:items-start items-center justify-evenly">
          <Link to={"/"}>
            <h1 className="text-primary lg:text-5xl md:text-4xl text-3xl font-bold">
              Red<span className="text-gold">Sky</span>
            </h1>
          </Link>
          <div className="flex flex-col lg:items-start">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-5 mb-2 text-start">
              Quick Links
            </h2>
            <Link
              to={"/"}
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              Restaurant
            </Link>
            <Link
              to={"/"}
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              Features
            </Link>
            <Link
              to={"/"}
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              About
            </Link>
            <Link
              to={"/"}
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col lg:items-start">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-5 mb-2 text-start">
              Social Links
            </h2>
            <a
              href=""
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              GitHub
            </a>
            <a
              href=""
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href=""
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              YouTube
            </a>
            <a
              href=""
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              X
            </a>
          </div>
          <div className="flex flex-col lg:items-start">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-5 mb-2 text-start">
              Additional Links
            </h2>
            <Link
              to={"/"}
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              to={"/"}
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/"}
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              Carrer
            </Link>
            <Link
              to={"/"}
              className="lg:text-lg md:text-base text-sm opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
            >
              FAQs
            </Link>
          </div>
        </div>
        <p className="text-center md:text-base text-sm opacity-50 mt-20">
          © 2025 <b>RedSky</b>. All rights reserved.
        </p>
        <p className="text-center md:text-base text-sm opacity-50">
          Powered by <b>HeroSolve Dev.</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
