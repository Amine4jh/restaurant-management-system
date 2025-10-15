import SignupForm from "../components/auth/SignUpForm";
import AuthHeader from "../layouts/AuthHeader";
import Footer from "../layouts/Footer";

const Signup = () => {
  return (
    <>
      <AuthHeader />
      <div className="bg-beige pt-30 pb-50">
        <SignupForm />
      </div>
      <Footer />
    </>
  );
};

export default Signup;
