import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const AdminHeader = () => {
  return (
    <header className="flex justify-between items-center py-8 px-15 bg-dark text-beige">
      <form action="" className="relative flex gap-2">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch className="text-lg text-beige" />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="block w-full p-3 ps-10 text-sm text-beige outline-0 border-2 border-transparent focus:border-beige rounded bg-darkGray"
        />
        <button className="p-2 bg-beige text-dark border-2 border-beige rounded font-bold hover:bg-transparent hover:text-beige transition duration-300 ease cursor-pointer">
          Search
        </button>
      </form>

      {/* <div className="flex gap-10">
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
        </div> */}

      {/* <div className="flex items-center gap-8">
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
        </div> */}
    </header>
  );
};

export default AdminHeader;
