import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-dark">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto py-8 px-10 bg-dark text-beige">
        <div className="flex items-center gap-5">
          {/* NavBar Icon (Menu) */}
          <div onClick={handleNav} className="block lg:hidden">
            <AiOutlineMenu size={25} />
          </div>

          <Link to={"/"} className="text-primary text-3xl font-bold">
            Red<span className="text-gold">Sky</span>
          </Link>
        </div>
        <div className="hidden gap-10 lg:flex">
          <Link
            className="border-b-2 font-semibold border-transparent hover:border-lightRed py-2 hover:text-lightRed transition duration-300 ease hover:scale-110"
            to={"/"}
          >
            Restaurant
          </Link>
          <Link
            className="border-b-2 font-semibold border-transparent hover:border-lightRed py-2 hover:text-lightRed transition duration-300 ease hover:scale-110"
            to={"/"}
          >
            Features
          </Link>
          <Link
            className="border-b-2 font-semibold border-transparent hover:border-lightRed py-2 hover:text-lightRed transition duration-300 ease hover:scale-110"
            to={"/"}
          >
            About
          </Link>
          <Link
            className="border-b-2 font-semibold border-transparent hover:border-lightRed py-2 hover:text-lightRed transition duration-300 ease hover:scale-110"
            to={"/"}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link
            to={"/login"}
            className="p-2 border-2 border-transparent rounded font-bold hover:border-beige transition duration-300 ease hover:scale-110"
          >
            Log In
          </Link>
          <Link
            to={"/signup"}
            className="p-2 bg-beige text-dark border-2 border-beige rounded font-bold hover:bg-transparent hover:text-beige transition duration-300 ease hover:scale-110"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile NavBar */}
        <div
          className={
            !nav
              ? "fixed top-0 start-0 w-[60%] h-full border-r p-4 bg-dark ease-in-out duration-500 z-1"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex items-center justify-between">
            <Link to={"/"} className="text-primary text-3xl font-bold">
              Red<span className="text-gold">Sky</span>
            </Link>
            <div onClick={handleNav} className="block lg:hidden">
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className="py-4">
            <Link className="border-b font-semibold py-6 px-2 block" to={"/"}>
              Restaurant
            </Link>
            <Link className="border-b font-semibold py-6 px-2 block" to={"/"}>
              Features
            </Link>
            <Link className="border-b font-semibold py-6 px-2 block" to={"/"}>
              About
            </Link>
            <Link className="font-semibold py-6 px-2 block" to={"/"}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
