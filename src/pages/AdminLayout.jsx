import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import AdminNav from "../components/admin/AdminNav";
import AdminFooter from "../components/admin/AdminFooter";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <div className="flex">
        <AdminNav />
        <Outlet></Outlet>
      </div>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
