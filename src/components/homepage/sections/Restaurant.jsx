import RestaurantCard from "../common/RestaurantCard";

const Restaurant = () => {
  return (
    <div className="bg-beige">
      <div className="max-w-[1240px] mx-auto text-dark text-center py-50">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
          <span className="text-primary">Our</span> Best Picks
        </h1>
        <p className="lg:text-lg lg:px-60 md:px-30 px-10 my-5 opacity-50">
          Discover our chef's specials, crafted with fresh ingredients and
          bursting with flavor. Whether you're craving something savory or
          sweet, there's something for everyone.
        </p>
        <div className="my-20 lg:flex-row lg:gap-0 flex gap-10 flex-col items-center justify-evenly">
          <RestaurantCard
            image="./images/salads.webp"
            title="Fresh Salads"
            desc="A mix of greens, veggies, and dressings for a healthy start."
          />
          <RestaurantCard
            image="./images/pasta.webp"
            title="Pasta Lovers"
            desc="Creamy, cheesy, and made with love."
          />
          <RestaurantCard
            image="./images/desserts.webp"
            title="Desserts"
            desc="End your meal with a sweet treat."
          />
          <RestaurantCard
            image="./images/drinks.webp"
            title="Drinks"
            desc="Refreshing beverages to complement your meal."
          />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
