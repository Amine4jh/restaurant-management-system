const RestaurantCard = ({ image, title, desc }) => {
  return (
    <div className="w-[250px] rounded shadow hover:scale-110 transition duration-150 ease hover:shadow-xl bg-amber-50">
      <img src={image} alt="" className="rounded-t" width={250} />
      <div className="py-5 px-3">
        <h3 className="md:text-xl text-lg font-semibold text-primary">
          {title}
        </h3>
        <p className="opacity-75 my-2 md:text-base text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
