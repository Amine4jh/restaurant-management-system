import AddMenuForm from "./AddMenuForm";
import MenuCard from "./MenuCard";

const AdminMenu = () => {
  return (
    <div className="bg-beige p-10">
      <AddMenuForm />
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10">
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
