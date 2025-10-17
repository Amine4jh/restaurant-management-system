import SignupForm from "../components/auth/SignUpForm";
import AuthHeader from "../layouts/AuthHeader";
import Footer from "../layouts/Footer";

const Signup = () => {
  return (
    <div className="bg-beige">
      <AuthHeader />
      <div className="max-w-[1240px] mx-auto pt-30 pb-50">
        <SignupForm />
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
