import React from "react";

function RestaurantCards() {
  return (
    <div className="my-20 lg:flex-row lg:gap-0 flex gap-10 flex-col items-center justify-evenly">
      <div className="w-[250px] rounded shadow hover:scale-110 transition duration-150 ease hover:shadow-xl bg-amber-50">
        <img
          src="./images/salads.webp"
          alt="Salads"
          className="rounded-t"
          width={250}
        />
        <div className="py-5 px-3">
          <h3 className="md:text-xl text-lg font-semibold text-primary">
            Fresh Salads
          </h3>
          <p className="opacity-75 my-2 md:text-base text-sm">
            A mix of greens, veggies, and dressings for a healthy start.
          </p>
        </div>
      </div>
      <div className="w-[250px] rounded shadow hover:scale-110 transition duration-150 ease hover:shadow-xl bg-amber-50">
        <img
          src="./images/pasta.webp"
          alt="Pasta"
          className="rounded-t"
          width={250}
        />
        <div className="py-5 px-3">
          <h3 className="md:text-xl text-lg font-semibold text-primary">
            Pasta Lovers
          </h3>
          <p className="opacity-75 my-2 md:text-base text-sm">
            Creamy, cheesy, and made with love.
          </p>
        </div>
      </div>
      <div className="w-[250px] rounded shadow hover:scale-110 transition duration-150 ease hover:shadow-xl bg-amber-50">
        <img
          src="./images/desserts.webp"
          alt="Desserts"
          className="rounded-t"
          width={250}
        />
        <div className="py-5 px-3">
          <h3 className="md:text-xl text-lg font-semibold text-primary">
            Desserts
          </h3>
          <p className="opacity-75 my-2 md:text-base text-sm">
            End your meal with a sweet treat.
          </p>
        </div>
      </div>
      <div className="w-[250px] rounded shadow hover:scale-110 transition duration-150 ease hover:shadow-xl bg-amber-50">
        <img
          src="./images/drinks.webp"
          alt="Drinks"
          className="rounded-t"
          width={250}
        />
        <div className="py-5 px-3">
          <h3 className="md:text-xl text-lg font-semibold text-primary">
            Drinks
          </h3>
          <p className="opacity-75 my-2 md:text-base text-sm">
            Refreshing beverages to complement your meal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCards;
