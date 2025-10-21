import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import CustomInput from "../common/CustomInput";
import { loginSchema } from "../../schemas";
import CustomCheckbox from "../common/CustomCheckbox";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", remember: false }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="p-10 bg-dark rounded shadow-2xl md:w-130 w-100 mx-auto text-beige">
          <CustomInput
            label="Email"
            name="email"
            type="text"
            placeholder="Enter your email..."
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password..."
          />
          <CustomCheckbox
            label="Remember me!"
            name="remember"
            type="checkbox"
          />
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-primary border-2 border-transparent py-3 text-beige font-bold w-full mt-5 rounded transition duration-150 ease hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer"
          >
            Login
          </button>
          <p className="text-center mt-5">
            You don't have an account?{" "}
            <Link to={"/signup"} className="text-primary underline">
              Sign up
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
