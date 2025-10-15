const LoginForm = () => {
  return (
    <form
      action=""
      method="post"
      className="p-10 bg-dark rounded shadow-2xl w-130 mx-auto text-beige"
    >
      <h1 className="text-4xl font-bold text-center text-beige mb-15">Login</h1>
      <div className="flex flex-col items-start text-xl">
        <div className="w-full">
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
            className="w-full p-3 outline-0 brightness-120 mt-2 bg-dark rounded focus:brightness-80 border border-transparent focus:border-beige"
            required
          />
        </div>
        <div className="w-full mt-5">
          <label
            htmlFor="password"
            className="cursor-pointer block text-start font-semibold"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password..."
            className="w-full p-3 outline-0 brightness-120 mt-2 bg-dark rounded focus:brightness-80 border border-transparent focus:border-beige"
            required
          />
        </div>
        <div className="w-full mt-5 flex gap-5 items-center">
          <input
            type="checkbox"
            id="remember"
            className="w-5 h-5 accent-primary cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="cursor-pointer block text-start font-semibold"
          >
            Remember me!
          </label>
        </div>
        <button
          type="submit"
          className="bg-primary border-2 border-transparent py-3 text-beige font-bold w-full mt-5 rounded transition duration-150 ease hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
