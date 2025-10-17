import { CgNotes } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { GoFileSymlinkFile } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LuChefHat } from "react-icons/lu";
import {
  MdOutlineDashboard,
  MdOutlineReportGmailerrorred,
  MdOutlineRestaurantMenu,
  MdOutlineTableBar,
} from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="bg-darkGray flex-1 h-full flex flex-col py-3">
      <NavLink
        id="navlink"
        to="/admin"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <MdOutlineDashboard className="text-lg" />
        Dashboard Overview
      </NavLink>
      <h6 className="my-2 text-sm font-semibold text-beige opacity-60 px-5">
        Management
      </h6>
      <NavLink
        id="navlink"
        to="/admin/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <MdOutlineRestaurantMenu className="text-lg" />
        Manage Menu
      </NavLink>
      <NavLink
        id="navlink"
        to="/admin/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <CgNotes className="text-lg" />
        Manage Orders
      </NavLink>
      <NavLink
        id="navlink"
        to="/admin/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <GoFileSymlinkFile className="text-lg" />
        Manage Reservations
      </NavLink>
      <NavLink
        id="navlink"
        to="/admin/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <MdOutlineTableBar className="text-lg" />
        Manage Tables
      </NavLink>
      <h6 className="my-2 text-sm font-semibold text-beige opacity-60 px-5">
        Users
      </h6>
      <NavLink
        id="navlink"
        to="/admin/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <RiAdminLine className="text-lg" />
        Admin
      </NavLink>
      <NavLink
        id="navlink"
        to="/admin/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <LuChefHat className="text-lg" />
        Employees
      </NavLink>
      <NavLink
        id="navlink"
        to="/admin/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <FiUsers className="text-lg" />
        Customers
      </NavLink>
      <h6 className="my-2 text-sm font-semibold text-beige opacity-60 px-5">
        Others
      </h6>
      <NavLink
        id="navlink"
        to="/admin/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <MdOutlineReportGmailerrorred className="text-lg" />
        Reports
      </NavLink>
      <NavLink
        id="navlink"
        to="/admin/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <IoSettingsOutline className="text-lg" />
        Settings
      </NavLink>
    </nav>
  );
};

export default AdminNav;
