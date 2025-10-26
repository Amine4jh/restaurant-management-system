import { SideBar, SideBarItems } from "../../layouts/SideBar";
import {
  MdErrorOutline,
  MdOutlineAdminPanelSettings,
  MdOutlineBusinessCenter,
  MdOutlineDashboard,
  MdOutlineListAlt,
  MdOutlinePeople,
  MdOutlinePhonelink,
  MdOutlineRestaurantMenu,
  MdOutlineTableRestaurant,
} from "react-icons/md";

const AdminSideBar = ({ isExpanded }) => {
  // Just for pass the extend statut to "AdminLayout"
  const handleMessage = (sendExpandedStatut) => {
    isExpanded(sendExpandedStatut);
  };

  return (
    <SideBar sendExpandedStatut={handleMessage}>
      <SideBarItems
        to="/admin"
        icon={<MdOutlineDashboard />}
        text="Dashboard"
      />
      <hr className="text-beige opacity-35 my-3" />
      <SideBarItems
        to="/admin/menu"
        icon={<MdOutlineRestaurantMenu />}
        text="Menu"
      />
      <SideBarItems to="/admin/orders" icon={<MdOutlineListAlt />} text="Orders" />
      <SideBarItems
        to="/admin/reservations"
        icon={<MdOutlinePhonelink />}
        text="Reservations"
      />
      <SideBarItems
        to="/admin/tables"
        icon={<MdOutlineTableRestaurant />}
        text="Tables"
      />
      <hr className="text-beige opacity-35 my-3" />
      <SideBarItems
        to="/admin/"
        icon={<MdOutlineAdminPanelSettings />}
        text="Admin"
      />
      <SideBarItems
        to="/admin/"
        icon={<MdOutlineBusinessCenter />}
        text="Employees"
      />
      <SideBarItems icon={<MdOutlinePeople />} text="Customers" to="/admin/" />
      <hr className="text-beige opacity-35 my-3" />
      <SideBarItems to="/admin/" icon={<MdErrorOutline />} text="Reports" />
    </SideBar>
  );
};

export default AdminSideBar;
