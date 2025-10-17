import RestaurantCards from "../common/RestaurantCards";

const Restaurant = () => {
  return (
    <div className="bg-beige text-dark text-center px-30 py-50">
      <h1 className="text-4xl font-bold">
        <span className="text-primary">Our</span> Best Picks
      </h1>
      <p className="text-lg px-70 my-5 opacity-50">
        Discover our chef's specials, crafted with fresh ingredients and
        bursting with flavor. Whether you're craving something savory or sweet,
        there's something for everyone.
      </p>
      <RestaurantCards />
    </div>
  );
};

export default Restaurant;
