import { useState, useEffect } from "react";
import AddMenuForm from "./AddMenuForm";
import AdminFilterNav from "./AdminFilterNav";
import MenuCard from "./MenuCard";
import { fetchMeals } from "../../../../services/mealService";
import LoadingCard from "../../../common/LoadingCard";
import EmptyData from "../../../common/EmptyData";

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Recieve statut from AdminFilterNav
  const handleMessage = (openStatut) => {
    setIsOpen(!openStatut);
  };

  const [products, setProducts] = useState([]); // to store products objects
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(""); // Msg if fetching failed or empty data

  const fetchData = async () => {
    try {
      const products = await fetchMeals();
      if (products.data) {
        setProducts(products.data);
      } else {
        setMsg('There are no meals, click on "Add new meal" button to add one');
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setMsg("Something wrong, please try again in a while!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-beige sm:p-10 p-5 min-h-screen">
      <AdminFilterNav openStatut={handleMessage} />
      <AddMenuForm isOpen={isOpen} />
      <div
        className={`grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 -mt-10 ${
          isOpen && "mt-5"
        }`}
      >
        {loading && (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        )}
        {products.length
          ? products.map((item) => (
              <MenuCard
                key={item.id}
                image="/images/salads.webp"
                title={item.name}
                category="Pizza"
                description={item.description}
                price="121.99"
              />
            ))
          : ""}
      </div>
      {msg && <EmptyData message={msg} />}
    </div>
  );
};

export default AdminMenu;
