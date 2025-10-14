import React from "react";

function RestaurantCards() {
  return (
    <div className="my-20 flex items-baseline justify-between">
      <div className="w-[250px] rounded shadow hover:scale-110 transition duration-150 ease hover:shadow-xl">
        <img
          src="./images/salads.jpg"
          alt="Salads"
          className="rounded-t"
          width={250}
        />
        <div className="py-5 px-3">
          <h3 className="text-xl font-semibold text-primary">Fresh Salads</h3>
          <p className="opacity-75 my-2">
            A mix of greens, veggies, and dressings for a healthy start.
          </p>
        </div>
      </div>
      <div className="w-[250px] rounded shadow hover:scale-110 transition duration-150 ease hover:shadow-xl">
        <img
          src="./images/pasta.jpg"
          alt="Pasta"
          className="rounded-t"
          width={250}
        />
        <div className="py-5 px-3">
          <h3 className="text-xl font-semibold text-primary">Pasta Lovers</h3>
          <p className="opacity-75 my-2">Creamy, cheesy, and made with love.</p>
        </div>
      </div>
      <div className="w-[250px] rounded shadow hover:scale-110 transition duration-150 ease hover:shadow-xl">
        <img
          src="./images/desserts.jpg"
          alt="Desserts"
          className="rounded-t"
          width={250}
        />
        <div className="py-5 px-3">
          <h3 className="text-xl font-semibold text-primary">Desserts</h3>
          <p className="opacity-75 my-2">End your meal with a sweet treat.</p>
        </div>
      </div>
      <div className="w-[250px] rounded shadow hover:scale-110 transition duration-150 ease hover:shadow-xl">
        <img
          src="./images/drinks.jpg"
          alt="Drinks"
          className="rounded-t"
          width={250}
        />
        <div className="py-5 px-3">
          <h3 className="text-xl font-semibold text-primary">Drinks</h3>
          <p className="opacity-75 my-2">
            Refreshing beverages to complement your meal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCards;
