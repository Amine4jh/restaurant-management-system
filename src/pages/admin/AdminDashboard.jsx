import AdminHeader from "../../layouts/admin/AdminHeader";
import AdminNav from "../../layouts/admin/AdminNav";

const AdminDashboard = () => {
  return (
    <>
      <AdminHeader />
      <div className="flex">
        <AdminNav />
        <div className="flex-4">
          <h1>test</h1>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
