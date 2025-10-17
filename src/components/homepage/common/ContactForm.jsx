const ContactForm = () => {
  return (
    <form
      action=""
      className="flex flex-col items-start p-10 bg-beige rounded shadow md:w-130 w-90 mx-auto mt-20 lg:text-xl md:text-lg text-base"
    >
      <div className="w-full">
        <label
          htmlFor="name"
          className="cursor-pointer block text-start font-semibold"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name..."
          className="w-full px-3 py-1 outline-0 brightness-95 mt-2 bg-beige rounded focus:brightness-90 border border-transparent focus:border-dark"
          required
        />
      </div>
      <div className="w-full mt-5">
        <label
          htmlFor="email"
          className="cursor-pointer block text-start font-semibold"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email..."
          className="w-full px-3 py-1 outline-0 brightness-95 mt-2 bg-beige rounded focus:brightness-90 border border-transparent focus:border-dark"
          required
        />
      </div>
      <div className="w-full mt-5">
        <label
          htmlFor="message"
          className="cursor-pointer block text-start font-semibold"
        >
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Write Your Message..."
          className="w-full px-3 py-1 resize-none h-30 outline-0 brightness-95 mt-2 bg-beige rounded focus:brightness-90 border border-transparent focus:border-dark"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-primary border-2 border-transparent py-3 text-beige font-bold w-full mt-5 rounded transition duration-150 ease hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
