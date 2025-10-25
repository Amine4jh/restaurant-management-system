import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSideBar from "../components/admin/AdminSideBar";
import AdminFooter from "../components/admin/AdminFooter";

const AdminLayout = () => {
  return (
    <>
      <div className="flex">
        <AdminSideBar />
        <div className="flex-1">
          <AdminHeader />
          <Outlet />
          <AdminFooter />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
