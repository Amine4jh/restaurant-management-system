import RestaurantCards from "../common/RestaurantCards";

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
        <RestaurantCards />
      </div>
    </div>
  );
};

export default Restaurant;
