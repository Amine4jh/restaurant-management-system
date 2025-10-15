import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-15 bg-dark text-beige">
      <Link to={"/"} className="text-primary text-3xl font-bold">
        Red<span className="text-gold">Sky</span>
      </Link>
      <div className="flex gap-10">
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
    </header>
  );
};

export default Header;
