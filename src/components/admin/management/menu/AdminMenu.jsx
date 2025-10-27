import { useState } from "react";
import AddMenuForm from "./AddMenuForm";
import AdminFilterNav from "./AdminFilterNav";
import MenuCard from "./MenuCard";

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Recieve statut from AdminFilterNav
  const handleMessage = (openStatut) => {
    setIsOpen(!openStatut);
  };

  return (
    <div className="bg-beige sm:p-10 p-5">
      <AdminFilterNav openStatut={handleMessage} />
      <AddMenuForm isOpen={isOpen} />
      <div
        className={`grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 -mt-10 ${
          isOpen && "mt-5"
        }`}
      >
        {/* create a loop on meals from database */}
        <MenuCard
          image="/images/salads.webp"
          title="Moroccan Salad"
          category="Salads"
          description="A mix of greens, veggies, and dressings for a healthy start."
          price="121.99"
        />
        {/* End loop */}
      </div>
    </div>
  );
};

export default AdminMenu;
