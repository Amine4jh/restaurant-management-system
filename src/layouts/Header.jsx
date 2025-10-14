const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-15 bg-zinc-900 text-zinc-50">
      <a href="" className="text-3xl font-bold">
        RedSky
      </a>
      <div className="flex gap-10">
        <a
          className="border-b-2 font-semibold border-transparent hover:border-zinc-400 py-1 hover:text-zinc-400 transition duration-300 ease hover:scale-110"
          href=""
        >
          Restaurant
        </a>
        <a
          className="border-b-2 font-semibold border-transparent hover:border-zinc-400 py-1 hover:text-zinc-400 transition duration-300 ease hover:scale-110"
          href=""
        >
          Features
        </a>
        <a
          className="border-b-2 font-semibold border-transparent hover:border-zinc-400 py-1 hover:text-zinc-400 transition duration-300 ease hover:scale-110"
          href=""
        >
          About
        </a>
        <a
          className="border-b-2 font-semibold border-transparent hover:border-zinc-400 py-1 hover:text-zinc-400 transition duration-300 ease hover:scale-110"
          href=""
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-8">
        <a
          href=""
          className="p-2 border-2 border-transparent rounded font-bold hover:border-zinc-50 transition duration-300 ease hover:scale-110"
        >
          Log In
        </a>
        <a
          href=""
          className="p-2 bg-zinc-50 text-zinc-900 border-2 border-zinc-50 rounded font-bold hover:bg-transparent hover:text-zinc-50 transition duration-300 ease hover:scale-110"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
