import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <form
      action=""
      method="post"
      className="p-10 bg-dark rounded shadow-2xl md:w-160 w-110 mx-auto text-beige"
    >
      <h1 className="md:text-4xl text-3xl font-bold text-center text-beige mb-15">
        Sign up
      </h1>
      <div className="flex flex-col items-start md:text-xl">
        <div className="w-full flex md:flex-row flex-col items-center gap-5">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="cursor-pointer block text-start font-semibold"
            >
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter Your First Name..."
              className="w-full p-3 outline-0 mt-2 bg-darkGray rounded focus:brightness-80 border border-transparent focus:border-beige"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="cursor-pointer block text-start font-semibold"
            >
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Your Last Name..."
              className="w-full p-3 outline-0 mt-2 bg-darkGray rounded focus:brightness-80 border border-transparent focus:border-beige"
              required
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <label
            htmlFor="birth"
            className="cursor-pointer block text-start font-semibold"
          >
            Birth Date:
          </label>
          <input
            type="date"
            name="birth"
            id="birth"
            className="w-full p-3 outline-0 mt-2 bg-darkGray rounded focus:brightness-80 border border-transparent focus:border-beige"
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
        <div className="w-full mt-5">
          <label
            htmlFor="confirmPassword"
            className="cursor-pointer block text-start font-semibold"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Your Password..."
            className="w-full p-3 outline-0 mt-2 bg-darkGray rounded focus:brightness-80 border border-transparent focus:border-beige"
            required
          />
        </div>
        {/* <div className="w-full mt-5">
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
        </div> */}
        <div className="w-full mt-5 flex gap-5">
          <input
            type="checkbox"
            id="remember"
            className="w-5 h-5 accent-primary cursor-pointer mt-2"
          />
          <label htmlFor="remember" className="cursor-pointer block text-start">
            By Signing up, you agree to our{" "}
            <Link to={"/signup"} className="text-primary underline">
              {" "}
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to={"/signup"} className="text-primary underline">
              {" "}
              Privacy Policy
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="bg-primary border-2 border-transparent py-3 text-beige font-bold w-full mt-5 rounded transition duration-150 ease hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer"
        >
          Submit
        </button>
      </div>
      <p className="text-center mt-5">
        Do you already have an account?{" "}
        <Link to={"/login"} className="text-primary underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
