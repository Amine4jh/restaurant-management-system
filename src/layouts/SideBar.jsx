import { SideBarContext, useExpandedContext } from "../context";
import { useEffect, useState } from "react";
import { CgPushChevronLeftO, CgPushChevronRightO } from "react-icons/cg";
import { MdOutlineMoreVert } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

export const SideBar = ({ children, sendExpandedStatut }) => {
  const [expanded, setExpanded] = useState(true);

  // When on mobile sidebar close automatically
  useEffect(() => {
    if (window.innerWidth < 1280) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }, []);

  const handleExpand = () => {
    setExpanded(!expanded);
    sendExpandedStatut(expanded);
  };
  return (
    <aside className="h-screen fixed top-0 left-0 z-1">
      <nav className="h-full flex flex-col bg-dark py-3 border-r border-beige">
        <div className="px-4 pb-4 border-b text-beige flex justify-between items-center">
          <Link
            to="/admin"
            className={`text-primary text-3xl font-bold overflow-hidden transition-all ${
              expanded ? "w-full" : "w-0"
            }`}
          >
            Red<span className="text-gold">Sky</span>
          </Link>
          <div className="flex flex-col items-center">
            <Link
              to="/admin"
              className={`overflow-hidden transition-all mb-1 ${
                expanded ? "w-0" : "w-10"
              }`}
            >
              <img src="./images/logo-icon.webp" alt="" />
            </Link>
            <button
              onClick={handleExpand}
              className="p-1.5 text-2xl hover:bg-darkGray rounded-lg cursor-pointer"
            >
              {expanded ? <CgPushChevronLeftO /> : <CgPushChevronRightO />}
            </button>
          </div>
        </div>
        <SideBarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">{children}</ul>
        </SideBarContext.Provider>
        <div className="border-t text-beige flex p-3">
          <img
            src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div
            className={`flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs opacity-50">johndoe@gmail.com</span>
            </div>
            <div className="hover:bg-darkGray p-2 text-lg rounded-full cursor-pointer">
              <MdOutlineMoreVert />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export const SideBarItems = ({ to, icon, text }) => {
  const expanded = useExpandedContext();
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) => `relative flex items-center py-2 px-3 my-1 
      font-medium rounded-md cursor-pointer border-l-3 
      transition duration-150 ease-in hover:bg-darkGray group
        ${
          isActive
            ? "text-lightRed border-lightRed"
            : "text-beige border-transparent"
        }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-darkGray text-beige text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </NavLink>
  );
};
