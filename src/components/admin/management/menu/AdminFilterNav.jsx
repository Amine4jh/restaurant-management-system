import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const AdminFilterNav = ({ openStatut }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenStatut = () => {
    setIsOpen(!isOpen);
    // send statut to parentElement (AdminMenu) as a prop
    openStatut(isOpen);
  };

  return (
    <div
      className={`w-full flex lg:flex-row flex-col gap-5 items-center justify-between bg-dark p-5 rounded shadow-lg 
          ${isOpen && "mb-5"}`}
    >
      <form action="" className="relative flex sm:flex-row flex-col gap-2">
        <div className="absolute sm:inset-y-0 top-2 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch className="text-lg text-beige" />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="block w-full py-1 px-4 ps-10 text-sm text-beige outline-0 border-2 border-transparent focus:border-beige rounded bg-darkGray"
        />
        <button className="py-1 px-4 bg-beige text-dark border-2 rounded font-semibold hover:bg-transparent hover:text-beige transition cursor-pointer">
          Search
        </button>
      </form>
      <nav className="sm:flex grid grid-cols-2 gap-2 flex-1">
        <button className="py-1 px-4 bg-beige text-dark border-2 rounded font-semibold hover:bg-transparent hover:text-beige transition cursor-pointer">
          All
        </button>
        <button className="py-1 px-4 bg-beige text-dark border-2 rounded font-semibold hover:bg-transparent hover:text-beige transition cursor-pointer">
          Title
        </button>
        <button className="py-1 px-4 bg-beige text-dark border-2 rounded font-semibold hover:bg-transparent hover:text-beige transition cursor-pointer">
          Category
        </button>
        <button className="py-1 px-4 bg-beige text-dark border-2 rounded font-semibold hover:bg-transparent hover:text-beige transition cursor-pointer">
          Price
        </button>
      </nav>
      <button
        onClick={handleOpenStatut}
        className="py-1 px-4 bg-gold text-dark border-2 rounded font-semibold hover:bg-transparent hover:text-gold transition cursor-pointer"
      >
        {isOpen ? "Hide meal form" : "Add new meal"}
      </button>
    </div>
  );
};

export default AdminFilterNav;
