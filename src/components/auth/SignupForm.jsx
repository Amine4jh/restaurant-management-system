import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import CustomInput from "../common/CustomInput";
import CustomCheckbox from "../common/CustomCheckbox";
import { signupSchema } from "../../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignupForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          birth: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptTos: false,
        }}
        validationSchema={signupSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="p-10 bg-dark rounded shadow-2xl md:w-160 w-110 mx-auto text-beige">
            <h1 className="md:text-4xl text-3xl font-bold text-center text-beige mb-15">
              Sign up
            </h1>
            <div className="flex flex-col items-start md:text-xl">
              <div className="w-full flex md:flex-row flex-col gap-5">
                <CustomInput
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name..."
                />
                <CustomInput
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name..."
                />
              </div>
              <CustomInput label="Birth Date" type="date" name="birth" />
              <CustomInput
                label="Email"
                type="text"
                name="email"
                placeholder="Enter your email..."
              />
              <CustomInput
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password..."
              />
              <CustomInput
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password..."
              />
              <CustomCheckbox
                label="By Signing up, you agree to our Terms of Service and Privacy Policy"
                type="checkbox"
                name="acceptTos"
              />
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-primary border-2 border-transparent py-3 text-beige font-bold w-full mt-5 rounded transition duration-150 ease hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer"
              >
                Sign up
              </button>
            </div>
            <p className="text-center mt-5">
              Do you already have an account?{" "}
              <Link to={"/login"} className="text-primary underline">
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>

      {/* TOS Conditions */}
      {/* <div className="w-full mt-5 flex gap-5">
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
      </div> */}
    </>
  );
};

export default SignupForm;
