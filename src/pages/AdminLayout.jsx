import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSideBar from "../components/admin/AdminSideBar";
import AdminFooter from "../components/admin/AdminFooter";
import { useState } from "react";

const AdminLayout = () => {
  const [expanded, setExpanded] = useState(false);

  // Handle Extand Statut (False or True)
  const handleExtandStatut = (isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <>
      <AdminSideBar isExpanded={handleExtandStatut} />
      <div
        className={`transition-all w-[calc(100%_-_4.5rem)] ml-18 ${
          expanded ? "" : "xl:w-[calc(100%_-_18rem)] xl:ml-72"
        }`}
      >
        <AdminHeader />
        <Outlet />
        <AdminFooter />
      </div>
    </>
  );
};

export default AdminLayout;
