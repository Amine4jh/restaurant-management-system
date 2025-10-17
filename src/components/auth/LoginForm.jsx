import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form
      action=""
      method="post"
      className="p-10 bg-dark rounded shadow-2xl md:w-130 w-100 mx-auto text-beige"
    >
      <h1 className="md:text-4xl text-3xl font-bold text-center text-beige mb-15">
        Login
      </h1>
      <div className="flex flex-col items-start md:text-xl">
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
            className="w-full p-3 outline-0 mt-2 bg-darkGray rounded focus:brightness-80 border border-transparent focus:border-beige"
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
            className="w-full p-3 outline-0 mt-2 bg-darkGray rounded focus:brightness-80 border border-transparent focus:border-beige"
            required
          />
        </div>
        <div className="w-full mt-5 flex gap-5 items-center">
          <input
            type="checkbox"
            id="remember"
            className="w-5 h-5 accent-primary cursor-pointer"
          />
          <label htmlFor="remember" className="cursor-pointer block text-start">
            Remember me!
          </label>
        </div>
        <button
          type="submit"
          className="bg-primary border-2 border-transparent py-3 text-beige font-bold w-full mt-5 rounded transition duration-150 ease hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer"
        >
          Login
        </button>
      </div>
      <p className="text-center mt-5">
        You don't have an account?{" "}
        <Link to={"/signup"} className="text-primary underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
