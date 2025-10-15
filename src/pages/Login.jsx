import LoginForm from "../components/auth/LoginForm";
import AuthHeader from "../layouts/AuthHeader";
import Footer from "../layouts/Footer";

const Login = () => {
  return (
    <>
      <AuthHeader />
      <div className="bg-beige pt-30 pb-50">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default Login;
