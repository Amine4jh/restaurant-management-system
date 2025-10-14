const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-15 bg-dark text-beige">
      <a href="" className="text-primary text-3xl font-bold">
        Red<span className="text-gold">Sky</span>
      </a>
      <div className="flex gap-10">
        <a
          className="border-b-2 font-semibold border-transparent hover:border-lightRed py-2 hover:text-lightRed transition duration-300 ease hover:scale-110"
          href=""
        >
          Restaurant
        </a>
        <a
          className="border-b-2 font-semibold border-transparent hover:border-lightRed py-2 hover:text-lightRed transition duration-300 ease hover:scale-110"
          href=""
        >
          Features
        </a>
        <a
          className="border-b-2 font-semibold border-transparent hover:border-lightRed py-2 hover:text-lightRed transition duration-300 ease hover:scale-110"
          href=""
        >
          About
        </a>
        <a
          className="border-b-2 font-semibold border-transparent hover:border-lightRed py-2 hover:text-lightRed transition duration-300 ease hover:scale-110"
          href=""
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-8">
        <a
          href=""
          className="p-2 border-2 border-transparent rounded font-bold hover:border-beige transition duration-300 ease hover:scale-110"
        >
          Log In
        </a>
        <a
          href=""
          className="p-2 bg-beige text-dark border-2 border-beige rounded font-bold hover:bg-transparent hover:text-beige transition duration-300 ease hover:scale-110"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
