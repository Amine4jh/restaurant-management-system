const MenuCard = ({ image, category, title, description, price }) => {
  return (
    <div className="flex flex-col rounded shadow-lg transition duration-150 ease hover:shadow-xl bg-dark text-beige">
      <img src={image} alt={title} className="rounded-t" />
      <div className="p-5 flex-1">
        <h3 className="md:text-xl text-lg font-semibold mb-2">{title}</h3>
        <span className="text-gold">{category}</span>
        <p className="opacity-75 mt-2 md:text-base text-sm">{description}</p>
      </div>
      <div className="flex items-end justify-between p-5 pt-0">
        <span className="block font-bold text-lg">${price}</span>
        <div className="flex md:gap-5 gap-2">
          <button className="py-1 px-2 bg-gold text-dark border-2 border-gold rounded font-semibold hover:bg-transparent hover:text-gold transition duration-300 ease cursor-pointer">
            Edit
          </button>
          <button className="py-1 px-2 bg-lightRed text-dark border-2 border-lightRed rounded font-semibold hover:bg-transparent hover:text-lightRed transition duration-300 ease cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
